import { Link } from "react-router-dom";
import { Select__city } from "./Select__city.jsx";
import classes from "./Header__top.module.css";

export const Header__top = () => {
  return (
    <div className={"container-l"}>
      <div className={`container ${classes.header__top}`}>
        <span className={classes.header__select}>
          <p className={classes.header__text}>Ваш регион:</p>
          <Select__city />
        </span>
        <a className={classes.header__phone} href="tel:+74958854547">
          +7 (495) 885-45-47
        </a>
        <nav>
          <ul className={classes.header__list}>
            <li>
              <Link to="/">О компании</Link>
            </li>
            <li>
              <Link to="/">Гарантия и возврат</Link>
            </li>
            <li>
              <Link to="/">Корпоративным клиентам</Link>
            </li>
            <li>
              <Link to="/">Дизайн-решение</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
