
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
export const MyContext = createContext()
export const MyProvider = ({ children }) => {

    const [Albums, setAlbums] = useState([
        {
            id: 1,
            thumbnail: require('../assets/images/galerie/IMG_6527-scaled.jpg'),
            name: 'Event',
            Description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.',
            images: {
                image1: require('../assets/images/galerie/IMG_6527-scaled.jpg'),
                image2: require('../assets/images/galerie/IMG_6627.jpg'),
                image3: require('../assets/images/galerie/annamed-3-scaled-e1685017419437.jpg'),
                image4: require('../assets/images/galerie/dcf3209b-a4d8-4d2a-be43-0f59a516464e.jpg'),
                image5: require('../assets/images/galerie/img-eco-01.png'),
            }
        },
        {
            id: 2,
            thumbnail: require('../assets/images/galerie/IMG_6627.jpg'),
            name: 'COWORKING',
            Description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.',
            images: {
                image1: require('../assets/images/galerie/IMG_6527-scaled.jpg'),
                image2: require('../assets/images/galerie/IMG_6627.jpg'),
                image3: require('../assets/images/galerie/annamed-3-scaled-e1685017419437.jpg'),
                image4: require('../assets/images/galerie/dcf3209b-a4d8-4d2a-be43-0f59a516464e.jpg'),
                image5: require('../assets/images/galerie/img-eco-01.png'),
            }
        },
        {
            id: 3,
            thumbnail: require('../assets/images/galerie/annamed-3-scaled-e1685017419437.jpg'),
            name: 'CODING',
            Description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.',
            images: {
                image1: require('../assets/images/galerie/IMG_6527-scaled.jpg'),
                image2: require('../assets/images/galerie/IMG_6627.jpg'),
                image3: require('../assets/images/galerie/annamed-3-scaled-e1685017419437.jpg'),
                image4: require('../assets/images/galerie/dcf3209b-a4d8-4d2a-be43-0f59a516464e.jpg'),
                image5: require('../assets/images/galerie/img-eco-01.png'),
            }
        },
        {
            id: 4,
            thumbnail: require('../assets/images/galerie/dcf3209b-a4d8-4d2a-be43-0f59a516464e.jpg'),
            name: 'MEDIA',
            Description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.',
            images: {
                image1: require('../assets/images/galerie/IMG_6527-scaled.jpg'),
                image2: require('../assets/images/galerie/IMG_6627.jpg'),
                image3: require('../assets/images/galerie/annamed-3-scaled-e1685017419437.jpg'),
                image4: require('../assets/images/galerie/dcf3209b-a4d8-4d2a-be43-0f59a516464e.jpg'),
                image5: require('../assets/images/galerie/img-eco-01.png'),
            }
        },
        {
            id: 5,
            thumbnail: require('../assets/images/galerie/img-eco-01.png'),
            name: 'Extra',
            Description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.',
            images: {
                image1: require('../assets/images/galerie/IMG_6527-scaled.jpg'),
                image2: require('../assets/images/galerie/IMG_6627.jpg'),
                image3: require('../assets/images/galerie/annamed-3-scaled-e1685017419437.jpg'),
                image4: require('../assets/images/galerie/dcf3209b-a4d8-4d2a-be43-0f59a516464e.jpg'),
                image5: require('../assets/images/galerie/img-eco-01.png'),
            }
        },
    ])
    const path = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [path])
    const savedSelectedLanguage = localStorage.getItem('selectedLanguage')
    const [selectedLanguage, setSelectedLanguage] = useState(savedSelectedLanguage ?? 'fr');
    localStorage.setItem('selectedLanguage', selectedLanguage ?? 'fr')


    return (
        <>
            <MyContext.Provider value={{ Albums, setAlbums, selectedLanguage, setSelectedLanguage }} >
                {children}
            </MyContext.Provider>
        </>
    )
}

export const useAppContext = () => useContext(MyContext)
