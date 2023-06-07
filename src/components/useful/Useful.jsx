import classes from "./Useful.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef } from "react";
import { SwiperButton } from "../ui/SwiperButton.jsx";
import { ArticleItem } from "../ui/ArticleItem";
import article1 from "../../assets/article-1.jpg";
import article2 from "../../assets/article-2.jpg";
import article3 from "../../assets/article-3.jpg";
import article4 from "../../assets/article-4.jpg";
import article5 from "../../assets/article-5.jpg";

export const Useful = () => {
  const swiperRef = useRef();
  return (
    <div className={`container ${classes.useful}`}>
      <h2 className={"title"}>Полезное</h2>
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
        slidesPerView={2}
      >
        <SwiperSlide>
          <ArticleItem img={article1} alt={"article1-img"}>
            И нет сомнений, что сделанные на базе интернет-аналитики выводы
            представляют собой не что иное?
          </ArticleItem>
        </SwiperSlide>
        <SwiperSlide>
          <ArticleItem img={article2} alt={"article2-img"}>
            Как принято считать, некоторые особенности приносят несомненную
            пользу обществу?
          </ArticleItem>
        </SwiperSlide>
        <SwiperSlide>
          <ArticleItem img={article3} alt={"article3-img"}>
            Ясность нашей позиции очевидна: укрепление и развитие внутренней
            структуры?
          </ArticleItem>
        </SwiperSlide>
        <SwiperSlide>
          <ArticleItem img={article4} alt={"article4-img"}>
            Прежде всего, консультация с широким активом однозначно фиксирует
            необходимость распределения?
          </ArticleItem>
        </SwiperSlide>
        <SwiperSlide>
          <ArticleItem img={article5} alt={"article6-img"}>
            Как принято считать, некоторые особенности приносят несомненную
            пользу обществу?
          </ArticleItem>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
