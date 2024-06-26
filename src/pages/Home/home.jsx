import { FirstSection } from "./components/firstSection";

export const HomePage = () => {
  return (
    <>
      <div className="h-[calc(100vh-64px)] text-center text-balance py-12 flex flex-col justify-between gap-14">
        <div className="flex flex-col gap-6 items-center">
          <h1 className="text-7xl text-beta font-bold">
            Unlocking your potential in the digital world.
          </h1>
          <p className="text-2xl font-normal">
            Free digital skills training and mentorship to help you thrive in the tech and media
            industries.
          </p>

          <button className="bg-alpha px-16 py-2 w-fit rounded-lg font-medium text-beta">
            Get Started
          </button>
        </div>

        <div className="flex gap-12 px-12 justify-center h-full">
          <div className="w-[31%] border rounded-lg border-beta h-full"></div>
          <div className="w-[31%] border rounded-lg border-beta h-full"></div>
          <div className="w-[31%] border rounded-lg border-beta h-full"></div>
        </div>
      </div>
    </>
  );
};
