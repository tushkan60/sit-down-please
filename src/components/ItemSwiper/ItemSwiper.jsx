import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Thumbs } from "swiper";
import classes from "./ItemSwiper.module.css";

export default function ItemSwiper(props) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        spaceBetween={0}
        navigation={false}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className={classes.swiper__primary}
      >
        <SwiperSlide>
          <img src={props.img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.img2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.img3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.img4} />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={0}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className={classes.swiper__second}
      >
        <SwiperSlide>
          <img src={props.img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.img2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.img3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.img4} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
