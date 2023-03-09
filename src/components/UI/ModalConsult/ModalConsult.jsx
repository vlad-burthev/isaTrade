import axios from "axios";
import { useEffect, useState } from "react";
import "./ModalConsult.scss";

const ModalConsult = ({ setShowModalConsult }) => {
  const [inputName, setInputName] = useState("");
  const [inputNumber, setInputNumber] = useState("");

  const inputNameChange = (event) => {
    setInputName(event.target.value);
  };

  const inputNumberChange = (event) => {
    setInputNumber(event.target.value);
  };

  const [nameValid, setNameValid] = useState(true);
  const [numValid, setNumValid] = useState(true);

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (inputName.trim().length > 0) {
      setNameValid(true);
    }
    if (inputNumber.trim().length > 9) {
      setNumValid(true);
    }

    if (inputNumber.trim().length > 9 && inputName.trim().length > 0) {
      setFormValid(true);
    }
  }, [inputName, inputNumber]);

  const Submit = (e) => {
    e.preventDefault();

    if (inputName.trim().length === 0) {
      setNameValid(false);
    }
    if (inputNumber.trim().length < 10) {
      setNumValid(false);
    }

    if (formValid) {
      setShowModalConsult(false);
    } else {
      return;
    }
  };

  const mail = `Телефон: ${inputName}, Имя: ${inputNumber}`;

  return (
    <div onClick={() => setShowModalConsult(false)} className="modalConsult">
      <section
        onClick={(e) => e.stopPropagation()}
        className="modalConsult-section"
      >
        <div className="modalConsult-content">
          <span
            onClick={() => setShowModalConsult(false)}
            className="modalConsult-close"
          >
            Закрити
          </span>
          <div className="modalConsult-title">
            Будь ласка, надайте свої контактні дані, і наш менеджер зв'яжеться з
            вами.
          </div>
          <form
            method="POST"
            action="../../../server/mail.php"
            onSubmit={Submit}
          >
            <div className="modalConsult-input modalConsult-input-name">
              <span className={nameValid ? "" : "errorText"}>
                Поле не може бути порожнім.
              </span>
              <input
                className={nameValid ? "" : "error"}
                onChange={inputNameChange}
                type="text"
                name="user_name"
                value={inputName}
                placeholder="Ваше ім'я"
              />
            </div>

            <div className="modalConsult-input modalConsult-input-num">
              <span className={numValid ? "" : "errorText"}>
                Має бути більше 10 символів.
              </span>
              <input
                className={numValid ? "" : "error"}
                onChange={inputNumberChange}
                type="number"
                name="user_phone"
                value={inputNumber}
                placeholder="Ваш номер телефону"
              />
            </div>

            <button
              onClick={async () => {
                if (formValid) {
                  try {
                    await axios({
                      url: `https://api.telegram.org/bot6029871288:AAHiFFWL2in4QUbtD01MRkKAC5vh65Dz8cs/sendMessage?chat_id=-1001859457957&parse_mode=html&text=${mail}`,
                      headers: {
                        "Content-type": "application/json",
                      },
                      params: {
                        field: "",
                      },
                      method: "GET",
                      data: null,
                    }).then(({ data }) => {
                      return data;
                    });
                  } catch (e) {
                    console.log("Sending error", e);
                  }
                }
              }}
            >
              Відправити
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ModalConsult;
