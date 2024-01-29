import { useState } from "react";
import "./App.css";
import MovieItem from "./components/MovieItem/component";
import favoriteIcon from "./assets/images/favorite_icon.svg";
import titanicImg from "./assets/images/titanic_img.jpg";
import homeAloneImg from "./assets/images/home_alone_img.jpg";
import backToTheFutureImg from "./assets/images/back_to_the_future.jpg";

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      poster: titanicImg,
      title: "Titanic",
      released: "1997",
      director: "James Cameron",
      favorite: false,
    },
    {
      id: 2,
      poster: homeAloneImg,
      title: "Home Alone",
      released: "1990",
      director: "Chris Columbus",
      favorite: false,
    },
    {
      id: 3,
      poster: backToTheFutureImg,
      title: "Back to the Future",
      released: "1985",
      director: "Robert Zemeckis",
      favorite: false,
    },
  ]);

  function handleAddToFavorite(id) {
    {
      setData(
        data.map((item) => {
          if (item.id == id) {
            return { ...item, favorite: !item.favorite };
          } else {
            return item;
          }
        })
      );
    }
  }

  return (
    <>
      {data.map((item) => {
        return (
          <MovieItem
            key={item.id}
            poster={item.poster}
            title={item.title}
            releasedDate={item.released}
            director={item.director}
            onToggleFavorite={() => handleAddToFavorite(item.id)}
            isFavorite={item.favorite}
          />
        );
      })}
    </>
  );
}

export default App;
