import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import { useAppContext } from "../../../utils/contextProvider";

export const BlogHeroSection = () => {
  const { blogs, IMAGEURL, selectedLanguage, formatDate } = useAppContext();

  return (
    <>
      {blogs && (
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
      )}
    </>
  );
};
