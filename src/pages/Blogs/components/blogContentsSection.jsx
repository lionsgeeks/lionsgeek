import { Link } from "react-router-dom";
import Button from "../../../components/Button"
import { useAppContext } from "../../../utils/contextProvider"

export const BlogContentsSection = () => {
    const { blogs, IMAGEURL, selectedLanguage, formatDate} = useAppContext();

    return (
        <>

            <h1 className="text-center py-16 font-extrabold text-4xl">Our Blog</h1>


            <div className="py-2 flex flex-wrap gap-3">
                {
                    blogs && blogs.slice(1,4).map((blog, index) => (
                        <Link
                        to={`/blog/${blog.id}`}
                            key={index}
                            className={`w-[32%]  border rounded-lg h-80 border-beta relative overflow-hidden group cursor-pointer flex `}
                        >

                            <img className="w-full absolute h-full object-cover -z-2" src={IMAGEURL + blog.image} alt="" />
                            <div className="w-full h-1/6 top-0 bg-gradient-to-t to-black/80 from-black/10 absolute "></div>
                            <div className="w-full h-1/4 bottom-0 bg-gradient-to-t from-black transparent absolute "></div>
                            <div className="flex flex-col justify-between  w-full  px-8 py-5 static z-20">
                                <p className="text-white/90 text-end ">{formatDate(blog.created_at)}</p>
                                <h1 className={`font-medium text-light_gray text-lg  `} title={blog.title[selectedLanguage]}>{blog.title[selectedLanguage]}</h1>

                            </div>
                        </Link>
                    ))
                }
            </div>

        </>
    )
}