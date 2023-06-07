import classes from "./Top.module.css";
import { Grid } from "@mui/material";
import top1 from "../../assets/top-1.png";
import top2 from "../../assets/top-2.png";
import top3 from "../../assets/top-3.png";
import top4 from "../../assets/top-4.png";
import top5 from "../../assets/top-5.png";
import { TopLink } from "../ui/TopLink";

export const Top = () => {
  return (
    <div className={`container ${classes.top}`}>
      <h2 className={"title"}>Топ категории</h2>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <div className={classes.top__card}>
            <ul className={classes.top__tags}>
              <li>Прямые</li>
              <li>Угловые</li>
              <li>Модульные</li>
            </ul>
            <h3 className={classes.top__subtitle}>Диваны</h3>
            <img
              className={classes.top__img}
              src={top1}
              alt={"Диваны"}
              width={"515"}
              height={"308"}
            />
            <TopLink link={"/"}>В каталог</TopLink>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.top__card}>
            <ul className={classes.top__tags}>
              <li>Мягкие</li>
              <li>Кресла-кровати</li>
            </ul>
            <h3 className={classes.top__subtitle}>Кресла</h3>
            <img
              className={classes.top__img}
              src={top2}
              alt={"Кресла"}
              width={"515"}
              height={"308"}
            />
            <TopLink link={"/"}>В каталог</TopLink>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className={classes.top__card}>
            <ul className={classes.top__tags}>
              <li>Односпальные</li>
              <li>Двуспальные</li>
            </ul>
            <h3 className={classes.top__subtitle}>Кровати</h3>
            <img
              className={classes.top__img}
              src={top3}
              alt={"Кровати"}
              width={"306"}
              height={"202"}
            />
            <TopLink link={"/"}>В каталог</TopLink>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className={classes.top__card}>
            <ul className={classes.top__tags}>
              <li>Тумбы</li>
              <li>Комоды</li>
            </ul>
            <h3 className={classes.top__subtitle}>Тумбы и комоды</h3>
            <img
              className={classes.top__img}
              src={top4}
              alt={"Тумбы и комоды"}
              width={"330"}
              height={"202"}
            />
            <TopLink link={"/"}>В каталог</TopLink>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className={classes.top__card}>
            <ul className={classes.top__tags}>
              <li>Деревянные</li>
              <li>Металлокаркас</li>
            </ul>
            <h3 className={classes.top__subtitle}>Стулья</h3>
            <img
              className={classes.top__img}
              src={top5}
              alt={"Стулья"}
              width={"258"}
              height={"202"}
            />
            <TopLink link={"/"}>В каталог</TopLink>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
