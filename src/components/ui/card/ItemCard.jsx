import { Grid } from "@mui/material";
import classes from "./ItemCard.module.css";
import { Link } from "react-router-dom";
import { RatingStar } from "./RatingStar";

export const ItemCard = (props) => {
  return (
    <Grid item xs={props.gridItem}>
      <div className={classes.item}>
        <RatingStar>{props.rating}</RatingStar>
        <img
          className={classes.item__img}
          src={props.img}
          alt={props.title}
          width={"236"}
        />
        <Link className={classes.item__title} to={`/catalog/${props.id}`}>
          {props.title}
        </Link>
        <p className={classes.item__price}>{props.price} руб</p>
        <button className={"btn__primary-empty"}>Купить</button>
      </div>
    </Grid>
  );
};
