import {FirstSectionAbout } from './components/firstSection';
import { Partners } from './components/partners';
import { Press } from './components/press';
import { Stats } from './components/stats';
import { Pillers } from './components/pillers';

export const AboutPage = () => {
    return (
        <>
            <FirstSectionAbout/>
            <Pillers/>
            <Stats/>
            <Press/>
            <Partners/>
        </>
    );
}
