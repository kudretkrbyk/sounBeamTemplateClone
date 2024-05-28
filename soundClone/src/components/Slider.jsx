import Slider from "react-slick";

export default function SliderComp() {
  const sliderSettings1 = {
    lazyLoad: "ondemand",
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
  };
  return (
    <div className="w-full  overflow-hidden p-12  flex items-center justify-center ">
      <div className=" flex flex-col  items-center justify-center w-full  ">
        <Slider {...sliderSettings1} className="w-full">
          {/* slider1*/}
          <div className="item w-1/3 text-gray-600 flex flex-col items-center justify-center">
            {" "}
            <div className="w-full  flex flex-col items-center justify-center gap-10">
              <div>Reviews</div>
              <div className="border-b border-gray-600 w-20 h-2"></div>

              <div className="text-xl">
                “I'm a testimonial. Click to edit me and add text that says
                something nice about you and your services.”
              </div>
              <div>Sam 111111</div>
            </div>
          </div>
          {/* slider2*/}
          <div className="item w-1/3 text-gray-600 flex flex-col items-center justify-center">
            {" "}
            <div className="w-full  flex flex-col items-center justify-center gap-10">
              <div>Reviews</div>
              <div className="border-b border-gray-600 w-20 h-2"></div>

              <div className="text-xl">
                “I'm a testimonial. Click to edit me and add text that says
                something nice about you and your services.”
              </div>
              <div>Sam 222</div>
            </div>
          </div>
          {/* slider3*/}
          <div className="item w-1/3l text-gray-600 flex flex-col items-center justify-center">
            {" "}
            <div className="w-full  flex flex-col items-center justify-center gap-10">
              <div>Reviews</div>
              <div className="border-b border-gray-600 w-20 h-2"></div>

              <div className="text-xl">
                “I'm a testimonial. Click to edit me and add text that says
                something nice about you and your services.”
              </div>
              <div>Sam 33333</div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
