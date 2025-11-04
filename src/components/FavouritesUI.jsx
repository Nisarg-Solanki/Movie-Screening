import Favourites from "./Favourites";
import { Navbar } from "./Navbar";

const FavouritesUI = () => {
  return (
    <div style={{ backgroundColor: "black", height: "100vh" }}>
      <Navbar />
      <Favourites />
    </div>
  );
};

export default FavouritesUI;
