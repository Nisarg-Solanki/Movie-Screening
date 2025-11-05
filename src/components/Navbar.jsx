import styles from "../CSS/Navbar.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { searchFilterAction } from "../store/searchFilterSlice";
import { useEffect, useRef, useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const wrapperRef = useRef(null);

  const isSignInPage = location.pathname === "/signinui";
  const isInsideHomePage =
    location.pathname === "/signinui/home" ||
    location.pathname === "/signinui/home/favourite";

  const userDetails = useSelector((store) => store.signin);

  const handleSearchChange = (e) => {
    dispatch(searchFilterAction.searchMovie(e.target.value));
  };
  const handleButtonClick = () => {
    {
      isInsideHomePage
        ? confirm("ARE YOU SURE? YOU WILL BE LOGGED OUT!") && navigate("/")
        : navigate("/");
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      // if click happens outside the wrapper, close popup
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    // add event listener when component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // cleanup when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`${styles["topbar"]}`}>
      <button
        className={`${styles["movie"]}`}
        onClick={() => handleButtonClick()}
      >
        Movie
      </button>

      {isInsideHomePage && (
        <div className={`${styles["container"]}`}>
          <div className={`${styles["user-wrapper"]}`} ref={wrapperRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${styles["user"]}`}
            >
              <div className={`${styles["user-icon"]}`}>
                <FaRegCircleUser style={{ height: "100%", width: "100%" }} />
              </div>
              <div>{userDetails}</div>
            </button>
            {isOpen && (
              <button
                onClick={() => {
                  setIsOpen(false);
                  navigate("/");
                }}
                className={`${styles["popup"]}`}
              >
                Sign Out
              </button>
            )}
          </div>
          <div
            className={`${styles["heart"]}`}
            onClick={() => navigate("/signinui/home/favourite")}
          >
            <CiHeart style={{ height: "100%", width: "100%" }} />
          </div>
          <div className={`${styles["input-container"]}`}>
            <div className={`${styles["glass"]}`}>
              <FaMagnifyingGlass />
            </div>
            <input
              type="text"
              placeholder="Search"
              onChange={handleSearchChange}
            />
          </div>
        </div>
      )}

      {!isSignInPage && !isInsideHomePage && (
        <button
          className={`${styles["buttons"]}`}
          onClick={() => navigate("/signinui")}
        >
          Sign In
        </button>
      )}
    </div>
  );
};
