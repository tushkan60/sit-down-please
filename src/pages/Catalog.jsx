import { CatalogNavigation } from "../components/catalog-navigation/CatalogNavigation";
import { FilterForm } from "../components/filter-form/FilterForm";
import { Grid } from "@mui/material";
import { useState } from "react";
import { useFetchItems } from "../core/services/useFetchItems.js";
import classes from "./Catalog.module.css";
import { ItemCard } from "../components/ui/card/ItemCard.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { PromoSmall } from "../components/promo/PromoSmall";

function chunkArray(array, chunkSize) {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}

const applyFilters = (items, filter) => {
  return items.filter((item) => {
    const categoryFilter = filter.category[item.category];
    if (categoryFilter) {
      return false;
    }

    const discountFilter = filter.discount;
    if (discountFilter.more5000 && item.price <= 5000) {
      return false;
    }
    if (discountFilter.less5000 && item.price > 5000) {
      return false;
    }

    const colorFilter = filter.color[item.color];
    if (colorFilter) {
      return false;
    }

    const priceFilter = filter.price;
    return !(item.price < priceFilter.min || item.price > priceFilter.max);
  });
};

export const CatalogPage = () => {
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
  const { isLoading, error, items } = useFetchItems();
  const filteredItems = applyFilters(items, filter);
  const itemsChunks = chunkArray(filteredItems, 9);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  const handleFilterChange = (newCategoryFilter) => {
    if (window.filterChangeTimeout) {
      clearTimeout(window.filterChangeTimeout);
    }
    window.filterChangeTimeout = setTimeout(() => {
      setFilter({
        category: {
          ...filter.category,
          ...newCategoryFilter.category,
        },
        discount: {
          ...filter.discount,
          ...newCategoryFilter.discount,
        },
        color: {
          ...filter.color,
          ...newCategoryFilter.color,
        },
        price: {
          ...filter.price,
          ...newCategoryFilter.price,
        },
      });
    }, 2000);
  };

  const loadingItems = (
    <div className={`container ${classes.rating}`}>
      <h3 className={"title"}>Загрузка товаров</h3>
    </div>
  );

  const loadingError = (
    <div className={`container ${classes.rating}`}>
      <h3 className={"title"}>{error}</h3>
    </div>
  );
  return (
    <div className={`container`}>
      <CatalogNavigation />

      <Grid container spacing={4}>
        <Grid item xs={3}>
          <FilterForm onChange={handleFilterChange} />
          <PromoSmall />
        </Grid>
        <Grid item xs={9}>
          <h2 className={"title"}>Каталог</h2>
          {isLoading && loadingItems}
          {error && loadingError}
          <Swiper
            pagination={pagination}
            modules={[Pagination]}
            className={`mySwiper ${classes.swiper}`}
          >
            {itemsChunks.map((chunk, chunkIndex) => (
              <SwiperSlide key={`slide-${chunkIndex}`}>
                <Grid container spacing={4}>
                  {chunk.map((item) => (
                    <ItemCard
                      id={item.id}
                      gridItem={4}
                      key={item.id}
                      rating={item.rating}
                      img={`../${item.img}`}
                      title={item.title}
                      price={item.price}
                    />
                  ))}
                </Grid>
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </Grid>
    </div>
  );
};
