import React from "react";
import "./App.css";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InfoSection from "./components/InfoSection";
import TopFold from "./components/TopFold";
import TrendingNfts from "./components/TrendingNfts";
import "animate.css";



import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";
import Portfolio from "./components/Portfolio";
import Customer from "./components/Customer";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

const App = () => {


  return (
    <ScrollContainer>
      <div >
        <Navbar/>

   
        <TopFold />
      
        <Features />
        
        <TrendingNfts />
     
        <Portfolio/>

        <InfoSection />

        

        <Contact/>
        
        <Footer />
      </div>
    </ScrollContainer>
  );
};

export default App;
