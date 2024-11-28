import React from "react";

const FirstSection = () => {
  return (
    <div className="flex flex-col gap-3 justify-center items-center px-2 py-20">
      <h1 className="text-5xl font-bold text-center">About Our Organization</h1>
      <iframe
        className="md:w-[95%] w-full h-[20rem] md:h-[28rem] lg:w-[90%] xl:w-[75%] lg:h-[36rem]"
        src="https://www.youtube.com/embed/LGoZc4j1dIk"
        title="LionsGEEK"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default FirstSection;
