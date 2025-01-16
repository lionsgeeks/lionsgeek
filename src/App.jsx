import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home/home";
import { AboutPage } from "./pages/About/about";
import { MyProvider, useAppContext } from "./utils/contextProvider";
import { Footer } from "./layouts/footer";
import { ContactUs } from "./pages/ContactUs/contactUs";
import Navbar from "./layouts/navbar";
import { CoworkingPage } from "./pages/coworking/coworking";
import { CodingPage } from "./pages/Coding/coding";
import { EventPage } from "./pages/Events/events";
import { EventDetailPage } from "./pages/EventDetails/eventdetail";
import { MediaPage } from "./pages/media/media";
import { GaleriePage } from "./pages/Galerie/galerie";
import { AlbumPage } from "./pages/Album/album";
import { Errors } from "./layouts/errors";
import { BlogPage } from "./pages/Blogs/blog";
import { BlogDetailPage } from "./pages/BlogDetails/blogDetails";
import { Propage } from "./pages/Pro/Pro";
import CoworkingForm from "./pages/coworking/partials/coworkingForm";
import InfoSession from "./pages/infoSession/infoSession";
import Privatesession from "./pages/infoSession/privatesession";
import LoadingPage from "./pages/Loading";
import WhatisLg from "./pages/WhatisLg/whatisLg";
import Policy from "./pages/policy/policy";
import Unsubscribe from "./pages/Unsubscribe/unsubscribe";
import AttendanceConfirmation from "./pages/AttendanceConfirmation/AttendanceConfirmation";

function App() {
  function Redirect(params) {
    window.location.href = "https://backend.mylionsgeek.ma/login";
    return <LoadingPage />;
  }
  const { sessions } = useAppContext();

  return (
    <MyProvider>
      <Navbar />
      <Routes>
        <Route path="/management" element={<Redirect />} />
        <Route path="/media" element={<MediaPage />} />
        <Route path="*" element={<Errors />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetailPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/coworking" element={<CoworkingPage />} />
        <Route path="/coworking/form" element={<CoworkingForm />} />
        <Route path="/coding" element={<CodingPage />} />
        <Route path="/event" element={<EventPage />} />
        <Route path="/event/:id" element={<EventDetailPage />} />
        <Route path="/galerie" element={<GaleriePage />} />
        <Route path="/album/:id" element={<AlbumPage />} />
        <Route path="/pro" element={<Propage />} />
        <Route path="/postuler" element={<InfoSession />} />
        <Route path="/whatislionsgeek" element={<WhatisLg />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/unsubscribe/:id" element={<Unsubscribe />} />
        <Route path="/0cb1e4af6e3d2a705e07ac733dbf66275940f03fa243b8b5f5680b1af134b98c" element={<Privatesession />} />
        <Route path="/attendance/confirmation" element={<AttendanceConfirmation />} />
      </Routes>
      <Footer />
    </MyProvider>
  );
}

export default App;
