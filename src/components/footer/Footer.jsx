import classes from "./Footer.module.css";
import { FooterTop } from "./footer-top/FooterTop";
import { FooterBottom } from "./footer-bottom/FooterBottom";
export const Footer = () => {
  return (
    <footer>
      <FooterTop />
      <FooterBottom />
    </footer>
  );
};
