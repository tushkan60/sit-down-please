import classes from "./Special.module.css";
import { SpecialItem } from "../ui/SpecialItem.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useEffect, useRef, useState } from "react";
import { SwiperButton } from "../ui/SwiperButton";

export const Special = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [specialItems, setSpecialItems] = useState([]);
  const swiperRef = useRef();

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const response = await fetch(
        "https://react-api-4721a-default-rtdb.firebaseio.com/special.json"
      );
      if (!response.ok) {
        throw new Error(
          "Ошибка при загрузке товаров, поробуйте перезагрузить страницу"
        );
      }
      const responseData = await response.json();

      const loadedItems = [];
      for (const item in responseData) {
        loadedItems.push({
          id: responseData[item].id,
          title: responseData[item].title,
          img: responseData[item].img,
          secondImg: responseData[item].secondImg,
          price: responseData[item].price,
          discount: responseData[item].discount,
          sizeIsBig: responseData[item].sizeIsBig,
        });
      }
      setSpecialItems(loadedItems);
      setIsLoading(false);
    }
    fetchData().catch((e) => {
      setIsLoading(false);
      setError(e.message);
    });
  }, []);

  if (isLoading) {
    return (
      <div className={`container ${classes.special}`}>
        <h2 className={"title"}>Специальные предложения</h2>
        <h3 className={"title"}>Загрузка товаров</h3>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`container ${classes.special}`}>
        <h2 className={"title"}>Специальные предложения</h2>
        <h3 className={"title"}>{error}</h3>
      </div>
    );
  }

  return (
    <div className={`container ${classes.special}`}>
      <h2 className={"title"}>Специальные предложения</h2>
      <button
        className={"swiper__prev"}
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <SwiperButton />
      </button>
      <button
        className={"swiper__next"}
        onClick={() => swiperRef.current?.slideNext()}
      >
        <SwiperButton />
      </button>
      <Swiper
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={32}
        slidesPerView={3}
      >
        {specialItems.map((item) => (
          <SwiperSlide
            className={item.sizeIsBig ? classes.item__big : classes.item__small}
            key={item.id}
          >
            <SpecialItem
              price={item.price}
              title={item.title}
              img={item.img}
              secondImg={item.secondImg}
              discount={item.discount}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
