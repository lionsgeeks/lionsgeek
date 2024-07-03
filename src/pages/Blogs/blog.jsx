import React from 'react';
import { BlogHeroSection } from './components/blogHeroSection';
import { BlogContentsSection } from './components/blogContentsSection';



export const BlogPage = () => {
    return (
        <>
            <div className="p-16  ">

                <BlogHeroSection />
                <BlogContentsSection />
            </div>
        </>
    );
};

