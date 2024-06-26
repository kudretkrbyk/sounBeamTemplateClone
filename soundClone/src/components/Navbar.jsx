import { FaHeadphones } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { Link } from "react-scroll"; // react-scroll'den Link bileşenini ekleyin

export default function Navbar() {
  return (
    <div className="flex items-center justify-between p-5 border-b border-white w-full z-50 relative text-white">
      <div className="flex items-center justify-start gap-5 w-full p-3">
        <div className="flex items-center justify-center gap-3">
          <FaHeadphones className="size-10" />
          <div className=" ">SoundBeam</div>
        </div>

        <div className="flex items-center justify-center gap-2">
          {/* Link bileşenleriyle bağlantıları tanımlayın */}
          <Link
            to="soundBeam"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="hover:text-[#e3cbaa] duration-300"
          >
            Home
          </Link>
          <Link
            to="easyWireless"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="hover:text-[#e3cbaa] duration-300"
          >
            Benefits
          </Link>
          <Link
            to="SliderComp"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="hover:text-[#e3cbaa] duration-300"
          >
            Reviews
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-end gap-4 w-full p-3">
        <div className="flex items-center justify-center gap-2 text-[#e3cbaa]">
          <FaCircleUser className="size-6" />
          <div>Log In</div>
          <div>
            <button className="bg-[#e3cbaa] p-1 px-2 text-gray-700">
              Order Now
            </button>{" "}
          </div>
          <div></div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <FaInstagram className="size-5" />
          <AiOutlineYoutube className="size-5" />
          <IoLogoTwitter className="size-5" />
          <LiaShoppingBagSolid className="size-5" />
        </div>
      </div>
    </div>
  );
}
