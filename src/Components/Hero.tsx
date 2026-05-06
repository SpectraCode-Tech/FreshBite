import React, { useEffect, useState } from "react";
import slide1 from "../assets/slide1.jpeg";
import slide2 from "../assets/slide2.jpeg";
import slide3 from "../assets/slide3.jpeg";

type Slide = {
  id: number;
  title: string;
  subtitle: string;
  tagline: string;
  image: string;
};

const slides: Slide[] = [
  {
    id: 1,
    title: "FreshBite Kitchen.",
    subtitle: "Where Great Food Meets Great Moments",
    tagline:
      "Authentic Nigerian Meals • Warm Atmosphere • Unforgettable Tastes",
    image: `${slide1}`,
  },
  {
    id: 2,
    title: "Cooked Fresh. Served Right.",
    subtitle: "Every meal is prepared with care, quality ingredients, and authentic recipes.",
    tagline: "From Our Kitchen to Your Table",
    image: `${slide2}`,
  },
  {
    id: 3,
    title: "Your Favorite Meals, Delivered.",
    subtitle: "Order in minutes and enjoy delicious meals wherever you are.",
    tagline: "Fast Delivery • Easy Ordering • Always Fresh",
    image: `${slide3}`,
  },
];

const AUTO_DELAY = 6000;

const Hero: React.FC = () => {
      const [current, setCurrent] = useState(0);
      const [progress, setProgress] = useState(0);

        useEffect(() => {
          const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
            setProgress(0);
          }, AUTO_DELAY);

          return () => clearInterval(interval);
        }, []);

          useEffect(() => {
            const progressInterval = setInterval(() => {
              setProgress((prev) => {
                if (prev >= 100) return 100;
                return prev + 1;
              });
            }, AUTO_DELAY / 100);

            return () => clearInterval(progressInterval);
          }, [current]);

          const nextSlide = () => {
            setCurrent((prev) => (prev + 1) % slides.length);
            setProgress(0);
          };

          const prevSlide = () => {
            setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
            setProgress(0);
          };

          const renderTitle = (title: string) => {
            const words = title.split(" ");
            const lastWord = words.pop();

            return (
              <>
                {words.join(" ")}{" "}
                <span className="text-orange-600">{lastWord}</span>
              </>
            );
          };

  return (
    <div className="relative w-full h-screen sm:h-[85vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute w-full h-full transition-opacity duration-700 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="flex items-center justify-center h-10 w-10 absolute right-20 top-10 sm:left-5 sm:top-1/2 -translate-y-1/2 z-20 
             bg-white/10 hover:bg-white/20 backdrop-blur-sm 
             text-white rounded-full cursor-pointer transition-all duration-300"
          >
            ‹
          </button>

          <button
            onClick={nextSlide}
            className=" flex items-center justify-center absolute h-10 w-10 right-5 top-10 sm:top-1/2 -translate-y-1/2 z-20 
             bg-white/10 hover:bg-white/20 backdrop-blur-sm 
             text-white rounded-full cursor-pointer transition-all duration-300"
          >
            ›
          </button>

          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-br from-black/60 to-orange-600/40 flex flex-col justify-center items-center text-center text-white px-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {renderTitle(slide.title)}
            </h1>
            <p className="text-lg md:text-xl opacity-80">{slide.subtitle}</p>
            <p className="text-md md:text-lg opacity-70 mt-2">
              {slide.tagline}
            </p>

            <div className="mt-6">
              <button className="bg-black cursor-pointer hover:bg-black/80 text-white font-bold py-2 px-7 rounded-full transition-all duration-300">
                Visit Menu
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Progress Lines */}
      <div className="absolute bottom-10 left-1/2 z-100 -translate-x-1/2 flex gap-3 w-[80%] max-w-xs">
        {slides.map((_, index) => (
          <div
            key={index}
            className="flex-1 h-0.75 bg-white/30 overflow-hidden"
          >
            <div
              className="h-full bg-white transition-all duration-100"
              style={{
                width:
                  index === current
                    ? `${progress}%`
                    : index < current
                      ? "100%"
                      : "0%",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
