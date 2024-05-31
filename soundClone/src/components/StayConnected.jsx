import { Parallax } from "react-scroll-parallax";

export default function StayConnected() {
  return (
    <div className="w-full p-3 flex flex-col h-[700px] overflow-hidden">
      <div className="relative">
        <Parallax speed={-15}>
          {" "}
          <div className="z-10 bg-cover bg-center w-full h-[500px] bg-[url(https://static.wixstatic.com/media/82fcd3_6722574f5e26430090bb86df75c063ae~mv2_d_4724_3072_s_4_2.jpg/v1/fill/w_1265,h_571,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/82fcd3_6722574f5e26430090bb86df75c063ae~mv2_d_4724_3072_s_4_2.jpg)] "></div>
          <div className="z-10 bg-[#e3cbaa] w-full  h-[500px] opacity-35 absolute top-0 left-0"></div>
        </Parallax>
      </div>
      <div className=" z-50 bg-[#2d2d2d] flex items-center justify-center w-full h-[200px] p-5 gap-4">
        <div className="text-white z-50">Stay Connected</div>
        <div className="z-50">
          <input className="z-50 border-2 border-red-500 p-3 focus:border-0"></input>
        </div>
        <div>
          {" "}
          <button className=" bg-[#d0b48f] p-3 px-5">Subcribe</button>
        </div>
      </div>
    </div>
  );
}
