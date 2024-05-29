import React from "react";
import Navbar from "./components/Navbar";
import SoundBeam from "./components/SoundBeam";
import EasyWireless from "./components/EasyWireless";
import AsFeaturedOn from "./components/AsFeaturedOn";
import MusicLike from "./components/MusicLike";
import SliderComp from "./components/Slider.jsx";
import StayConnected from "./components/StayConnected.jsx";
import Footer from "./components/Footer.jsx";
import { Link, Element } from "react-scroll";

function App() {
  return (
    <div className="w-full h-auto flex flex-col">
      <Navbar></Navbar>
      <Element name="soundBeam">
        <SoundBeam></SoundBeam>
      </Element>
      <Element name="easyWireless">
        <EasyWireless></EasyWireless>
      </Element>
      <Element name="asFeaturedOn">
        <AsFeaturedOn></AsFeaturedOn>
      </Element>
      <Element name="musicLike">
        <MusicLike></MusicLike>
      </Element>
      <Element name="SliderComp">
        <SliderComp></SliderComp>
      </Element>
      <Element name="stayConnected">
        <StayConnected></StayConnected>
      </Element>
      <Footer></Footer>
    </div>
  );
}

export default App;
