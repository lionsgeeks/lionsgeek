import AppLayout from '@/layouts/app-layout';
import { Head, usePage } from '@inertiajs/react';
import { FifthSection } from './components/fifthSection';
import { FirstSection } from './components/firstSection';
import { FourthSection } from './components/fourthSection';
import { SecondSection } from './components/secondSection';
import { ThirdSection } from './components/thirdSection';

const CodingPage = () => {
    const { format = 'long' } = usePage().props;

    return (
        <AppLayout>
            <Head title="Coding" />
            <FirstSection />
            <SecondSection format={format} />
            <ThirdSection />
            <FourthSection />
            <FifthSection />
        </AppLayout>
    );
};
export default CodingPage;
