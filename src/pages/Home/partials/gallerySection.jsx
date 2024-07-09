import React, { useEffect, useState } from "react";
import { TransText } from "../../../components";

export default function GallerySection() {
  const [count, setCount] = useState(0);
  const [onLoop, setOnLoop] = useState(true);
  const [currentItemIndex, setCurrentItemIndex] = useState(1);

  const duration = 3750;
  const transition = `transform ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`;

  useEffect(() => {
    if (onLoop) {
      const caroussel = document.getElementById("caroussel");
      const firstItem = caroussel.firstChild;

      const nextIndex = currentItemIndex < 4 - 1 ? currentItemIndex + 1 : 0;
      caroussel.style.transform = `translateX(calc( -${firstItem.clientWidth}px - 3.5rem ))`;

      setTimeout(() => setCurrentItemIndex(-1), duration / 3);
      setTimeout(() => setCurrentItemIndex(nextIndex), duration / 2);

      setTimeout(() => {
        firstItem.remove();
        caroussel.appendChild(firstItem);

        caroussel.style.transition = "none";
        caroussel.style.transform = `translate(0)`;

        setTimeout(() => {
          caroussel.style.transition = transition;
          setCount((prev) => prev + 1);
        }, 100);
      }, duration);
    }
  }, [onLoop, count]);

  return (
    <div className="px-7 md:px-16 py-12 md:py-24">
      <div className="overflow-hidden flex flex-col gap-16 transition-all justify-between">
        <div className="w-full text-center">
          <h1 className="text-lg md:text-xl">
            <TransText en="Gallery" fr="Galerie" ar="معرض" />
          </h1>
          <h1 className="text-3xl md:text-5xl font-bold">
            <TransText
              en="Discover our great moments together."
              fr="Découvrez nos plus beaux moments ensemble."
              ar="شاركنا أجمل لحظاتنا معًا"
            />
          </h1>
        </div>

        <div
          id="caroussel"
          onMouseEnter={() => setOnLoop(false)}
          onMouseLeave={() => setOnLoop(true)}
          style={{ transition }}
          className="flex justify- gap-x-14"
        >
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="h-[50vh] md:h-[62.5vh] flex flex-col gap-2 cursor-pointer flex-shrink-0 flex-[calc(calc(100%-calc(2*3.5rem))/3)] transition-transform duration-300"
            >
              <div className="flex flex-col justify-end group h-full after:transition-opacity after:duration-[375ms] relative after:absolute after:bg-beta/50 after:opacity-0 hover:after:opacity-100 after:inset-0">
                <img
                  className="size-full object-cover"
                  src={require(`../../../assets/images/gallery/gallery-${index}.jpg`)}
                  alt="gallery"
                />
                <div className="absolute z-10 duration-700 transition-all translate-y-[150%] group-hover:translate-y-0 pl-6 pr-4 pb-4">
                  <h1 className="font-medium text-xl duration-700 transition-all text-white">
                    same
                  </h1>
                  <p className="text-white">
                    Be a Geek in 6 months ready for the world Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. Quas dolor optio quidem libero laborum.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
