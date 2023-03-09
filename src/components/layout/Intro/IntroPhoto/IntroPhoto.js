import { useCallback, useEffect, useState } from "react";
import "./IntroPhoto.scss";

const IntroPhoto = () => {
  const [paralaxX, setParalaxX] = useState(0);
  const [paralaxY, setParalaxY] = useState(0);

  const [scroll, setScroll] = useState(0);
  const onScroll = useCallback(() => setScroll(Math.round(window.scrollY)), []);
  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  window.addEventListener("mousemove", function par(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    setParalaxX(x * 50);
    setParalaxY(y * 50);
  });

  if (scroll < 800) {
    var coffee = "translate(" + -paralaxX + "px, " + -paralaxY + "px)";
    var pacOfCoffee = "translate(" + paralaxX + "px, " + paralaxY + "px)";
  }

  return (
    <div className="intro-photo">
      <div
        style={{ transform: window.innerWidth < 768 ? "0px, 0px" : coffee }}
        className="intro-photo-coffee"
      ></div>
      <img
        style={{
          transform: window.innerWidth < 768 ? "0px, 0px" : pacOfCoffee,
        }}
        className="pack"
        src="./img/intro/pack.png"
        width="500px"
        alt=""
      />
    </div>
  );
};

export default IntroPhoto;
