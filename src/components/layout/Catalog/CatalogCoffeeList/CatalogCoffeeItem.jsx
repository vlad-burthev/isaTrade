import "./CatalogTeaItem.scss";

const CatalogTeaItem = ({ img, name }) => {
  return (
    <div className="catalogtea-item catalog-item">
      <img src={img} alt="" />
    </div>
  );
};

export default CatalogTeaItem;
