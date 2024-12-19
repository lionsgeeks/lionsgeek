import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import { useAppContext } from "../../../utils/contextProvider";
import { AiFillPicture } from "react-icons/ai";

export const BlogHeroSection = () => {
  const { blogs, IMAGEURL, selectedLanguage, formatDate } = useAppContext();

  return (
    <>
      {blogs ? (
        <div className="flex lg:flex-row flex-col lg:gap-y-0 gap-y-4  pt-[10vh] ">
          <img
            loading="lazy"
            className="lg:w-1/2 lg:h-[60vh] h-1/2 object-center  rounded-xl "
            src={IMAGEURL + blogs[0]?.image}
            alt=""
          />

          <div className="flex flex-col lg:w-[40%] gap-8 py-4 lg:px-8 ">
            <p className="text-beta/50 ">{formatDate(blogs[0]?.created_at)}</p>
            <h1 className="font-bold lg:text-3xl md:text-2xl text-xl leading-normal">
              {blogs[0]?.title[selectedLanguage]}
            </h1>

            <div
              dangerouslySetInnerHTML={{
                __html:
                  blogs[0]?.description[selectedLanguage].length > 150
                    ? blogs[0]?.description[selectedLanguage].slice(0, 150) +
                      "..."
                    : blogs[0]?.description[selectedLanguage],
              }}
            />
            <div className=" flex justify-center md:justify-start items-center">
              <Link to={`/blog/${blogs[0]?.id}`}>
                <Button children={"Read Article"} />
              </Link>
            </div>
          </div>
        </div>
      )
      :
      <>
      <div className="flex md:flex-row flex-col md:gap-12 gap-6 w-full h-[26rem] mt-[4.5rem] rounded-md md:p-10 md:py-0  ">
        <div className="skeleton md:w-[48%] w-full md:h-full h-[50%] bg-skeleton2  rounded-lg flex items-center justify-center "><AiFillPicture className="text-[6rem] opacity-30 " /></div>
        <div className="flex gap-3 flex-col md:w-[40%] w-[100%] py-4 ">
          <div className="skeleton w-full h-7 bg-skeleton2  rounded-md "></div>
          <div className="skeleton w-full h-7 bg-skeleton2  rounded-md "></div>
          <div className="skeleton w-[70%] h-7 bg-skeleton2  rounded-md "></div>
        </div>
      </div>
      </>
    }
    </>
  );
};
