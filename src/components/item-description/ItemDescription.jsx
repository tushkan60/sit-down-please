import classes from "./ItemDescription.module.css";
import { Separator } from "../ui/Separator";

export const ItemDescription = (props) => {
  return (
    <div className={classes.item__description}>
      <div className={classes.item__string}>
        <p className={classes.item__feature}>Гарантия</p>
        <p className={classes.item__value}>{props.warranty} месяцев</p>
      </div>
      <div className={classes.item__string}>
        <p className={classes.item__feature}>Артикул</p>
        <p className={classes.item__value}>{props.vendorCode}</p>
      </div>
      <div className={classes.item__string}>
        <p className={classes.item__feature}>Длина</p>
        <p className={classes.item__value}>{props.length} см</p>
      </div>
      <div className={classes.item__string}>
        <p className={classes.item__feature}>Высота</p>
        <p className={classes.item__value}>{props.height} см</p>
      </div>
      <div className={classes.item__string}>
        <p className={classes.item__feature}>Глубина</p>
        <p className={classes.item__value}>{props.width} см</p>
      </div>
      <div className={classes.item__string}>
        <p className={classes.item__feature}>Спальное место</p>
        <p className={classes.item__value}>{props.SleepingArea}</p>
      </div>
      <div className={classes.item__string}>
        <p className={classes.item__feature}>Высота посадки</p>
        <p className={classes.item__value}>{props.landingHeight} см</p>
      </div>
      <div className={classes.item__string}>
        <p className={classes.item__feature}>Механизм</p>
        <p className={classes.item__value}>{props.mechanism}</p>
      </div>
      <div className={classes.item__string}>
        <p className={classes.item__feature}>Тип обивки</p>
        <p className={classes.item__value}>{props.upholstery}</p>
      </div>
      <div className={classes.item__string}>
        <p className={classes.item__feature}>Цвет</p>
        <p className={classes.item__value}>{props.color}</p>
      </div>
      <div className={classes.item__string}>
        <p className={classes.item__feature}>Наполнитель</p>
        <p className={classes.item__value}>{props.filler}</p>
      </div>
      <div className={classes.item__string}>
        <p className={classes.item__feature}>Материал каркаса</p>
        <p className={classes.item__value}>{props.frame}</p>
      </div>
      <div className={classes.item__string}>
        <p className={classes.item__feature}>Количество мест</p>
        <p className={classes.item__value}>{props.seats}</p>
      </div>
      <div className={classes.item__string}>
        <p className={classes.item__feature}>Категория</p>
        <p className={classes.item__value}>{props.categoryFull}</p>
      </div>
      <div className={classes.item__string}>
        <p className={classes.item__feature}>Возврат</p>
        <p className={classes.item__value}>{props.return}</p>
      </div>
    </div>
  );
};
