import CatalogTeaItem from "./CatalogTeaItem";

const CatalogTeaList = (props) => {
  const filtered = props.store.filter(
    (item) =>
      item.name.toLowerCase().includes(props.inputName.trim().toLowerCase()) ||
      item.sort.toLowerCase().includes(props.inputName.trim().toLowerCase())
  );

  return (
    <div className="CatalogTeaList-content">
      {filtered.length === 0 ? (
        <h1 style={{ textAlign: "center", color: "#fff" }}>
          Здається, такого товару немає
        </h1>
      ) : (
        filtered.map((item) => (
          <CatalogTeaItem
            key={item.id}
            item={item}
            getInfoHandler={props.getInfoHandler}
            orderInfo={props.orderInfo}
          />
        ))
      )}
    </div>
  );
};

export default CatalogTeaList;
