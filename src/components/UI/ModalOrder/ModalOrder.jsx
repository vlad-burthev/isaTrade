import axios from "axios";
import { useEffect, useState } from "react";

import "./ModalOrder.scss";

const ModalOrder = ({ showModal, infoOrder }) => {
  const [gram, setGram] = useState(100);
  const [orderPrice, setOrderPrice] = useState(infoOrder.price);

  useEffect(() => {
    if (infoOrder.photo.includes("coffee")) {
      if (gram < 1000) {
        setOrderPrice((gram / 100) * infoOrder.price);
      } else if (+gram < 2000) {
        setOrderPrice((gram / 100) * infoOrder.price - infoOrder.price);
      } else if (+gram < 3000) {
        setOrderPrice((gram / 100) * infoOrder.price - infoOrder.price * 2);
      } else if (+gram < 4000) {
        setOrderPrice((gram / 100) * infoOrder.price - infoOrder.price * 3);
      } else if (+gram < 5000) {
        setOrderPrice((gram / 100) * infoOrder.price - infoOrder.price * 4);
      } else if (+gram < 6000) {
        setOrderPrice((gram / 100) * infoOrder.price - infoOrder.price * 5);
      } else if (+gram < 7000) {
        setOrderPrice((gram / 100) * infoOrder.price - infoOrder.price * 6);
      } else if (+gram < 8000) {
        setOrderPrice((gram / 100) * infoOrder.price - infoOrder.price * 7);
      } else if (+gram < 9000) {
        setOrderPrice((gram / 100) * infoOrder.price - infoOrder.price * 8);
      }
    } else {
      setOrderPrice((gram / 100) * infoOrder.price);
    }
  }, [gram, infoOrder.price, infoOrder.photo]);

  const onChangeGram = (event) => {
    setGram(event.target.value);
  };

  const [nameValid, setNameValid] = useState(true);
  const [numValid, setNumValid] = useState(true);

  const [formValid, setFormValid] = useState(false);

  const [changeName, setChangeName] = useState("");
  const [changePhone, setChangePhone] = useState("");

  const onChangeName = (event) => {
    setChangeName(event.target.value);
  };
  const onChangeTel = (event) => {
    setChangePhone(event.target.value);
  };

  useEffect(() => {
    if (changeName.trim().length > 0) {
      setNameValid(true);
    }
    if (changePhone.trim().length > 9) {
      setNumValid(true);
    }

    if (changePhone.trim().length > 9 && changeName.trim().length > 0) {
      setFormValid(true);
    }
  }, [changeName, changePhone]);

  const submit = (event) => {
    event.preventDefault();

    if (changeName.trim().length === 0) {
      setNameValid(false);
    }
    if (changePhone.trim().length < 10) {
      setNumValid(false);
    }

    if (formValid) {
      showModal(false);
    } else {
      return;
    }
  };

  const mail = `Телефон: ${changePhone}, Имя: ${changeName}, Товар: ${
    infoOrder.name
  }, Цена: ${orderPrice.toFixed(1)}, Количество: ${gram} грам`;

  return (
    <div onClick={() => showModal(false)} className="modalOrder">
      <section
        onClick={(e) => e.stopPropagation()}
        className="modalOrder-section"
      >
        <div className="modalOrder-content">
          <button onClick={() => showModal(false)} className="modalMore-close">
            <span></span>
            <span></span>
          </button>
          <div className="modalOrder-info">
            <form method="POST" onSubmit={submit}>
              <p className="modalOrder-label">
                Товар: <span name="tovar">{infoOrder.name}</span>
              </p>
              <div className="inputPrice modalOrder-label">
                <p>Килькість:</p>
                <input
                  type="number"
                  size="4"
                  name="user_gram"
                  onChange={onChangeGram}
                  value={gram}
                  min="100"
                  max="9000"
                  step="50"
                />
                <p>грам</p>
              </div>
              <p className="modalOrder-label">
                Ціна: <span>{orderPrice.toFixed(1)}</span> грн
              </p>

              <div className="modalOrder-contact">
                <div className="input-block">
                  <span className={nameValid ? "" : "errorText"}>
                    Поле не може бути порожнім.
                  </span>
                  <input
                    className={nameValid ? "" : "error"}
                    type="text"
                    name="user_name"
                    onChange={onChangeName}
                    value={changeName}
                    maxLength="25"
                    placeholder="Ваше Ім'я"
                  />
                </div>
                <div className="input-block">
                  <span className={numValid ? "" : "errorText"}>
                    Має бути більше 10 символів.
                  </span>
                  <input
                    className={numValid ? "" : "error"}
                    type="number"
                    name="user_phone"
                    maxLength="15"
                    onChange={onChangeTel}
                    value={changePhone}
                    placeholder="Ваш номер телефону"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="SubmitButton"
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
          <div className="modalOrder-photo">
            <img src={infoOrder.photo} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ModalOrder;
