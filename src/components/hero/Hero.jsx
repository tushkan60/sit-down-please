import Carousel from "react-bootstrap/Carousel";
import hero1 from "../../assets/hero-1.jpg";
import hero2 from "../../assets/hero-2.jpg";
import hero3 from "../../assets/hero-3.jpg";
import classes from "./Hero.module.css";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className={classes.hero}>
      <Carousel controls={false}>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={hero1}
            alt="First slide"
            height={"400"}
          />
          <Carousel.Caption bsPrefix={`container ${classes.hero__descrip}`}>
            <h3>
              Скидка 15% <br /> на первую покупку
            </h3>
            <Link to={"/"} className={"btn__primary-fill"}>
              Получить!
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={hero2}
            alt="Second slide"
            height={"400"}
          />
          <Carousel.Caption bsPrefix={`container ${classes.hero__descrip}`}>
            <h3>
              1000+ аксессуаров <br /> для дома
            </h3>
            <Link to={"/"} className={"btn__primary-fill"}>
              Подробнее
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={hero3}
            alt="Third slide"
            height={"400"}
          />
          <Carousel.Caption
            bsPrefix={`container ${classes.hero__descrip} ${classes.hero__descripLight}`}
          >
            <h3>
              Коллекция стильного <br /> и яркого текстиля
            </h3>
            <Link to={"/"} className={"btn__primary-fill"}>
              Подробнее
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
