import React from 'react';
import { BlogHeroSection } from './components/blogHeroSection';
import { BlogContentsSection } from './components/blogContentsSection';



export const BlogPage = () => {
    return (
        <>
            <div className="lg:p-16 p-6  ">

                <BlogHeroSection />
                <BlogContentsSection />
            </div>
        </>
    );
};

