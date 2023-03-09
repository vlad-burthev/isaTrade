import CatalogTeaItem from "./CatalogCoffeeItem";

const CatalogTeaList = (props) => {
  const filtered = props.teaStore.filter(
    (item) =>
      item.name.toLowerCase().includes(props.inputName.trim().toLowerCase()) ||
      item.description
        .toLowerCase()
        .includes(props.inputName.trim().toLowerCase()) ||
      item.description.toLowerCase().includes("фрукти")
  );

  return (
    <div className="CatalogTeaList-content">
      {filtered.length === 0 ? (
        <h1 style={{ textAlign: "center", color: "#fff" }}>
          Здається, такого товару немає
        </h1>
      ) : (
        filtered.map((item) => (
          <CatalogTeaItem key={item.id} img={item.photo} name={item.name} />
        ))
      )}
    </div>
  );
};

export default CatalogTeaList;
