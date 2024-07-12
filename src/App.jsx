import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home/home";
import { AboutPage } from "./pages/About/about";
import { MyProvider } from "./utils/contextProvider";
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

function App() {
  return (
    <MyProvider>
      <Navbar />
      <Routes>
        <Route path="/media" element={<MediaPage />} />
        <Route path="*" element={<Errors />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/detail" element={<BlogDetailPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/coworking" element={<CoworkingPage />} />
        <Route path="/coding" element={<CodingPage />} />
        <Route path="/event" element={<EventPage />} />
        <Route path="/event/:id" element={<EventDetailPage />} />
        <Route path="/galerie" element={<GaleriePage />} />
        <Route path="/album/:id" element={<AlbumPage />} />
        <Route path="/pro" element={<Propage />} />
      </Routes>
      <Footer />
    </MyProvider>
  );
}

export default App;
