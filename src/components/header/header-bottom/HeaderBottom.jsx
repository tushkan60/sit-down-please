import { HeaderSearch } from "./HeaderSearch.jsx";
import { HeaderLinks } from "./HeaderLinks.jsx";
import classes from "./HeaderBottom.module.css";

export const HeaderBottom = () => {
  return (
    <div className={`container ${classes.header__bottom}`}>
      <HeaderSearch />
      <HeaderLinks />
    </div>
  );
};
