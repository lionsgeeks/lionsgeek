import { Link } from "react-router-dom"
import Button from "../../../components/Button"
import { useAppContext } from "../../../utils/contextProvider"

export const BlogHeroSection = () => {

    const { blogs, IMAGEURL, selectedLanguage, formatDate } = useAppContext()

    return (
        <>
            {
                blogs && <div className="flex  pt-[10vh] ">
                    <img className="w-1/2 h-[60vh] objectc rounded-xl " src={IMAGEURL + blogs[0]?.image} alt="" />

                    <div className="flex flex-col w-[40%] gap-8 py- px-8">
                        <p className="text-beta/50 ">{formatDate(blogs[0]?.created_at)}</p>
                        <h1 className="font-bold text-3xl leading-normal">{blogs[0]?.title[selectedLanguage]}</h1>
                        {
                            selectedLanguage == "ar" ?
                                <div dangerouslySetInnerHTML={{ __html: blogs[0]?.description.ar.length > 150 ? blogs[0]?.description.ar.slice(0, 150) + '...' : blogs[0]?.description.ar }} />
                                : selectedLanguage == "en" ?
                                    <div dangerouslySetInnerHTML={{ __html: blogs[0]?.description.en.length > 150 ? blogs[0]?.description.en.slice(0, 150) + '...' : blogs[0]?.description.en }} />
                                    :
                                    <div dangerouslySetInnerHTML={{ __html: blogs[0]?.description.fr.length > 150 ? blogs[0]?.description.fr.slice(0, 150) + '...' : blogs[0]?.description.fr }} />
                        }
                        <Link to={`/blog/${blogs[0]?.id}`}>
                            <Button children={"Read Article"} />
                        </Link>
                    </div>

                </div>
            }




        </>
    )
}







































