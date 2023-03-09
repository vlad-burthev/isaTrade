import { MyButtonOrder } from "../MyButtons/MyButtons";
import "./ModalMore.scss";

const ModalMore = ({ setShowModalMore, infoMore, orderFromMore }) => {
  return (
    <div onClick={() => setShowModalMore(false)} className="modalMore">
      <section
        onClick={(e) => e.stopPropagation()}
        className="modalMore-section"
      >
        <div className="modalMore-content">
          <button
            onClick={() => setShowModalMore(false)}
            className="modalMore-close"
          >
            <span></span>
            <span></span>
          </button>
          <div className="modalMore-photo">
            <img src={infoMore.photo} alt="" />
          </div>
          <div className="modalMore-info">
            <h1 className="modalMore-title">{infoMore.name}</h1>
            <p>
              <strong>Склад: </strong>
              {infoMore.sort}
            </p>
            {infoMore.roast === undefined ? (
              ""
            ) : (
              <p>
                <strong>Обсмаження: </strong>
                {infoMore.roast}
              </p>
            )}

            {infoMore.strength === undefined ? (
              ""
            ) : (
              <p>
                <strong>Міцність: </strong>
                {infoMore.strength} / 5
              </p>
            )}

            {infoMore.description === undefined ? (
              ""
            ) : (
              <p>
                <strong>Описання: </strong>
                {infoMore.description}
              </p>
            )}

            {infoMore.taste === undefined ? (
              ""
            ) : (
              <p>
                <strong>Смак: </strong>
                {infoMore.taste}
              </p>
            )}

            <p>
              <strong>Ціна за 100г: </strong>
              {infoMore.price} грн
            </p>
            <p>
              <strong>Ціна за 1000г: </strong>
              {infoMore.price * 10 - infoMore.price} грн
            </p>

            <MyButtonOrder
              onClick={() => orderFromMore(infoMore)}
              className="modalMore-btn-order"
            >
              Замовити
            </MyButtonOrder>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ModalMore;
