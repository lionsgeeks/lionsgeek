import { Button } from "../../../components";

export default function HeroSection() {
  return (
    <div className="h-[calc(100vh-64px)] px-16 text-center text-balance py-12 flex flex-col justify-between gap-12">
      <div className="flex flex-col gap-4 items-center w-3/4 self-center">
        <h1 className="text-7xl font-bold">The door to the digital world.</h1>
        <p className="text-2xl font-normal ">
          Free training and mentorship to help you thrive in the tech and media industries.
        </p>

        <Button
          onClick={() =>
            document.getElementById("trainings")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Get Started
        </Button>
      </div>

      <div className="h-[50%] flex gap-4 flex-col">
        <h2 className="text-3xl font-bold text-start">Our pillars</h2>

        <div className="flex justify-between h-full">
          {["Traning", "Co-working", "Talks"].map((title, index) => (
            <div
              key={index}
              className="w-[32%] border rounded-lg rounded-tr-none h-full border-beta relative overflow-hidden group cursor-pointer flex justify-end"
            >
              {index === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className={`absolute -z-10 h-full scale-125 stroke-beta/[6.25%] -top-[10%] right-0 -rotate-45 transition-all duration-[625ms] group-hover:opacity-0 group-hover:scale-[25]`}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                  />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 37 36"
                  className={`absolute -z-10 size-[150%] fill-beta/5 -right-1/2 -rotate-45 group-hover:opacity-0 group-hover:scale-[25] duration-700 transition-all`}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M29.8744 0H7.05262L0 21.706L18.463 35.121L36.93 21.706L29.8744 0ZM18.464 27.506L7.24261 19.353L11.5284 6.161H25.3986L29.6844 19.353L18.464 27.506Z" />
                  <path d="M13.1763 19.326L18.464 23.167L23.7517 19.326H13.1763Z" />
                </svg>
              )}

              <div className="flex flex-col justify-end text-start pl-8 pb-6 overflow-hidden">
                <h1 className="font-medium text-xl duration-700 transition-all translate-y-[calc(150%+1.75rem)] group-hover:translate-y-0">
                  {title}
                </h1>
                <div className="duration-700 transition-all translate-y-[150%] group-hover:translate-y-0">
                  Be a Geek in 6 months ready for the world Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Quas dolor optio quidem libero laborum.
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
