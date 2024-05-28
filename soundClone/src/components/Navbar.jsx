import { FaHeadphones } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io";
import { LiaShoppingBagSolid } from "react-icons/lia";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between p-5 border-b border-white w-full z-50 relative text-white">
      <div className="flex items-center justify-start gap-3 w-full p-3">
        <div className="flex items-center justify-center gap-2">
          <FaHeadphones />
          <div>SoundBeam</div>
        </div>

        <div className="flex items-center justify-center gap-2">
          <div>Home</div>
          <div>Benefits</div>
          <div>Reviews</div>
        </div>
      </div>
      <div className="flex items-center justify-end gap-4 w-full p-3">
        <div className="flex items-center justify-center gap-2">
          <FaCircleUser />
          <div>Log In</div>
          <div>
            <button>Order Now</button>{" "}
          </div>
          <div></div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <FaInstagram />
          <AiOutlineYoutube />
          <IoLogoTwitter />
          <LiaShoppingBagSolid />
        </div>
      </div>
    </div>
  );
}
