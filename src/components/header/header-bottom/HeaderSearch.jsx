import { InputGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { SelectCategories } from "./SelectCategories.jsx";
import classes from "./HeaderSearch.module.css";
import searchBtn from "../../../assets/search-btn.svg";

export const HeaderSearch = () => {
  return (
    <Form className={classes.header__form}>
      <InputGroup className={classes.header__search}>
        <Form.Control
          bsPrefix={classes.header__input}
          className={classes.header__input}
          placeholder="Я хочу купить..."
          aria-label="введите название товара"
        />
        <SelectCategories />
      </InputGroup>
      <Button className={classes.header__btn}>
        <img
          className={classes.header__img}
          src={searchBtn}
          alt="search button"
        />
      </Button>
    </Form>
  );
};
