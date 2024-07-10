import { Link } from "react-router-dom";

export default function TrainingSection() {
  return (
    <div id="trainings" className="flex flex-col items-center justify-between px-7 md:px-16 py-12 md:py-24">
      <div className="w-full text-center pb-10">
        <h1 className="text-lg md:text-xl">Trainings</h1>
        <h1 className="text-3xl md:text-5xl font-bold">Level up your digital skills.</h1>
      </div>

      <div className="flex flex-col w-full gap-3">
        <Link to={"/coding"} className="group/coding rounded-lg flex flex-col md:flex-row bg-alpha">
          <div className="flex-1 pt-20 pb-28 md:pb-32 pl-6 relative overflow-hidden">
            <h1 className="text-3xl md:text-4xl text-balance">Full Stack Web Development</h1>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="absolute h-[150%] fill-beta/5 -top-1/2 left-0 rotate-45 transition-all duration-700 group-hover/coding:rotate-[200deg] group-hover/coding:left-2/4 group-hover/coding:scale-[62.5%] group-hover/coding:top-0"
            >
              <path
                fillRule="evenodd"
                d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div className="md:w-[62.5%] h-[288px] md:h-auto overflow-hidden rounded-r-lg">
            <div className="size-full bg-image bg-cover bg-center rounded-r-lg group-hover/coding:scale-[1.125] transition-transform duration-700"></div>
          </div>
        </Link>

        <Link to={"/media"} className="group/media rounded-lg flex flex-col bg-alpha md:flex-row-reverse">
          <div className="flex-1 pt-20 pb-28 md:pb-32 pl-6 relative overflow-hidden">
            <h1 className="text-3xl md:text-4xl text-balance">Content Creation & Digital Marketing</h1>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="absolute h-[150%] stroke-beta/5 -top-1/2 right-0 -rotate-45  transition-all duration-700 group-hover/media:rotate-[382.5deg] group-hover/media:right-1/2 group-hover/media:scale-75 group-hover/media:top-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
              />
            </svg>
          </div>

          <div className="md:w-[62.5%] h-[288px] md:h-auto overflow-hidden rounded-l-lg">
            <div className="size-full bg-image bg-cover bg-center rounded-l-lg group-hover/media:scale-[1.125] transition-transform duration-700"></div>
          </div>
        </Link>
      </div>
    </div>
  );
}
