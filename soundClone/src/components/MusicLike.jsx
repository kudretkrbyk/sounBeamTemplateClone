export default function MusicLike() {
  return (
    <div className="bg-[#e3cbaa] p-4 flex items-center justify-center gap-10 w-full">
      <div className="size-[900px]  bg-contain bg-no-repeat bg-center bg-[url(https://static.wixstatic.com/media/82fcd3_7b50ff02a3dd411fac2e6ced36f2aed0~mv2.png/v1/fill/w_732,h_401,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Model_Strip_Single.png)] "></div>
      <div className="flex flex-col gap-4 text-white w-full">
        <div className="text-4xl font-bold">
          Music Like You've <br></br> Never Heard Before
        </div>
        <div>
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content.
        </div>
        <div>
          <button className="bg-node border border-white p-2 px-5">
            Order Now
          </button>{" "}
        </div>
      </div>
    </div>
  );
}
