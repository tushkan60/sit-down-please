import classes from "./RatingStar.module.css";

export const RatingStar = (props) => {
  return <p className={classes.item__rating}>{props.children}</p>;
};
