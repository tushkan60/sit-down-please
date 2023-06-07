import classes from "./PromoSmall.module.css";
import { TopLink } from "../ui/TopLink.jsx";
import promoSmall from "../../assets/promo-small.jpg";

export const PromoSmall = () => {
  return (
    <div className={classes.promo__small}>
      <img src={promoSmall} alt="promo img" />
      <div className={classes.promo__descrip}>
        <h2>Оксфорд 1950</h2>
        <p>Новая коллекция изысканных кресел</p>
        <TopLink link={"/"}>В каталог</TopLink>
      </div>
    </div>
  );
};
