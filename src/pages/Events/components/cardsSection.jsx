
import { useNavigate } from 'react-router-dom'
import './firstSection.sass'
import { useState } from 'react'
import myImage from '../../../assets/images/pexels-thisismitchhere-20943034.jpg';
import myImage1 from '../../../assets/images/pexels-alex-andrews-271121-1983046.jpg';
import myImage2 from '../../../assets/images/pexels-bertellifotografia-2608512.jpg';
import myImage3 from '../../../assets/images/pexels-teddy-2263410.jpg';
export const CardsSection = () => {

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
            <div className="w-full text-center pt-5">
                <h1 className="text-xl">Events</h1>
                <h1 className="text-5xl font-bold">Discover Our Events</h1>
            </div>
            <div className='  flex justify-center items-center px-16  py-14 '>
                <div className="   flex flex-wrap gap-10 ">
                    {Event.map((element, index) =>
                        <div className="shadow-lg h-[52vh] w-[20vw] rounded-xl cursor-pointer hover:scale-105 hover:duration-300" onClick={() => (navigate(`/event/${element.Name}`))}>
                            <div className='w-[100%] h-[50%]  '>

                                <img src={element.image} className="   w-full h-full    rounded-t-xl" alt="" />
                            </div>
                            <div className="flex flex-col  font-mono gap-3 p-3  h-[38%] ">
                                <h3 className="text-lg text-gray-500">{element.Type} : le {element.Date}</h3>
                                <h3 className="text-xl font-semibold">{element.Name} '{element.Description}'</h3>
                                <h3 className="text-sm flex items-end ">  {element.Location}</h3>
                            </div>
                        </div>

                    )}
                </div>
            </div>
        </>
    )
}







































