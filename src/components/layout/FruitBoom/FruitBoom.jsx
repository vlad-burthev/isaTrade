import { useEffect } from "react";
import Container from "../../UI/Container/Container";
import "./fruitBoom.scss";

const FruitBoom = () => {
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
    }, 600);
    window.addEventListener("scroll", animOnScroll);

    return () => {
      window.removeEventListener("scroll", animOnScroll);
    };
  }, []);

  return (
    <div className="fruitBoom">
      <img
        className="hand lefthand anim-items"
        src="./img/catalog/tea/leftHand.png"
        alt=""
      />
      <img
        className="hand righthand anim-items"
        src="./img/catalog/tea/rightHand.png"
        alt=""
      />
      <Container>
        <section className="fruitBoom-section">
          <div className="fruitBoom-header">
            <h1 className="fruitBoom-title">BoomFruit</h1>
          </div>

          <div className="fruitBoom-content">
            <div className="fruitBoom-photo anim-items">
              <img src="./img/catalog/tea/fruitBoom.jpg" alt="" />
            </div>
            <div className="fruitBoom-info">
              <p className="anim-items">
                ISATRADE створив унікальний чай з фруктовою сумішшю та кусочками
                ананаса, папайї, манго, малини, брусники та шипшини. Цей чай
                чудово поєднує в собі смакові якості різноманітних фруктів,
                завдяки чому ним можна насолоджуватися як гарячим, так і
                прохолодним напоєм. Він також містить багато корисних речовин,
                які позитивно впливають на здоров'я та імунітет. Спробуйте чай
                від ISATRADE та насолоджуйтесь його свіжим та приємним смаком!
              </p>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default FruitBoom;
