export default function ServicesSection() {
  const services = [
    [
      "Digital Marketing",
      "Unleash the power of community-driven content, strategic social media management, search-optimized content creation, and targeted online advertising to ignite brand engagement and soar in online visibility.",
      [
        "User-Generated Content Creation",
        "Social Media Management",
        "SEO and Content Marketing",
        "Online Advertising",
      ],
      <svg
        stroke="currentColor"
        fill="none"
        stroke-width="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        className="size-12 absolute top-0 -translate-y-1/2 stroke-alpha group-hover:stroke-beta duration-[325ms]"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
        ></path>
      </svg>,
    ],
    [
      "Web Developemnt",
      "Craft and maintain user-friendly NGO websites, provide technical support, and develop custom web and mobile apps to enhance donor management and volunteer engagement.",
      [
        "Website Design & Development",
        "Technical Maintenance & Support",
        "Web & Mobile App Development",
      ],
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-12 absolute top-0 -translate-y-1/2 fill-alpha group-hover:fill-beta duration-[325ms]"
      >
        <path
          fill-rule="evenodd"
          d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z"
          clip-rule="evenodd"
        />
      </svg>,
    ],
    [
      "Audiovisual Production",
      "Craft compelling corporate films, viral videos, and engaging podcasts to showcase NGO missions, spark online buzz, foster meaningful discussions, capture events, and host live social media interactions.",
      ["Corporate Films", "Viral Videos", "Podcasts", "Event Coverage", "Live Social Media"],

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="size-12 absolute top-0 -translate-y-1/2 stroke-alpha group-hover:stroke-beta duration-[325ms]"
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
      </svg>,
    ],
    [
      "Events & Hackathons",
      //   "Foster innovation and empower NGOs by organizing invigorating hackathons to tackle their challenges and conducting skill-building workshops and training sessions for their members and volunteers.",
      "Spark NGO innovation through hackathons and skill-building programs for members and volunteers.",
      ["Hackathon Organization", "Workshops & Trainings"],
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="size-12 absolute top-0 -translate-y-1/2 stroke-alpha group-hover:stroke-beta duration-[325ms]"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
        />
      </svg>,
    ],
  ];

  return (
    <>
      <div className="px-7 md:px-16 py-12 md:py-24">
        <div className="overflow- flex flex-col gap-16 transition-all justify-between">
          <div className="w-full text-center">
            <h1 className="text-lg md:text-xl">Services</h1>
            <h1 className="text-3xl md:text-5xl font-bold">Our lionsGeek Pro.</h1>
          </div>

          <div className="flex justify-between">
            <div></div>
            <div className="gap-x-10 gap-y-12 flex justify-center flex-wrap">
              {services.map(([macroService, serviceDescription, microServices, icon], index) => (
                <div
                  key={index}
                  className="flex flex-col gap-4 relative md:w-[calc(calc(100%-calc(2*2.5rem))/3)] group cursor-pointer bg-light_gray rounded-lg py-12 px-8 border-b-8 border-transparent hover:scale-105 duration-300 hover:border- hover:bg-transparent hover:after:w-full after:absolute after:h-2 after:w-0 after:duration-300 after:left-0 after:bottom-0 after:translate-y-full after:bg-alpha after:rounded-b-lg"
                >
                  {icon}
                  <h2 className={`text-2xl font-extrabold group-:text-alpha`}>{macroService}</h2>
                  <p>{serviceDescription}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="px-16 py-24">
        <div className="overflow- flex flex-col gap-16 transition-all justify-between">
          <div className="w-full text-center">
            <h1 className="text-xl">Services</h1>
            <h1 className="text-5xl font-bold">Our lionsGeek Pro.</h1>
          </div>

          <div className="flex justify-between">
            <div className="gap-x-16 gap-y-12 flex items-center flex-wrap">
              {services.map(([macroService, serviceDescription, microServices], index) => (
                <div
                  key={index}
                  className="flex flex-col gap-3 w-[calc(calc(100%-4rem)/2)] cursor-pointer group"
                >
                  <h2 className={`text-4xl font-extrabold group-:text-alpha flex gap-2`}>
                    <span className="text-alpha/75 text-2xl -translate-y-[12.5%]">{`${
                      index + 1
                    }/`}</span>
                    <span>{macroService}</span>
                  </h2>

                  <div className="flex gap-2 flex-wrap mb-1">
                    {microServices.map((microService, index) => (
                      <span
                        key={index}
                        className="border border-alpha/[32.5%] hover:border-alpha cursor-pointer rounded-3xl px-3.5 py-1.5 text-nowrap text-sm font-medium"
                      >
                        {microService}
                      </span>
                    ))}
                  </div>

                  <p>{serviceDescription}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
