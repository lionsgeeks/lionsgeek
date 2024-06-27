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
                  className="absolute -z-10 size-[150%] fill-beta/5 -right-1/2 -rotate-45"
                  xmlns="http://www.w3.org/2000/svg"
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
        <div className="w-full text-center pb-10">
          <h1 className="text-xl">Partners</h1>
          <h1 className="text-5xl font-bold">Develop a future-ready workforce.</h1>
        </div>

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

      <div className="flex flex-col items-center justify-between px-16 py-24">
        <div className="w-full text-center pb-10">
          <h1 className="text-xl">Trainings</h1>
          <h1 className="text-5xl font-bold">Level up your digital skills.</h1>
        </div>

        <div className="flex flex-col w-full gap-3">
          <div className="rounded-lg flex bg-alpha">
            <div className="flex-1 py-16 pb-32 pl-6 relative overflow-hidden">
              <h1 className="text-4xl text-balance">Full Stack Web Development</h1>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="absolute h-[150%] fill-beta/5 -top-1/2 left-0 rotate-45"
              >
                <path
                  fill-rule="evenodd"
                  d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>

            <div className="w-[62.5%] bg-image bg-cover bg-center rounded-r-lg"></div>
          </div>

          <div className="rounded-lg flex bg-alpha flex-row-reverse">
            <div className="flex-1 py-16 pb-32 pl-6 relative overflow-hidden">
              <h1 className="text-4xl text-balance">Content Creation & Digital Marketing</h1>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="absolute h-[150%] stroke-beta/5 -top-1/2 right-0 -rotate-45"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                />
              </svg>
            </div>

            <div className="w-[62.5%] bg-image bg-cover bg-center rounded-l-lg"></div>
          </div>
        </div>
      </div>
    </>
  );
};
