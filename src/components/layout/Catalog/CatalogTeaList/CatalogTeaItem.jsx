import { useState } from "react";
import { MyButtonMore, MyButtonOrder } from "../../../UI/MyButtons/MyButtons";
import "./CatalogTeaItem.scss";

const CatalogTeaItem = ({ item, orderInfo, getInfoHandler }) => {
  const [onHover, setOnHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
      className="catalogTea-item catalog-item"
    >
      <img src={item.photo} alt="" />

      <div className={`catalog-item-hover ${onHover ? "show-item-hover" : ""}`}>
        <h3 className="productCard-name">{item.name}</h3>
        <p className="productCard-sort descrip">-{item.sort}</p>

        <div className="productCard-btns">
          <MyButtonMore
            onClick={() => getInfoHandler(item)}
            className="productCard-more"
          >
            Більше
          </MyButtonMore>
          <MyButtonOrder
            className="productCard-order"
            onClick={() => orderInfo(item)}
          >
            Замовити
          </MyButtonOrder>
        </div>
      </div>
    </div>
  );
};

export default CatalogTeaItem;
