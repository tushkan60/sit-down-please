import classes from "./HighRating.module.css";
import { Grid } from "@mui/material";
import { useState } from "react";
import { ItemCard } from "../ui/card/ItemCard";
import { useFetchItems } from "../../core/services/useFetchItems.js";

export const HighRating = () => {
  const { isLoading, error, items } = useFetchItems();
  const [showMore, setShowMore] = useState(false);

  if (isLoading) {
    return (
      <div className={`container ${classes.rating}`}>
        <h2 className={"title"}>Высокий рейтинг</h2>
        <h3 className={"title"}>Загрузка товаров</h3>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`container ${classes.rating}`}>
        <h2 className={"title"}>Высокий рейтинг</h2>
        <h3 className={"title"}>{error}</h3>
      </div>
    );
  }

  const moreItems = items
    .slice(9)
    .map((item) => (
      <ItemCard
        gridItem={3}
        key={item.id}
        rating={item.rating}
        img={item.img}
        title={item.title}
        price={item.price}
      />
    ));

  function showMoreHandler() {
    setShowMore(!showMore);
  }

  return (
    <div className={`container ${classes.rating}`}>
      <h2 className={"title"}>Высокий рейтинг</h2>
      <Grid container spacing={4}>
        {items.slice(0, 8).map((item) => (
          <ItemCard
            id={item.id}
            gridItem={3}
            key={item.id}
            rating={item.rating}
            img={item.img}
            title={item.title}
            price={item.price}
          />
        ))}
        {showMore && moreItems}
      </Grid>
      <button
        className={`btn__primary-fill ${classes.rating__btn}`}
        onClick={showMoreHandler}
      >
        {!showMore ? "Смотреть больше товаров" : "Свернуть"}
      </button>
    </div>
  );
};
