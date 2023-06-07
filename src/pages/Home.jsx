import { Hero } from "../components/hero/Hero";
import { Special } from "../components/special/Special";
import { HighRating } from "../components/high-rating/HighRating";
import { Promo } from "../components/promo/Promo";
import { Top } from "../components/top/Top";
import { Useful } from "../components/useful/Useful";
import { Feedback } from "../components/feedback/Feedback.jsx";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Special />
      <HighRating />
      <Promo />
      <Top />
      <Useful />
      <Feedback />
    </>
  );
};
