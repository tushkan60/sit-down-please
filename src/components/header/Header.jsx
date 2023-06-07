import { Header__top } from "./header-top/Header__top.jsx";
import { HeaderMiddle } from "./header-middle/HeaderMiddle.jsx";
import { HeaderBottom } from "./header-bottom/HeaderBottom.jsx";
import classes from "./Header.module.css";

export const Header = () => {
  return (
    <header className={classes.header}>
      <Header__top />
      <HeaderMiddle />
      <HeaderBottom />
    </header>
  );
};
