import FormGroup from "@mui/material/FormGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useEffect, useState } from "react";
import classes from "./FilterForm.module.css";
import { CheckBox } from "../ui/CheckBox.jsx";
import PriceSlider from "../ui/PriceSlider";

export const FilterForm = ({ onChange }) => {
  const [filter, setFilter] = useState({
    category: {
      sofas: false,
      armchairs: false,
      puffs: false,
      beds: false,
      cabinets: false,
      dressers: false,
      chairs: false,
      tables: false,
      accessories: false,
    },
    discount: {
      more5000: false,
      less5000: false,
      noMatter: false,
    },
    color: {
      brown: false,
      black: false,
      beige: false,
      gray: false,
      white: false,
      blue: false,
      orange: false,
      yellow: false,
      green: false,
    },
    price: { min: 0, max: 200000 },
  });

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setFilter({
      ...filter,
      [name]: {
        ...filter[name],
        [value]: checked,
      },
    });
  };

  useEffect(() => {
    onChange(filter);
  }, [filter]);

  function handlePriceValueChange(newValue) {
    setFilter({
      ...filter,
      price: {
        min: newValue[0],
        max: newValue[1],
      },
    });
  }

  return (
    <FormControl className={classes.filter__form}>
      <p className={classes.filter__title}>Фильтровать по:</p>
      <FormLabel component="legend" className={classes.filter__subtitle}>
        Категория
      </FormLabel>
      <FormGroup aria-label="filter by" className={classes.filter__group}>
        <CheckBox
          name="category"
          checked={filter.category["sofas"]}
          value={"sofas"}
          onChange={handleChange}
          label={"Диваны"}
        />
        <CheckBox
          name="category"
          checked={filter.category["armchairs"]}
          value={"armchairs"}
          onChange={handleChange}
          label={"Кресла"}
        />
        <CheckBox
          name="category"
          checked={filter.category["puffs"]}
          value={"puffs"}
          onChange={handleChange}
          label={"Пуфы"}
        />
        <CheckBox
          name="category"
          checked={filter.category["beds"]}
          value={"beds"}
          onChange={handleChange}
          label={"Кровати"}
        />
        <CheckBox
          name="category"
          checked={filter.category["cabinets"]}
          value={"cabinets"}
          onChange={handleChange}
          label={"Тумбы"}
        />
        <CheckBox
          name="category"
          checked={filter.category["dressers"]}
          value={"dressers"}
          onChange={handleChange}
          label={"Комоды"}
        />
        <CheckBox
          name="category"
          checked={filter.category["chairs"]}
          value={"chairs"}
          onChange={handleChange}
          label={"Стулья"}
        />
        <CheckBox
          name="category"
          checked={filter.category["tables"]}
          value={"tables"}
          onChange={handleChange}
          label={"Столы"}
        />
        <CheckBox
          name="category"
          checked={filter.category["accessories"]}
          value={"accessories"}
          onChange={handleChange}
          label={"Аксессуары"}
        />
      </FormGroup>

      <FormLabel component="legend" className={classes.filter__subtitle}>
        Цена
      </FormLabel>
      <FormGroup aria-label="filter by" className={classes.filter__group}>
        <PriceSlider onValueChange={handlePriceValueChange} />
      </FormGroup>

      <FormLabel component="legend" className={classes.filter__subtitle}>
        Скидка
      </FormLabel>
      <FormGroup aria-label="filter by" className={classes.filter__group}>
        <CheckBox
          name="discount"
          checked={filter.discount["more5000"]}
          value={"more5000"}
          onChange={handleChange}
          label={"Более 5 000"}
        />
        <CheckBox
          name="discount"
          checked={filter.discount["less5000"]}
          value={"less5000"}
          onChange={handleChange}
          label={"Менее 5 000"}
        />
        <CheckBox
          name="discount"
          checked={filter.discount["noMatter"]}
          value={"noMatter"}
          onChange={handleChange}
          label={"Не важно"}
        />
      </FormGroup>

      <FormLabel component="legend" className={classes.filter__subtitle}>
        Цвет
      </FormLabel>
      <FormGroup aria-label="filter by">
        <CheckBox
          name="color"
          checked={filter.color["brown"]}
          value={"brown"}
          onChange={handleChange}
          label={"Коричневый"}
        />
        <CheckBox
          name={"color"}
          checked={filter.color["black"]}
          value={"black"}
          onChange={handleChange}
          label={"Черный"}
        />
        <CheckBox
          name={"color"}
          checked={filter.color["beige"]}
          value={"beige"}
          onChange={handleChange}
          label={"Бежевый"}
        />
        <CheckBox
          name={"color"}
          checked={filter.color["gray"]}
          value={"gray"}
          onChange={handleChange}
          label={"Серый"}
        />
        <CheckBox
          name={"color"}
          checked={filter.color["white"]}
          value={"white"}
          onChange={handleChange}
          label={"Белый"}
        />
        <CheckBox
          name={"color"}
          checked={filter.color["blue"]}
          value={"blue"}
          onChange={handleChange}
          label={"Синий"}
        />
        <CheckBox
          name={"color"}
          checked={filter.color["orange"]}
          value={"orange"}
          onChange={handleChange}
          label={"Оранжевый"}
        />
        <CheckBox
          name={"color"}
          checked={filter.color["yellow"]}
          value={"yellow"}
          onChange={handleChange}
          label={"Желтый"}
        />
        <CheckBox
          name={"color"}
          checked={filter.color["green"]}
          value={"green"}
          onChange={handleChange}
          label={"Зеленый"}
        />
      </FormGroup>
    </FormControl>
  );
};
