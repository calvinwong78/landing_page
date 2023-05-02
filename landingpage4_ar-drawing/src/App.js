import "./App.css";
import Footer from "./components/footer";
import "./components/useWhatsAppLink/whatsapp.css";
import Hero from "./components/hero";
import HiW from "./components/HowItWorks";
import InfoSection from "./components/InfoSection";
import Navbar from "./components/Navbar";
import Review from "./components/Reviews";
import Setup from "./components/Set-up";
import useWhatsAppLink from "./components/useWhatsAppLink";
import Themes from "./components/Themes_Page";
import Slidersec from "./components/slider";
import Buy from "./components/buy";
import SliderComponent from "./components/carousel";

function App() {
  const { show, handleWhatsAppClick } = useWhatsAppLink(
    "+62811252600",
    "Hello, how can I help you?"
  );
  return (
    <div className="App">
      {show && (
        <div className="whatsapp-link-container" onClick={handleWhatsAppClick}>
          <img
            className="whatsapp-link-image"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/800px-WhatsApp.svg.png"
            alt="WhatsApp Logo"
          />
        </div>
      )}
      <Navbar />
      <Hero />
      <Themes />
      <Setup />
      <Buy />
      <HiW />
      <SliderComponent/>
      <Slidersec />
      <Review />
      <InfoSection />
      <Footer />
    </div>
  );
}

export default App;
