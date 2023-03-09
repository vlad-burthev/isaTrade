import Container from "../../UI/Container/Container";
import "./Product.scss";
import ProductCardList from "./ProductCardList/ProductCardList";

const Product = ({
  showModal,
  setShowModalMore,
  getInfoHandler,
  orderInfo,
}) => {
  return (
    <div className="product">
      <Container>
        <section className="product-section">
          <a href="/catalog" className="product-title-btn">
            Увійти в Каталог
          </a>

          <div className="product-content">
            <ProductCardList
              orderInfo={orderInfo}
              getInfoHandler={getInfoHandler}
              showModal={showModal}
              setShowModalMore={setShowModalMore}
            />
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Product;
