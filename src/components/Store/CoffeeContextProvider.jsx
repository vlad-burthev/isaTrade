import { useContext } from "react";
import CoffeeContext from "./coffee-context";

const CoffeeContextProvider = (props) => {
  const context = useContext(CoffeeContext);

  return (
    <CoffeeContext.Provider value={context}>
      {props.children}
    </CoffeeContext.Provider>
  );
};

export default CoffeeContextProvider;
