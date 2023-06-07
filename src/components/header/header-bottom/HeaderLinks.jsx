import classes from "./HeaderLinks.module.css";
import { Link } from "react-router-dom";
import user from "../../../assets/user.svg";
import cart from "../../../assets/cart.svg";

export const HeaderLinks = () => {
  return (
    <div className={classes.header__links}>
      <ul>
        <li>
          <Link className={classes.header__user} to={"/"}>
            <img src={user} alt="user login" />
          </Link>
        </li>
        <li>
          <Link className={classes.header__cart} to={"/"}>
            <p>0</p>
            <img src={cart} alt="to cart" />
          </Link>
        </li>
      </ul>
    </div>
  );
};
