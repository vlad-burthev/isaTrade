import { useEffect } from "react";
import Container from "../../UI/Container/Container";
import "./Intro.scss";
import IntroPhoto from "./IntroPhoto/IntroPhoto";

const Intro = () => {
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
    <div className="intro">
      <Container>
        <section className="intro-section">
          <div className="intro-content ">
            <h1 className="intro-title anim-items">
              A bad day with coffee is better than good day without it.
            </h1>
          </div>
          <IntroPhoto />
        </section>
      </Container>
    </div>
  );
};

export default Intro;
