import React, { useEffect } from 'react';
import { FirstSection } from './components/firstSection';
import { SecondSection } from './components/secondSection';
import { ThirdSection } from './components/thirdSection';
import { FourthSection } from './components/fourthSection';
import { FifthSection } from './components/fifthSection';
import { useAppContext } from '../../utils/contextProvider';

export const CodingPage = () => {
    const {fetchInfosession} = useAppContext()
    useEffect(() => {
        fetchInfosession()
    }, [])
    
    return (
        <>
            <FirstSection/>
            <SecondSection/>
            <ThirdSection/>
            <FourthSection/>
            <FifthSection/>
        </>
    );
};

