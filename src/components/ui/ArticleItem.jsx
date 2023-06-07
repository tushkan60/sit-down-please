import classes from "./ArticleItem.module.css";

export const ArticleItem = (props) => {
  return (
    <article className={classes.article}>
      <img
        className={classes.article__img}
        src={props.img}
        alt={props.alt}
        height={"426"}
        width={"632"}
      />
      <div className={classes.article__descrip}>
        <p className={classes.article__text}>{props.children}</p>
        <button className={"btn__primary-empty"}>Читать</button>
      </div>
    </article>
  );
};
