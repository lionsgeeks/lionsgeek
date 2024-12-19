import React, { useEffect, useState } from 'react';
import { BlogDetailContentsSection } from './components/blogDetailContentsSection';
import { Link, useParams } from 'react-router-dom';
import { useAppContext } from '../../utils/contextProvider';

// import 'quill/dist/quill.snow.css';
import 'react-quill/dist/quill.snow.css';



export const BlogDetailPage = () => {
    const { id } = useParams();
    const { blogs, IMAGEURL, selectedLanguage , darkMode} = useAppContext();

    const [currentBlog, setCurrentBlog] = useState();

    useEffect(() => {
        if (blogs) {
            const thisBlog = blogs.find((blg) => blg.id == id);
            setCurrentBlog(thisBlog);
        }
    }, [blogs, id])

    // if (currentBlog) {
    // console.log(currentBlog);
    // }
    return (
        <>
            {
                currentBlog &&
                <div className="p-16" style={{ backgroundColor: darkMode ? "#0f0f0f" : "#ffffff" , } } >
                    <div className="">
                        <img loading="lazy" className="w-full h-96 rounded-2xl  object-cover object-center -z-2" src={IMAGEURL + currentBlog.image} alt="" />
                    </div>

                    <h1 className="font-extrabold text-3xl py-16"  style={{ color: darkMode ? "#ffffff" : "#0f0f0f" , } }>{currentBlog.title[selectedLanguage]}</h1>
                    <div className="flex ">
                        <div className="pe-14 w-3/4">

                            <div className='view ql-editor reset-tw'>
                                <div dangerouslySetInnerHTML={{ __html: currentBlog.description[selectedLanguage] }}  style={{ color: darkMode ? "#ffffff" : "#0f0f0f" , } }/>
                            </div>
                        </div>


                        <div className=" h-[70vh] overflow-auto flex flex-col gap-6 w-1/4 ">

                            {
                                blogs.map((blog, index) => (
                                    blog.id != id && <Link key={index} to={`/blog/${blog.id}`} className="flex gap-3">

                                        <img loading="lazy" className="w-[35%] rounded-xl  object-cover object-center -z-2" src={IMAGEURL + blog.image} alt="" />
                                        <div className="flex flex-col gap-3 overflow-hidden">
                                            <h1 className="font-extrabold text-sm"  style={{ color: darkMode ? "#ffffff" : "#0f0f0f" , } }>{blog.title[selectedLanguage]}</h1>
                                            
                                            <div dangerouslySetInnerHTML={{ __html: blog.description[selectedLanguage].length > 70 ? blog.description[selectedLanguage].slice(0, 70) + '...' : blog.description[selectedLanguage] }}  style={{ color: darkMode ? "#ffffff" : "#0f0f0f" , } }/>
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

