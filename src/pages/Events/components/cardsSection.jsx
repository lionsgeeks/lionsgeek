
import { useNavigate } from 'react-router-dom'
import './firstSection.sass'
import { useContext, useState } from 'react'
import myImage from '../../../assets/images/pexels-thisismitchhere-20943034.jpg';
import myImage1 from '../../../assets/images/pexels-alex-andrews-271121-1983046.jpg';
import myImage2 from '../../../assets/images/pexels-bertellifotografia-2608512.jpg';
import myImage3 from '../../../assets/images/pexels-teddy-2263410.jpg';
import { useTranslation } from 'react-i18next';
import { MyContext } from '../../../utils/contextProvider';
export const CardsSection = () => {
    const { t, i18n } = useTranslation();
    const { selectedLanguage, setSelectedLanguage } = useContext(MyContext)


    const navigate = useNavigate()
    const [eventName, seteventName] = useState("")
    const [eventDate, seteventDate] = useState("")
    const [Event, setEvent] = useState([
        {
            Name: "Digital content creator",
            Date: '20/07/23',
            Type: 'Hackathon',
            Description: 'lallalalalalalalalala',
            Location: ' Lionsgeek , Ain Sbaa',
            image: myImage
        }, {
            Name: "web development",
            Date: '20/07/23',
            Type: 'Séance dinfos',
            Description: 'Tous sur nos formation',
            Location: ' Lionsgeek , Ain Sbaa',

            image: myImage1
        }, {
            Name: "Design",
            Date: '20/07/23',
            Type: 'Séance dinfos',
            Description: 'Tous sur nos formation content creation',
            Location: ' Lionsgeek , Ain Sbaa',

            image: myImage2
        }, {
            Name: " Graphique Design",
            Date: '20/07/23',
            Type: 'Hackathon',
            Description: 'lallalalalalalalalala',
            Location: ' Lionsgeek , Ain Sbaa',

            image: myImage3
        },

    ])
    return (
        <>
            <div className="w-full text-center lg:pt-5">
                <h1 className="text-xl">{t('main.Events.Title1')}</h1>
                <h1 className="text-5xl font-bold">{t('main.Events.Desc1')}</h1>
            </div>
            <div className='  flex justify-center items-center lg:px-16 px-10  py-14 '>
                <div className="   flex flex-wrap gap-10 ">
                    {Event.map((element, index) =>
                        <div className="shadow-lg lg:h-[52vh] lg:w-[20vw] rounded-xl cursor-pointer hover:scale-105 hover:duration-300 " onClick={() => (navigate(`/event/${element.Name}`))}>
                            <div className='w-[100%] h-[50%]  '>

                                <img src={element.image} className="   w-full h-full    rounded-t-xl" alt="" />
                            </div>
                            <div className="flex flex-col  font-mono gap-3 p-3  h-[38%] ">
                                <h3 className="text-lg text-gray-500">{element.Type} : le {element.Date}</h3>
                                <h3 className="text-xl font-semibold">{element.Name} '{element.Description}'</h3>
                                <h3 className="text-sm flex items-end "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 ">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>  {element.Location}</h3>
                            </div>
                        </div>

                    )}
                </div>
            </div>
        </>
    )
}







































