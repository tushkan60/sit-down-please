import { Link, useRouteLoaderData } from "react-router-dom";
import { CatalogNavigation } from "../components/catalog-navigation/CatalogNavigation";
import classes from "./Detail.module.css";
import { Grid } from "@mui/material";
import ItemSwiper from "../components/ItemSwiper/ItemSwiper";
import { RatingStar } from "../components/ui/card/RatingStar.jsx";
import { ItemDescription } from "../components/item-description/ItemDescription";

export const DetailPage = () => {
  const data = useRouteLoaderData("itemDetail");
  console.log(data.img4);
  return (
    <div className={`container ${classes.detail}`}>
      <CatalogNavigation id={data.id} title={data.titleShort} />
      <Grid container spacing={4} className={classes.detail__container}>
        <Grid item xs={6}>
          <ItemSwiper
            img1={`../${data.imgPrimary}`}
            img2={`../${data.img2}`}
            img3={`../${data.img3}`}
            img4={`../${data.img4}`}
          />
        </Grid>
        <Grid item xs={6}>
          <RatingStar>{data.detail}</RatingStar>
          <h2 className={classes.detail__title}>{data.titleFull}</h2>
          <p className={classes.detail__subtitle}>{data.descriptionShort}</p>
          <p className={classes.detail__price}>{data.price} руб</p>
          <Link to={"/"} className={"btn__primary-fill"}>
            Купить в один клик
          </Link>
          <Link to={"/"} className={classes.detail__cart}>
            + Добавить в корзину
          </Link>
        </Grid>
        <Grid item xs={6}>
          <h3 className={classes.descrip__title}>{data.descriptionTitle}</h3>
          <p className={classes.descrip__text}>{data.descriptionFull}</p>
          <div className={classes.detail__schematic}>
            <img
              src={`../${data.imgSchematic1}`}
              alt="scheme1"
              height={113}
              width={247}
            />
            <img
              src={`../${data.imgSchematic2}`}
              alt="scheme1"
              height={113}
              width={247}
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          <ItemDescription
            warranty={data.warranty}
            vendorCode={data.vendorCode}
            length={data.length}
            height={data.height}
            width={data.width}
            SleepingArea={data.SleepingArea}
            landingHeight={data.landingHeight}
            mechanism={data.mechanism}
            upholstery={data.upholstery}
            color={data.color}
            filler={data.filler}
            frame={data.frame}
            seats={data.seats}
            categoryFull={data.categoryFull}
            return={data.return}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export async function loader({ request, params }) {
  const id = params.ItemId;
  console.log(id);
  const response = await fetch(
    `https://react-api-4721a-default-rtdb.firebaseio.com/items/${id}.json`
  );

  if (!response.ok) {
  } else {
    return response;
  }
}
