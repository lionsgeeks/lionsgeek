import { FirstSection } from "./components/firstSection";

export const HomePage = () => {
  return (
    <>
      <div className="h-[calc(100vh-64px)] text-center text-balance py-12 flex flex-col justify-between gap-14">
        <div className="flex flex-col gap-6 items-center">
          <h1 className="text-7xl font-bold">Unlocking your potential in the digital world.</h1>
          <p className="text-2xl font-normal">
            Free digital skills training and mentorship to help you thrive in the tech and media
            industries.
          </p>

          <button className="bg-alpha hover:bg-transparent hover:text-alpha border border-alpha px-16 py-2 w-fit rounded-lg font-medium">
            Get Started
          </button>
        </div>

        <div className="flex px-16 justify-between h-full">
          <div className="w-[31%] border rounded-lg border-beta h-full"></div>
          <div className="w-[31%] border rounded-lg border-beta h-full"></div>
          <div className="w-[31%] border rounded-lg border-beta h-full"></div>
        </div>
      </div>

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

          <button className="bg-alpha hover:bg-transparent hover:text-alpha border border-alpha px-16 py-2 w-fit rounded-lg font-medium">
            Learn more
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-16 items-center justify-between px-16 py-24">
        <h1 className="text-6xl font-bold text-center">Our Partnaires</h1>

        <div className="flex w-full gap-16">
          {Array.from({ length: 7 }).map((_, index) => (
            <img
              className="w-[calc(100%/7)] h-16"
              key={index}
              src={require(`../../assets/images/partners/partner-${index}.png`)}
              alt={`partner-${index}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};
