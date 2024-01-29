import styles from "./styles.module.css";
import favIconBlack from "../../assets/images/favorite_icon.svg";
import favIconRed from "../../assets/images/favorite_icon_red.svg";

export default function MovieItem({
  poster,
  title,
  releasedDate,
  director,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <article className={styles["movie_Card"]}>
      <div className={styles["img_container"]}>
        <img src={poster} alt={"movie poster"}></img>
      </div>

      <div className={styles["movie_Card_body"]}>
        <h3>{title} </h3>
        <p>Released: {releasedDate} </p>
        <p>Director: {director}</p>
      </div>

      <button className={styles["fav_Btn"]} onClick={onToggleFavorite}>
        {isFavorite ? (
          <img src={favIconRed} alt="not added to favorite icon"></img>
        ) : (
          <img src={favIconBlack} alt="added to favorite icon"></img>
        )}
      </button>
    </article>
  );
}
