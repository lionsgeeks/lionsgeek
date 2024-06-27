
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home/home';
import { AboutPage } from './pages/About/about';
import { MyProvider } from './utils/contextProvider';
import { Footer } from './layouts/footer';
import { ContactUs } from './pages/ContactUs/contactUs';
import Navbar from './layouts/navbar';
import { CodingPage } from './pages/Coding/coding';
function App() {
  return (
    <MyProvider>
      <Navbar />
      <Routes >
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/coding' element={<CodingPage />} />
      </Routes >
      <Footer />
    </MyProvider>

  );
}
export default App;