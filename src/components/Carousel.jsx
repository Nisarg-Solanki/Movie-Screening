import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const items = [
  {
    img: "/images/poster-1.png",
  },
  {
    img: "/images/poster-2.png",
  },
  {
    img: "/images/poster-3.png",
  },
  {
    img: "/images/poster-4.png",
  },
  {
    img: "/images/poster-5.png",
  },
];

const Carousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: false,
    nextArrow: false,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {items.map((image, index) => (
          <img
            src={image.img}
            alt={`poster-${index + 1}`}
            style={{ height: "100%", width: "100%" }}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
