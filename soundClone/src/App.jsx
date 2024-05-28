import Navbar from "./components/Navbar";
import SoundBeam from "./components/SoundBeam";
import EasyWireless from "./components/EasyWireless";
import AsFeaturedOn from "./components/AsFeaturedOn";
import MusicLike from "./components/MusicLike";
import SliderComp from "./components/Slider.jsx";
import StayConnected from "./components/StayConnected.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="w-full h-auto flex flex-col">
      <Navbar></Navbar>
      <SoundBeam></SoundBeam>
      <EasyWireless></EasyWireless>
      <AsFeaturedOn></AsFeaturedOn>
      <MusicLike></MusicLike>
      <SliderComp></SliderComp>
      <StayConnected></StayConnected>
      <Footer></Footer>
    </div>
  );
}

export default App;
