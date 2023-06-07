import classes from "./Promo.module.css";
import { Link } from "react-router-dom";

export const Promo = () => {
  return (
    <div className={classes.promo}>
      <h2>Оксфорд 1950</h2>
      <p>Новая коллекция изысканных кресел</p>
      <Link to={"/"} className={"btn__primary-fill"}>
        Ознакомиться
      </Link>
    </div>
  );
};
