
import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home/home';
import { AboutPage } from './pages/About/about';
import { MyProvider } from './utils/contextProvider';
import { Footer } from './layouts/footer';
import { ContactUs } from './pages/ContactUs/contactUs';
import Navbar from './layouts/navbar';
import { CoworkingPage } from './pages/coworking/coworking';
import { CodingPage } from './pages/Coding/coding';
import { EventPage } from './pages/Events/events';
import { EventDetailPage } from './pages/EventDetails/eventdetail';
import { MediaPage } from './pages/media/media';
function App() {
  return (
    <MyProvider>
      <Navbar />
      <Routes >
        {/* <Route path='*' element={Navigate({to:"/"})} /> */}
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/coworking' element={<CoworkingPage />} />
        <Route path='/coding' element={<CodingPage />} />
        <Route path='/event' element={<EventPage />} />
        <Route path="/event/:id" element={<EventDetailPage  />} />

        <Route path='/media' element={<MediaPage />} />
      </Routes >
      <Footer />
    </MyProvider>

  );
}
export default App;