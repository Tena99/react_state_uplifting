import { useState } from "react";
import "./App.css";
import MovieItem from "./components/MovieItem/component";
import favoriteIcon from "./assets/images/favorite_icon.svg";

function App() {

  const [data, setData] = useState([
    {
      id: 1,
      title: "Titanic",
      released: "1997",
      director: "James Cameron",
      favorite: false,
    },
    {
      id: 2,
      title: "Home Alone",
      released: "1990",
      director: "Chris Columbus",
      favorite: false,
    },
    {
      id: 3,
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
