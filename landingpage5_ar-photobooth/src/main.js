import "./App.css";
import Buy from "./component/buy";
import SliderComponent from "./component/carousel";

import Footer from "./component/footer";
import Hero from "./component/Hero";
import HiW from "./component/HowItWorks";
import Navbar from "./component/Navbar";

import Tagline from "./component/tagline";

import Rqqt from "./component/rq-qt";
import useWhatsAppLink from "./component/useWhatsAppLink";



function Main() {
    const { show, handleWhatsAppClick } = useWhatsAppLink(
        "+62811252600",
        "Hello, how can I help you?"
      );
  return (
    <div>
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
      <SliderComponent />
      <Tagline />
      <HiW />
      <Buy />
      <Rqqt/>
      <Footer />
    </div>
  );
}

export default Main;
