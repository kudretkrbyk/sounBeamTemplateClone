export default function StayConnected() {
  return (
    <div className="w-full p-3">
      <div className="relative">
        <img
          id="parallax "
          className=" w-full"
          src="https://static.wixstatic.com/media/82fcd3_6722574f5e26430090bb86df75c063ae~mv2_d_4724_3072_s_4_2.jpg/v1/fill/w_1265,h_571,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/82fcd3_6722574f5e26430090bb86df75c063ae~mv2_d_4724_3072_s_4_2.jpg"
        ></img>
        <div className="bg-[#e3cbaa] w-full  h-[560px] opacity-35 absolute top-0 left-0"></div>
      </div>
      <div className="bg-[#2d2d2d] flex items-center justify-center w-full p-5 gap-4">
        <div className="text-white">Stay Connected</div>
        <div className="">
          <input className="border-2 border-red-500 p-3 focus:border-0"></input>
        </div>
        <div>
          {" "}
          <button className=" bg-[#d0b48f] p-3 px-5">Subcribe</button>
        </div>
      </div>
    </div>
  );
}
