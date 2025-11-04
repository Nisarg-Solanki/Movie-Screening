import Carousel from "./Carousel";
import { Navbar } from "./Navbar";
import styles from "../CSS/Home.module.css";
import { data } from "../data/data.js";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card.jsx";

const Home = () => {
  const movies = useSelector((store) => store.search);

  const dispatch = useDispatch();
  const favouriteItems = useSelector((store) => store.favourite);

  const filteredMovies = data.filter((movie) => {
    return movie.name.toLowerCase().includes(movies.toLowerCase());
  });

  return (
    <div style={{ backgroundColor: "black", height: "100%" }}>
      <Navbar />
      <Carousel />
      <div className={`${styles["main-container"]}`}>
        <div className={`${styles["only-text"]}`}>
          <span style={{ color: "blue" }}>Top</span>-rated movies
        </div>
        <div className={`${styles["movie-container"]}`}>
          {filteredMovies.map((value) => (
            <Card
              key={value.id}
              favouriteItems={favouriteItems}
              value={value}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
