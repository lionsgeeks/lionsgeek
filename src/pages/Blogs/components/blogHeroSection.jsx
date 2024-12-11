import { Link } from "react-router-dom"
import Button from "../../../components/Button"
import { useAppContext } from "../../../utils/contextProvider"

export const BlogHeroSection = () => {

    const { blogs, IMAGEURL, selectedLanguage, formatDate } = useAppContext()

    return (
        <>
            {
                blogs && <div className="flex  pt-[10vh] ">
                    <img loading="lazy" className="w-1/2 h-[60vh] objectc rounded-xl " src={IMAGEURL + blogs[0]?.image} alt="" />

                    <div className="flex flex-col w-[40%] gap-8 py- px-8">
                        <p className="text-beta/50 ">{formatDate(blogs[0]?.created_at)}</p>
                        <h1 className="font-bold text-3xl leading-normal">{blogs[0]?.title[selectedLanguage]}</h1>

                        <div dangerouslySetInnerHTML={{ __html: blogs[0]?.description[selectedLanguage].length > 150 ? blogs[0]?.description[selectedLanguage].slice(0, 150) + '...' : blogs[0]?.description[selectedLanguage] }} />
                        <Link to={`/blog/${blogs[0]?.id}`}>
                            <Button children={"Read Article"} />
                        </Link>
                    </div>

                </div>
            }




        </>
    )
}







































