import AppLayout from '@/layouts/app-layout';
import { Head, usePage } from '@inertiajs/react';
import { FifthSection } from './components/fifthSection';
import { FirstSection } from './components/firstSection';
import { FourthSection } from './components/fourthSection';
import { SecondSection } from './components/secondSection';
import { ThirdSection } from './components/thirdSection';

const CodingPage = () => {
    const { format = 'long' } = usePage().props;
    const isShort = format === 'short';

    return (
        <AppLayout>
            <Head title={isShort ? 'GeekLab — Coding' : 'Coding'} />
            <FirstSection />
            <SecondSection format={format} />
            {!isShort && (
                <>
                    <ThirdSection />
                    <FourthSection />
                    <FifthSection />
                </>
            )}
        </AppLayout>
    );
};
export default CodingPage;
