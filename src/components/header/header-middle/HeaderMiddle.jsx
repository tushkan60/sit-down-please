import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import classes from "./HeaderMiddle.module.css";

export const HeaderMiddle = () => {
  return (
    <div className={`container ${classes.header__middle}`}>
      <Link to={"/"}>
        <img
          className={classes.header__logo}
          src={logo}
          alt="sit down please logo"
        />
      </Link>
      <nav>
        <ul className={classes.header__list}>
          <li>
            <Link className={classes.header__link} to={"catalog/"}>
              Каталог
            </Link>
          </li>
          <li>
            <Link className={classes.header__link} to={"/"}>
              Магазины
            </Link>
          </li>
          <li>
            <Link className={classes.header__link} to={"/"}>
              Шоу-рум
            </Link>
          </li>
          <li>
            <Link className={classes.header__link} to={"/"}>
              Доставка и оплата
            </Link>
          </li>
          <li>
            <Link className={classes.header__link} to={"/"}>
              Дисконт
            </Link>
          </li>
          <li>
            <Link className={classes.header__link} to={"/"}>
              Контакты
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
