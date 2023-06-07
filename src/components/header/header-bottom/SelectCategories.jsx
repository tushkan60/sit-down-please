import { Form } from "react-bootstrap";
import classes from "./SelectCategories.module.css";
export const SelectCategories = () => {
  return (
    <Form.Select
      className={classes.select__categories}
      aria-label="Выберете категорию"
    >
      <option>Категория</option>
      <option value="1">Диваны</option>
      <option value="2">Кресла</option>
      <option value="3">Пуфы</option>
      <option value="4">Кровати</option>
      <option value="5">Тумбы</option>
      <option value="6">Комоды</option>
      <option value="7">Стулья</option>
      <option value="8">Столы</option>
      <option value="9">Аксессуары</option>
    </Form.Select>
  );
};
