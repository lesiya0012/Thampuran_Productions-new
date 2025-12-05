// MainPage.jsx
import Navbar from './components/Navbar.';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import Team from './pages/Team';
import Services from './pages/Services';
import PortfolioPage from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact';

function MainPage() {
  return (
    <>
      <Navbar />

      <section id="home"><Home /></section>
      <section id="about"><AboutPage /></section>
      <section id="team"><Team /></section>
      <section id="services"><Services /></section>
      <section id="portfolio"><PortfolioPage /></section>
      <section id="contact"><Contact /></section>

      <Footer />
    </>
  );
}

export default MainPage;