import {FirstSectionAbout } from './components/firstSection';
import { Partners } from './components/partners';
import Pillers from './components/pillers';
import { Press } from './components/press';
import { Stats } from './components/stats';

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
