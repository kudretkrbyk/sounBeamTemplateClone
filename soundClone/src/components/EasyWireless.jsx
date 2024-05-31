import { GiSoundWaves } from "react-icons/gi";
import { FaBluetoothB } from "react-icons/fa";
import { SlEnergy } from "react-icons/sl";
import { IoHeadsetOutline } from "react-icons/io5";
import { Parallax } from "react-scroll-parallax";

export default function EasyWireless() {
  return (
    <div className="relative w-full h-[700px] overflow-hidden  ">
      <Parallax speed={-9}>
        {" "}
        <div className="-mt-24 parallax z-30 absolute w-full h-[900px] bg-cover bg-center bg-white bg-[url(https://static.wixstatic.com/media/82fcd3_0d16229674fd4698b2a7a99a34d42de1~mv2.jpg/v1/fill/w_1265,h_772,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/82fcd3_0d16229674fd4698b2a7a99a34d42de1~mv2.jpg)]"></div>
        <div className="-mt-24 absolute bg-black bg-opacity-50 w-full h-[900px] top-0 left-0 z-40"></div>
      </Parallax>
      <Parallax></Parallax>

      <div className="z-50 w-full flex text-white items-center justify-center p-5 h-[700px] gap-4">
        <div className="p-3 z-50 w-full flex flex-col gap-3   items-start justify-center">
          <GiSoundWaves className="text-4xl" />
          <div>High Quality Sound</div>

          <div>
            I&apos;m a paragraph. Click here to add your own text and edit me.
            Let your users get to know you.
          </div>
        </div>
        <div className="z-50 w-[0.3px] h-[900px] bg-white "></div>

        <div className="p-3 z-50 w-full flex flex-col gap-3 -mt-60 h-[500px] items-start justify-center">
          <FaBluetoothB className="text-4xl" />
          <div>Easy Wireless Listening</div>
          <div>
            I&apos;m a paragraph. Click here to add your own text and edit me.
            Let your users get to know you.
          </div>
        </div>
        <div className="z-50 w-[0.3px] h-[900px] bg-white "></div>
        <div className="p-3 z-50 w-full flex flex-col gap-3  h-[500px] items-start justify-center">
          <SlEnergy className="text-4xl" />
          <div>Longer Battery Life</div>
          <div>
            I&apos;m a paragraph. Click here to add your own text and edit me.
            Let your users get to know you.
          </div>
        </div>
        <div className="z-50 w-[0.3px] h-[900px] bg-white "></div>
        <div className="p-3 z-50 w-full flex flex-col gap-3 -mt-60 h-[500px] items-start justify-center">
          <IoHeadsetOutline className="text-4xl" />
          <div>Sleek Updated Design</div>
          <div>
            I&apos;m a paragraph. Click here to add your own text and edit me.
            Let your users get to know you.
          </div>
        </div>
      </div>
    </div>
  );
}
