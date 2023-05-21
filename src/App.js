import ModalMore from "./components/UI/ModalMore/ModalMore";
import ModalOrder from "./components/UI/ModalOrder/ModalOrder";
import { useEffect, useState } from "react";
import Footer from "./components/layout/Footer/Footer";
import Header from "./components/layout/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Catalog from "./components/layout/Catalog/Catalog";
import Main from "./components/layout/Main/Main";
import ModalConsult from "./components/UI/ModalConsult/ModalConsult";
import CoffeeContextProvider from "./components/Store/CoffeeContextProvider";
import MobHeader from "./components/layout/MobHeader/MobHeader";
import { HashRouter } from "react-router-dom";

function App() {
  const [showModalOrder, setShowModalOrder] = useState(false);
  const [showModalMore, setShowModalMore] = useState(false);
  const [showModalConsult, setShowModalConsult] = useState(false);

  const [infoMore, setInfoMore] = useState("");
  const [infoOrder, setInfoOrder] = useState("");

  const getInfoHandler = (info) => {
    setInfoMore(info);
    setShowModalMore(true);
  };

  const orderFromMore = (info) => {
    setInfoOrder(info);
    setShowModalOrder(true);
    setShowModalMore(false);
  };

  const orderInfo = (info) => {
    setInfoOrder(info);
    setShowModalOrder(true);
  };
  const [WindowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, [WindowWidth]);

  return (
    <>
      <Header showModal={setShowModalConsult} />
      <MobHeader />

      <CoffeeContextProvider>
        <HashRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  orderInfo={orderInfo}
                  orderFromMore={orderFromMore}
                  getInfoHandler={getInfoHandler}
                  setShowModalMore={setShowModalMore}
                  setShowModalOrder={setShowModalOrder}
                />
              }
            />
            <Route
              path="/catalog"
              element={
                <Catalog
                  orderInfo={orderInfo}
                  getInfoHandler={getInfoHandler}
                />
              }
            />
          </Routes>
        </HashRouter>
      </CoffeeContextProvider>

      {showModalOrder && (
        <ModalOrder infoOrder={infoOrder} showModal={setShowModalOrder} />
      )}
      {showModalMore && (
        <ModalMore
          orderFromMore={orderFromMore}
          infoMore={infoMore}
          setShowModalMore={setShowModalMore}
        />
      )}

      {showModalConsult && (
        <ModalConsult setShowModalConsult={setShowModalConsult} />
      )}
      <Footer />
    </>
  );
}

export default App;
