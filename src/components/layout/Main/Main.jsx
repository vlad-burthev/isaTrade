import About from "../About/About";
import FruitBoom from "../FruitBoom/FruitBoom";
import Intro from "../Intro/Intro";
import Partners from "../Partners/Partners";
import Product from "../Product/Product";

const Main = ({
  orderInfo,
  getInfoHandler,
  setShowModalOrder,
  setShowModalMore,
}) => {
  return (
    <div>
      <Intro />
      <About />
      <Partners />
      <FruitBoom />

      <Product
        orderInfo={orderInfo}
        getInfoHandler={getInfoHandler}
        showModal={setShowModalOrder}
        setShowModalMore={setShowModalMore}
      />
    </div>
  );
};

export default Main;
