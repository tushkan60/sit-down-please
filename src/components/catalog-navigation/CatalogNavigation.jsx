import { Link } from "react-router-dom";
import classes from "./CatalogNavigation.module.css";
export const CatalogNavigation = (props) => {
  const item = props.title;
  const itemLink = (
    <>
      <li className={classes.nav__separator}>/</li>
      <li className={classes.nav__item}>
        <Link to={`../catalog/${props.id}`}>{props.title}</Link>
      </li>
    </>
  );
  return (
    <nav className={classes.catalog__nav}>
      <ul className={classes.nav__list}>
        <li className={classes.nav__item}>
          <Link to={"/"}>Главная</Link>
        </li>
        <li className={classes.nav__separator}>/</li>
        <li className={classes.nav__item}>
          <Link to={"../catalog/"}>Каталог</Link>
        </li>
        <li className={classes.nav__separator}>/</li>
        <li className={classes.nav__item}>
          <Link to={"../catalog/"}>Диваны</Link>
        </li>
        <li className={classes.nav__separator}>/</li>
        <li className={classes.nav__item}>
          <Link to={"../catalog/"}>Прямые диваны</Link>
        </li>
        {item && itemLink}
      </ul>
    </nav>
  );
};
