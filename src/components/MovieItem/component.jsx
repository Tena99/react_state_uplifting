import styles from "./styles.module.css";

export default function MovieItem({
  title,
  releasedDate,
  director,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <div>
      <h3>Title: {title} </h3>
      <p>Released: {releasedDate} </p>
      <p>Director: {director}</p>
      <button onClick={onToggleFavorite}>
        {isFavorite ? "true" : "false"}
      </button>
    </div>
  );
}
