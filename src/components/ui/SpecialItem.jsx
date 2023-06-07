import classes from "./SpecialItem.module.css";

export const SpecialItem = (props) => {
  return (
    <div className={classes.special__item}>
      <img
        className={classes.special__img}
        src={props.img}
        alt={props.title}
        height={"250"}
      />
      {props.secondImg !== "" ? (
        <img
          className={classes.special__img2}
          src={props.secondImg}
          alt={props.title}
          height={"124"}
        />
      ) : (
        ""
      )}
      <h2>{props.title}</h2>
      <span className={classes.special__prices}>
        <p className={classes.price__new}>{props.price - props.discount} руб</p>
        <p className={classes.price__old}>{props.price} руб</p>
      </span>
      <p className={classes.special__discount}>- {props.discount}</p>
      <button className={"btn__primary-empty"}>Купить</button>
    </div>
  );
};
