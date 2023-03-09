import { useEffect } from "react";
import "./PartnersCardList.scss";

const PartnersCard = () => {
  useEffect(() => {
    const animItems = document.querySelectorAll(".anim-items");
    const animOnScroll = () => {
      for (let index = 0; index < animItems.length; index++) {
        const animItem = animItems[index];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 4;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;

        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if (
          window.pageYOffset > animItemOffset - animItemPoint &&
          window.pageYOffset < animItemOffset + animItemHeight
        ) {
          animItem.classList.add("active");
        } else {
          animItem.classList.remove("active");
        }
      }
    };
    const offset = (el) => {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    };
    setTimeout(() => {
      animOnScroll();
    }, 300);
    window.addEventListener("scroll", animOnScroll);

    return () => {
      window.removeEventListener("scroll", animOnScroll);
    };
  }, []);

  return (
    <div className="partnersCardList">
      <div className="partnersCard anim-items">
        <img
          src="./img/partners/tor.svg"
          style={{ backgroundColor: "#000" }}
          alt=""
        />
      </div>
      <div className="partnersCard anim-items">
        <img src="./img/partners/galuchina.png" alt="" />
      </div>
      <div className="partnersCard anim-items">
        <img src="./img/partners/pitbull.png" alt="" />
      </div>
      <div className="partnersCard anim-items">
        <img src="./img/partners/bobsnail.jpg" alt="" />
      </div>
      <div className="partnersCard anim-items">
        <img
          src="./img/partners/mrgrill.webp"
          style={{ backgroundColor: "#fff" }}
          alt=""
        />
      </div>
    </div>
  );
};

export default PartnersCard;
