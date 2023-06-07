import classes from "./FooterTop.module.css";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { FacebookIcon } from "../../ui/FacebookIcon";
import { VkIcon } from "../../ui/VkIcon";
import { InstagramIcon } from "../../ui/InstagramIcon";

export const FooterTop = () => {
  return (
    <div className={"container-l"}>
      <div className={`container ${classes.footer__top}`}>
        <div>
          <Link to={"/"}>
            <img
              className={classes.footer__logo}
              src={logo}
              alt="sit down please logo"
            />
          </Link>
          <ul className={classes.footer__social}>
            <li>
              <a href="/">
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a href="/">
                <VkIcon />
              </a>
            </li>
            <li>
              <a href="/">
                <InstagramIcon />
              </a>
            </li>
          </ul>
        </div>
        <ul className={classes.footer__list}>
          <li>
            О нас
            <ul className={classes.footer__sublist}>
              <li>О компании</li>
              <li>Блог</li>
            </ul>
          </li>
          <li>
            Услуги
            <ul className={classes.footer__sublist}>
              <li>Доставка</li>
              <li>Рассрочка и кредит</li>
              <li>Сборка и установка</li>
            </ul>
          </li>
          <li>
            Связь с нами
            <ul className={classes.footer__sublist}>
              <li>Обратная связь</li>
              <li>Контакты</li>
            </ul>
          </li>
          <li>
            Сотрудничество
            <ul className={classes.footer__sublist}>
              <li>Поставщикам</li>
              <li>Оптовикам</li>
              <li>Карьера</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};
