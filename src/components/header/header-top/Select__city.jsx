import { Form } from "react-bootstrap";
import classes from "./Select__city.module.css";
export const Select__city = () => {
  return (
    <Form.Select
      className={classes.select__city}
      aria-label="Выберете ваш регион"
    >
      <option value="1">Москва</option>
      <option value="2">Барнаул</option>
    </Form.Select>
  );
};
