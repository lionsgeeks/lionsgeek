import { Link } from "react-router-dom";
import Button from "../../../components/Button"
import { useAppContext } from "../../../utils/contextProvider"
import { AiFillPicture } from "react-icons/ai";

export const BlogContentsSection = () => {
    const { blogs, IMAGEURL, selectedLanguage, formatDate  , darkMode} = useAppContext();

    return (
        <>

            <h1 className="text-center py-16 font-extrabold text-4xl"  style={{ color: darkMode ? "#ffffff" : "#0f0f0f" , } }>Our Blog</h1>


            <div className="py-2 flex lg:flex-wrap flex-col gap-3" >
                {
                    blogs ? blogs.map((blog, index) => (
                        <Link
                            to={`/blog/${blog.id}`}
                            key={index}
                            className={`lg:w-[32%]  border rounded-lg lg:h-80 md:h-80 h-60 border-beta relative overflow-hidden group cursor-pointer flex `}
                        >

                            <img loading="lazy" className="w-full absolute h-full md:object-cover -z-2" src={IMAGEURL + blog.image} alt="" />
                            <div className="w-full h-1/6 top-0 bg-gradient-to-t to-black/80 from-black/10 absolute " ></div>
                            <div className="w-full h-1/4 bottom-0 bg-gradient-to-t from-black transparent absolute "></div>
                            <div className="flex  flex-col justify-between  w-full  md:px-8 px-4 py-5 static z-20">
                                <p className="text-white/90 text-end ">{formatDate(blog.created_at)}</p>
                                <h1 className={`font-medium text-light_gray md:text-lg  `} title={blog.title[selectedLanguage]}>{blog.title[selectedLanguage]}</h1>

                            </div>
                        </Link>
                    ))
                        :
                        <>
                            <div className="flex md:px-6 px-4 gap-[calc(5%/3)] ">
                                {
                                    Array.from({ length: 3 }).map((_, index) => (
                                        <div className={`${index !== 0 && "max-md:hidden"} skeleton flex items-center justify-center gap-5  md:w-[calc(100%/3)] w-full bg-skeleton1 md:h-[22rem] h-[18rem] p-6  rounded-md`} >
                                            <AiFillPicture className="text-[8rem] opacity-30 " />
                                        </div>
                                    ))
                                }
                            </div>
                        </>
                }
            </div>

        </>
    )
}