import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
export const MyContext = createContext();
export const MyProvider = ({ children }) => {
  // const URL = "http://172.28.0.31:8000/api/";
  // const IMAGEURL = "http://172.28.0.31:8000/storage/images/";
  const URL = "https://backend.mylionsgeek.ma/api/";
  const IMAGEURL = "https://backend.mylionsgeek.ma/storage/images/";
  // ? Galleries Data fetching

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
      setGalleries(response.data);
    } catch (error) {
      window.location.href = "https://backend.mylionsgeek.ma";
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
      // console.log(response.data);
    } catch (error) {
      console.error("Error fetching up coming Projects data:", error);
    }
  };

  const views = async() => {
    try {
      axios.post(URL + 'views').then((res) => {
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
    fetchGalleriesData();
    fetchUpcomingEvent();
    fetchProjects();
    views();
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
          URL,
          IMAGEURL,
          formatDate,
          galleries,
          setGalleries,
          events,
          setEvents,
          sessions,
          setSessions,
          upcomingEvent,
          setUpcomingEvent,
          projects,
        }}
      >
        {children}
      </MyContext.Provider>
    </>
  );
};

export const useAppContext = () => useContext(MyContext);
