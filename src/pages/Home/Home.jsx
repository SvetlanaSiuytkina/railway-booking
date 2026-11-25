import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import Reviews from '../../components/Reviews/Reviews';
import Footer from '../../components/Footer/Footer';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <Header />
      <Hero />
      <About />
      <HowItWorks />
      <Reviews />
      <Footer />
    </div>
  );
}

export default Home;