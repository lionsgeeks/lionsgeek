import { Link } from "react-router-dom";
import { Button } from "../../components";
import { GallerySection, HeroSection, TrainingSection } from "./partials";

export const HomePage = () => {
  return (
    <>
      <HeroSection />

      <div className="flex gap-6 items-center justify-between py-24 bg-beta mx-16 px-16 rounded-lg mt-5">
        <h1 className="text-6xl font-bold text-balance w-1/3 text-white tracking-tighter">
          Who we are <span className="text-alpha">?</span>
        </h1>

        <div className="w-2/4 flex flex-col gap-8">
          <p className="text-xl font-normal text-white text-balance">
            LionsGeek is a Moroccan non-profit organization based in Casablanca. Our mission is to
            equip young people with the skills they need to succeed in the digital and audiovisual
            job markets
          </p>

          <Link to={"/about"}>
            <Button outline>Learn more</Button>
          </Link>
        </div>
      </div>

      <div className="px-16 py-24">
        <div className="overflow-hidden flex flex-col gap-6 items-center justify-between">
          <div className="w-full text-center pb-10">
            <h1 className="text-xl">Partners</h1>
            <h1 className="text-5xl font-bold">Develop a future-ready workforce.</h1>
          </div>

          <div className="flex w-full px-48 gap-x-16 gap-y-14 justify-center flex-wrap">
            {Array.from({ length: 7 }).map((_, index) => (
              <img
                className={`h-12 w-[calc(calc(100%-calc(6*4rem))/7)] grayscale saturate-0 brightness-150`}
                key={index}
                src={require(`../../assets/images/partners/partner-${index}.png`)}
                alt={`partner-${index}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-16 px-16 py-16 relative before:absolute before:bg-beta before:h-2/3 before:inset-0 before:top-1/2 before:-translate-y-1/2 before:-z-10">
        <img
          className="size-1/2"
          src={require(`../../assets/images/WeChoose.jpg`)}
          alt="we-choose-art-event"
        />

        <div className="h-2/3 flex-1 self-center">
          <h1 className="text-6xl font-bold text-start text-alpha">Upcoming Event</h1>
          <h4 className="text-white mt-8">GeekTalks</h4>
          <h2 className="text-white text-4xl font-medium mt-2 mb-4">We choose art</h2>
          <h6 className="text-white">31 / 05 / 2024 - LionsGeek</h6>
          <div className="*:text-white mt-6">
            <p>🚀 Igniting the next generation of creatives!</p>
            <p>
              ✨Join us for interactive sessions that fuel passion, inspire innovation, and
              encourage big dreams.
            </p>
          </div>

          <Link to={"/about"}>
            <Button className="mt-6" outline>See more</Button>
          </Link>
        </div>
      </div>

      <TrainingSection />
      <GallerySection />
    </>
  );
};
