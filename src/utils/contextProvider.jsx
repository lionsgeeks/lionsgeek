import axios from "axios";
import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PreventDevTools from "./functions/debugger";
export const MyContext = createContext();
export const MyProvider = ({ children }) => {
  // const URL = "http://127.0.0.1:8000/api/";
  // const IMAGEURL = "http://127.0.0.1:8000/storage/images/";
  const URL = "https://backend.mylionsgeek.ma/api/";
  const IMAGEURL = "https://backend.mylionsgeek.ma/storage/images/";
  // ? Galleries Data fetching


  const storedDarkMode = localStorage.getItem("darkMode") === "true";

  const [darkMode, setDarkMode] = useState(storedDarkMode);

  const toggleDarkMode = useCallback(() => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode);
      return newMode;
    });
  }, []);

  const path = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);
  const savedSelectedLanguage = localStorage.getItem("selectedLanguage");
  const [selectedLanguage, setSelectedLanguage] = useState(
    savedSelectedLanguage ?? "fr"
  );
  localStorage.setItem("selectedLanguage", selectedLanguage ?? "fr");

  const [galleries, setGalleries] = useState();
  const fetchGalleriesData = async () => {
    try {
      const response = await axios.get(`${URL}galleries`);
      // setTimeout(() => {
      setGalleries(response.data);
      // }, 7000);
    } catch (error) {
      // window.location.href = "https://backend.mylionsgeek.ma/?redirect=true";
      console.error("Error fetching galleries data:", error);
    }
  };

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


  const [privatesession, setprivatesession] = useState();
  const fetchInfoprivatesession  = () => {
    axios
      .get(URL + "0cb1e4af6e3d2a705e07ac733dbf66275940f03fa243b8b5f5680b1af134b98c")
      .then((res) => {
        setprivatesession(res.data.infos);
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

  const [press, setPress] = useState();
  const fetchPress = () => {
    axios
      .get(URL + "press")
      .then((res) => {
        setPress(res.data);
      })
      .catch((err) => {
        console.log("Press Err", err);
      });
  }

  const [events, setEvents] = useState();
  const fetchEventsData = async () => {
    try {
      const response = await axios.get(`${URL}events`);
      setEvents(response.data);
    } catch (error) {
      console.error("Error fetching events data:", error);
    }
  };

  const [upcomingEvent, setUpcomingEvent] = useState();
  const fetchUpcomingEvent = async () => {
    try {
      const response = await axios.get(`${URL}upcoming`);
      setUpcomingEvent(response.data.upcoming);
      if (!upcomingEvent) {
        setUpcomingEvent(response.data.latest);
      }
    } catch (error) {
      console.error("Error fetching up coming events data:", error);
    }
  };

  const [projects, setProjects] = useState();
  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${URL}projects`);
      setProjects(response.data);

    } catch (error) {
      console.error("Error fetching up coming Projects data:", error);
    }
  };

  const views = async () => {
    const data = {
      tempoToken: "3c6b27df90dbc68b8b24fdf744bc94558daebaf3da836d58c360794c6384b6d2",
    };
    try {
      axios.post(URL + 'views', data).then((res) => {
        // console.log(res);
      })
    } catch (error) {
      console.log('increasing views error', error)
    }
  }

  useEffect(() => {
    fetchEventsData();
    fetchBlogs();
    fetchInfosession();
    fetchInfoprivatesession();
    fetchGalleriesData();
    fetchUpcomingEvent();
    fetchProjects();
    views();
    fetchPress();
    //  guys chofo  had l function hehehe 7aydo l comment o 7ollo l inspect
    // PreventDevTools();
  }, []);




  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      <MyContext.Provider
        value={{
          selectedLanguage,
          setSelectedLanguage,
          blogs,
          press,
          URL,
          IMAGEURL,
          formatDate,
          galleries,
          setGalleries,
          events,
          setEvents,
          sessions,
          setSessions,
          privatesession,
          setprivatesession,
          upcomingEvent,
          setUpcomingEvent,
          projects,
          darkMode,
          toggleDarkMode,
          fetchInfosession,
          fetchInfoprivatesession
        }}
      >
        {children}
      </MyContext.Provider>
    </>
  );
};

export const useAppContext = () => useContext(MyContext);
