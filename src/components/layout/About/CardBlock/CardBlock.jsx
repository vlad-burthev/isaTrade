import { useEffect } from "react";
import "./CardBlock.scss";

const CardBlock = () => {
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
    <div className="about-card-block">
      <div className="about-card anim-items">
        <p className="about-card-info">
          Зареєстровані як <span>ФОП</span>
        </p>
        <img src="./img/about/iconFOP.png" alt="FOP" width="64px" />
      </div>
      <div className="about-card anim-items">
        <p className="about-card-info">
          Маємо <span>3</span> власних точки <span>Isa Point</span>
        </p>
        <img src="./img/about/iconPoint.png" alt="Point" width="64px" />
      </div>
      <div className="about-card anim-items">
        <p className="about-card-info">
          Створили <span>власний бренд</span> розчинної та зернової кави
        </p>
        <img src="./img/about/iconBrand.png" alt="Brand" width="64px" />
      </div>
      <div className="about-card anim-items">
        <p className="about-card-info">
          Нараховуємо більше <span>5000</span> клієнтів
        </p>
        <img src="./img/about/iconClient.png" alt="Client" width="100px" />
      </div>
    </div>
  );
};

export default CardBlock;
