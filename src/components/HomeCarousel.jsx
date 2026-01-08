import { useEffect, useState } from "react";
import "../css/HomeCarousel.css";

const slides = [
  {
    id: 1,
    image: "../src/assets/slider1.jpg",
    title: "Big Sale 50% Off",
    description: "On all electronics",
    buttonText: "Shop Now",
  },
  {
    id: 2,
    image: "../src/assets/slider2.jpg",
    title: "New Arrivals",
    description: "Latest fashion collection",
    buttonText: "Explore",
  },
  {
    id: 3,
    image: "../src/assets/slider3.jpg",
    title: "Best Deals",
    description: "Up to 70% off",
    buttonText: "Buy Now",
  },
];

const HomeCarousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className="carousel">
      <div className="carousel-track" style={{ transform :`translateX(-${100 * current}%)` }}>

        {slides.map((slide) => (
          <div className="carousel-slide" key={slide.id}>
            <img src={slide.image} alt={slide.title} />
            <div className="carousel-content">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
              <button>{slide.buttonText}</button>
            </div>
          </div>
        ))}
      </div>

      <button className="carousel-btn prev" onClick={prevSlide}>
        ❮
      </button>
      <button className="carousel-btn next" onClick={nextSlide}>
        ❯
      </button>
    </div>
    </>
  );
};

export default HomeCarousel;