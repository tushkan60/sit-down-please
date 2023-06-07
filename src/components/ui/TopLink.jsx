import classes from "./TopLink.module.css";
import { Link } from "react-router-dom";

export const TopLink = (props) => {
  return (
    <Link to={props.link} className={classes.top__link}>
      {props.children}
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_57683_590)">
          <path
            d="M9.625 7.5625L13.0625 11L9.625 14.4375"
            stroke="#A65CF0"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="11" cy="11" r="10" stroke="#A65CF0" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_57683_590">
            <rect width="22" height="22" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </Link>
  );
};
