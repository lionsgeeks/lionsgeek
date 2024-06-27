
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home/home';
import { AboutPage } from './pages/About/about';
import { MyProvider } from './utils/contextProvider';
import { Footer } from './layouts/footer';
import { ContactUs } from './pages/ContactUs/contactUs';
import Navbar from './layouts/navbar';
import { CoworkingPage } from './pages/coworking/coworking';
function App() {
  return (
    <MyProvider>
      <Navbar />
      <Routes >
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/coworking' element={<CoworkingPage />} />
      </Routes >
      <Footer />
    </MyProvider>

  );
}
export default App;