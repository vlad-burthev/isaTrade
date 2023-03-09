import { useEffect } from "react";
import "./AboutUs.scss";

const AboutUs = () => {
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
    <div className="about-us">
      <div className="about-us-info anim-items">
        <h3>ISATRADE</h3>
        <p className="about-slogan ">
          Насичений аромат та бадьорість смаку - це наша пристрасть, а якість -
          наша гарантія. Ми дбаємо про кожне зерно, щоб наша кава завжди була
          свіжою та насиченою. Обирайте краще та насолоджуйтеся кожним ковтком,
          який нагадуватиме про справжню кавову культуру. Подаруйте собі кращий
          ранок та почніть день з нами.
        </p>
        <p>
          ISATRADE — невелика Одеська компанія, яка прагне бути одним із
          найкращих постачальників кави в Україні.
        </p>
      </div>
      <div className="about-us-img anim-items">
        <img src="./img/about/admin.jpg " alt="" />
      </div>
    </div>
  );
};

export default AboutUs;
