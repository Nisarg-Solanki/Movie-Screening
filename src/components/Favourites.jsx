import { IoArrowBackCircleOutline } from "react-icons/io5";
import styles from "./CSS/Favourites.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Card from "./Card";

const Favourites = () => {
  const favouriteItems = useSelector((store) => store.favourite);
  const movies = useSelector((store) => store.search);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/signinui/home");
  };
  const filteredMovies = favouriteItems.filter((movie) => {
    return movie.name.toLowerCase().includes(movies.toLowerCase());
  });

  return (
    <div className={styles["container"]}>
      <botton className={`${styles["back-button"]}`} onClick={handleBack}>
        <IoArrowBackCircleOutline
          style={{ height: "50px", width: "50px" }}
        />
        <div>Back</div>
      </botton>

      <div className={styles["movie-container"]}>
        {favouriteItems.length === 0 ? (
          <div className={styles["empty-message"]}>
            <p>Your list is empty.</p>
          </div>
        ) : (
          filteredMovies.map((value) => <Card key={value.id} value={value} />)
        )}
      </div>
    </div>
  );
};

export default Favourites;
