import { Button } from "../../components";

export const HomePage = () => {
  return (
    <>
      <div className="h-[calc(100vh-64px)] px-16 text-center text-balance py-12 flex flex-col justify-between gap-12">
        <div className="flex flex-col gap-4 items-center w-3/4 self-center">
          <h1 className="text-7xl font-bold">The door to the digital world.</h1>
          <p className="text-2xl font-normal ">
            Free training and mentorship to help you thrive in the tech and media industries.
          </p>

          <Button>Get Started</Button>
        </div>

        <div className="h-[50%] flex gap-4 flex-col">
          <h2 className="text-3xl font-bold text-start">Our pillars</h2>

          <div className="flex justify-between h-full">
            {["Training", "Co-working", "Talks"].map((title, index) => (
              <div
                key={index}
                className="w-[32.5%] border rounded-lg h-full border-beta relative overflow-hidden"
              >
                <svg
                  viewBox="0 0 37 36"
                  className="absolute -z-10 size-[150%] fill-beta/5 -right-1/2 -rotate-45 "
                  // xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M29.8744 0H7.05262L0 21.706L18.463 35.121L36.93 21.706L29.8744 0ZM18.464 27.506L7.24261 19.353L11.5284 6.161H25.3986L29.6844 19.353L18.464 27.506Z" />
                  <path d="M13.1763 19.326L18.464 23.167L23.7517 19.326H13.1763Z" />
                </svg>

                <h1 className="absolute left-8 bottom-6 font-medium text-xl">{title}</h1>
              </div>
            ))}
          </div>
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

          <Button>Learn more</Button>
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

      <div className="flex gap-16 px-16 py-16 relative before:absolute before:bg-beta before:h-2/3 before:inset-0 before:top-1/2 before:-translate-y-1/2 before:-z-10">
        <img
          className="size-1/2"
          src={require(`../../assets/images/WeChoose.jpg`)}
          alt="we-choose-art-event"
        />

        <div className="h-2/3 flex-1 self-center">
          <h1 className="text-6xl font-bold text-start text-alpha">Recent Event</h1>
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

          <Button className="mt-6">See more</Button>
        </div>
      </div>
    </>
  );
};
