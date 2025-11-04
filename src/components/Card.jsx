import { useDispatch, useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import styles from "../CSS/Card.module.css";
import { favouriteAction } from "../store/favouriteSlice";

const Card = ({ value }) => {
  const dispatch = useDispatch();
  const favouriteItems = useSelector((store) => store.favourite);

  const handleFavourite = () => {
    if (!favouriteItems.some((item) => item.id === value.id)) {
      dispatch(favouriteAction.addToFavourite(value));
    } else {
      dispatch(favouriteAction.removeFromFavourite(value.id));
    }
  };

  return (
    <div className={styles["movies-list"]} key={`${value.id}-movies-list`}>
      <div className={styles["for-image"]} key={`${value.id}-for-image`}>
        <img src={value.img} alt={value.name} />
      </div>
      <div className={styles["for-text"]} key={`${value.id}-for-text`}>
        <div className={styles["movie-name"]} key={`${value.id}-movie-name`}>
          <div className={styles["movie-name-only"]}>
            <b>{value.name}</b>
          </div>
          <div className={styles["heart"]} onClick={handleFavourite}>
            {favouriteItems.some((item) => item.id === value.id) ? (
              <FaHeart
                style={{ width: "100%", height: "100%", cursor: "pointer" }}
              />
            ) : (
              <CiHeart
                style={{ width: "100%", height: "100%", cursor: "pointer" }}
              />
            )}
          </div>
        </div>
        <div
          className={styles["movie-details"]}
          key={`${value.id}-movie-details`}
        >
          <div className={styles["launch"]} key={`${value.id}-launch`}>
            {value.launch}
          </div>
          <div className={styles["type"]} key={`${value.id}-type`}>
            {value.duration}
          </div>
          <div
            className={styles["movie-button"]}
            key={`${value.id}-movie-button`}
          >
            movie
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
