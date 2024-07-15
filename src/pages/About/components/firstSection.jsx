
import './firstSection.sass'
import logo from '../../../assets/images/logolionsgeek.png'
import Button from '../../../components/Button'
import { useTranslation } from 'react-i18next';
import { useAppContext } from '../../../utils/contextProvider';
export const FirstSectionAbout = () => {
    const { t } = useTranslation();
    const { selectedLanguage } = useAppContext()
    return (
    <>
        <section className={`xl:py-[17vh] py-[10vh] flex xl:flex-row flex-col-reverse xl:px-16 px-7 justify-between drop-shadow-2xl ${selectedLanguage === "ar" ? "xl:flex-row-reverse" : ""}`}>
            <div className="flex flex-col w-[50%]">
                <p className={`text-6xl xl:w-[30vw] w-[70vw] font-bold py-2 ${selectedLanguage === "ar" ? "xl:text-end" : ""}`}>{t('main.about.section1.title.first')} LionsGeek<span className='text-yellow-400'>?</span></p>
                <p className={`xl:w-[70%] w-[80vw] py-4 text-sm ${selectedLanguage === "ar" ? "xl:text-end" : ""}`}>Lorem ipsum Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, accusantium? dolor sit amet consectetur adipisicing elit. Ratione at quidem, amet, inventore reiciendis voluptatibus voluptatum ipsum nulla eveniet iusto eos aut accusantium repellendus error.</p>
                <div className={`buttondiv w-[50vw] xl:block flex items-center justify-center py-4 ${selectedLanguage === "ar" ? "xl:flex xl:justify-center" : ""}`}>
                    <Button>{t('main.about.section1.button')}</Button>
                </div>
            </div>
            <div className="imgdiv">
                <img src={logo} alt="" className='xl:w-[20vw] xl:block hidden rounded-full' />
            </div>
        </section>
    </>
    )
}
