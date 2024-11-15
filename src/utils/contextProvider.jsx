import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
export const MyContext = createContext();
export const MyProvider = ({ children }) => {

    const URL = "http://172.28.0.87:8000/api/";
    const IMAGEURL = "http://172.28.0.87:8000/storage/images/";
    

    // ? Galleries Data fetching

    const [galleries, setGalleries] = useState();

    useEffect(() => {
        const fetchGalleriesData = async () => {
            try {
                const response = await axios.get(`${URL}galleries`);
                setGalleries(response.data);
                
            } catch (error) {
                console.error('Error fetching galleries data:', error);
            }
        };
        fetchGalleriesData();
    }, []);
    
    // ? Events Data fetching
    
    const [events, setEvents] = useState();
    
    useEffect(() => {
        const fetchEventsData = async () => {
            try {
                const response = await axios.get(`${URL}events`)
                setEvents(response.data);
            } catch (error) {
                console.error('Error fetching events data:', error)
            }
        }
        fetchEventsData();
        fetchBlogs();
        fetchInfosession();
    }, []);
    

    const path = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [path])
    const savedSelectedLanguage = localStorage.getItem('selectedLanguage')
    const [selectedLanguage, setSelectedLanguage] = useState(savedSelectedLanguage ?? 'fr');
    localStorage.setItem('selectedLanguage', selectedLanguage ?? 'fr')

    const [sessions, setSessions] = useState();
    const fetchInfosession = () => {
        axios
            .get(URL + "infosessions")
            .then((res) => {
                setSessions(res.data.infos);
            })
            .catch((err) => {
                console.log("info session form errrr", err);
            });
    };

    const [blogs, setBlogs] = useState();
    const fetchBlogs = () => {
        axios
            .get(URL + "blogs")
            .then((res) => {
                setBlogs(res.data);
            })
            .catch((err) => {
                console.log("Blog fetching error", err);
            });
    };




    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
    }

    return (
        <>
            <MyContext.Provider value={{selectedLanguage, setSelectedLanguage, blogs, URL, IMAGEURL, formatDate, galleries, setGalleries, events, setEvents }} >
                {children}
            </MyContext.Provider>
        </>
    )
}

export const useAppContext = () => useContext(MyContext)
