import "./ProductCardList.scss";
import CoffeeContext from "../../../Store/coffee-context";
import { useContext } from "react";
import ProductCard from "./ProductCard";

const ProductCardList = ({
  showModal,
  setShowModalMore,
  getInfoHandler,
  orderInfo,
}) => {
  const CoffeeCTX = useContext(CoffeeContext);

  const coffeeStore = CoffeeCTX.coffee;

  return (
    <div className="productCardList">
      <div className="productCardList-content">
        {coffeeStore.map((item) => (
          <ProductCard
            orderInfo={orderInfo}
            item={item}
            getInfoHandler={getInfoHandler}
            setShowModalMore={setShowModalMore}
            showModal={showModal}
            key={item.id}
            img={item.photo}
            name={item.name}
            sort={item.sort}
            strength={item.strength}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCardList;
