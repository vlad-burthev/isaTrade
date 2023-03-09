import { useState } from "react";
import { MyButtonMore, MyButtonOrder } from "../../../UI/MyButtons/MyButtons";
import "./ProductCard.scss";

const ProductCard = (props) => {
  const fill3 = (
    <div className="coffeeStrength">
      <img src="./img/catalog/coffee/fill.png" alt="" />
      <img src="./img/catalog/coffee/fill.png" alt="" />
      <img src="./img/catalog/coffee/fill.png" alt="" />
    </div>
  );

  const fill4 = (
    <div className="coffeeStrength">
      <img src="./img/catalog/coffee/fill.png" alt="" />
      <img src="./img/catalog/coffee/fill.png" alt="" />
      <img src="./img/catalog/coffee/fill.png" alt="" />
      <img src="./img/catalog/coffee/fill.png" alt="" />
    </div>
  );

  const [cardHover, setCardHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setCardHover(true)}
      onMouseLeave={() => setCardHover(false)}
      className="productCard"
    >
      <div className="productCard-img">
        <img src={props.img} alt="" />
      </div>

      <div
        className={`productCard-hover ${
          cardHover ? "productCard-hover-show" : ""
        }`}
      >
        <div className="productCard-desc">
          <h3 className="productCard-name">{props.name}</h3>
          <p className="productCard-sort">- {props.sort}</p>
          <div className="productCard-strenght">
            - Міцність: {props.strength === 3 ? fill3 : fill4}
          </div>
          <div className="productCard-btns">
            <MyButtonMore
              onClick={() => props.getInfoHandler(props.item)}
              className="productCard-more"
            >
              Більше
            </MyButtonMore>
            <MyButtonOrder
              className="productCard-order"
              onClick={() => props.orderInfo(props.item)}
            >
              Замовити
            </MyButtonOrder>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
