import React from 'react';
import { BlogHeroSection } from './components/blogHeroSection';
import { BlogContentsSection } from './components/blogContentsSection';
import { useAppContext } from '../../utils/contextProvider';



export const BlogPage = () => {
      const { darkMode } = useAppContext();
    return (
        <>
            <div className="lg:p-16 p-6  " style={{ backgroundColor: darkMode ? "#0f0f0f" : "#ffffff" , } }>

                <BlogHeroSection />
                <BlogContentsSection />
            </div>
        </>
    );
};

