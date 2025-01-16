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
                <div className="p-0 lg:p-16" style={{ backgroundColor: darkMode ? "#0f0f0f" : "#ffffff" , } } >
                    <div className="">
                        <img loading="lazy" className="w-full h-96 rounded-2xl  object-cover object-center -z-2" src={IMAGEURL +"/blog/" + currentBlog.image} alt="" />
                    </div>

                    <h1 className="font-extrabold text-3xl py-16"  style={{ color: darkMode ? "#ffffff" : "#0f0f0f" , } }>{currentBlog.title[selectedLanguage]}</h1>
                    <div className="flex flex-col lg:flex-row  ">
                        <div className="p-0 lg:pe-14 w-full lg:w-3/4">

                            <div className='view ql-editor reset-tw'>
                                <div dangerouslySetInnerHTML={{ __html: currentBlog.description[selectedLanguage] }}  style={{ color: darkMode ? "#ffffff" : "#0f0f0f" , } }/>
                            </div>
                        </div>


                        <div className=" h-[70vh] overflow-auto p-4 lg:p-0 mt-4 lg:m-0 flex flex-col gap-6 w-full lg:w-1/4 ">
                            <h1 className='text-2xl text-white font-bold' style={{ color: darkMode ? "#ffffff" : "#0f0f0f"}}>More Blog Articles:</h1>
                            {
                                blogs.map((blog, index) => (
                                    blog.id != id && <Link key={index} to={`/blog/${blog.id}`} className="flex gap-3">

                                        <img loading="lazy" className="w-[35%] rounded-xl  object-cover object-center -z-2" src={IMAGEURL +"/blog/" + blog.image} alt="" />
                                        <div className="flex flex-col gap-3 overflow-hidden reset-tw">
                                            <p className="font-extrabold text-sm"  style={{ color: darkMode ? "#ffffff" : "#0f0f0f", fontWeight:"bold", fontSize:"0.875rem" } }>{blog.title[selectedLanguage]}</p>
                                            
                                            <div style={{color:"#ffffff", fontSize:"9px",  color: darkMode ? "#ffffff" : "#0f0f0f"}} dangerouslySetInnerHTML={{ __html: blog.description[selectedLanguage].length > 70 ? blog.description[selectedLanguage].slice(0, 70) + '...' : blog.description[selectedLanguage] }} />
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

