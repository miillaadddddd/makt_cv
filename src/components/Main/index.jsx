import { useState } from "react";
import OneSlide from "../OneSlide";
import ThreeSlide from "../ThreeSlide";
import TwoSlide from "../TwoSlide";
import "./main.css";

function Main() {
  const [selectSlide, setSelectSlide] = useState(1);

  const Slides = {
    1: <OneSlide />,
    2: <TwoSlide />,
    3: <ThreeSlide />,
  };
  return (
    <>
      <div className="wrap_main ">
        <div className="wrap_content relative">
          {/* <div className="wrap_img">
            <img src="" alt="" />
          </div> */}
          {selectSlide !== 1 && (
            <div
              onClick={() => {
                if (selectSlide !== 1) {
                  setSelectSlide((el) => el - 1);
                }
              }}
              className=" text-black font-black absolute right-2 top-[50%] cursor-pointer duration-150 ease-linear hover:scale-150"
            >
              &#10094;
            </div>
          )}
          {selectSlide !== 3 && (
            <div
              onClick={() => {
                if (selectSlide !== 3) {
                  setSelectSlide((el) => el + 1);
                }
              }}
              className="text-black font-black absolute left-2 top-[50%] cursor-pointer duration-150 ease-linear hover:scale-150"
            >
              &#10095;
            </div>
          )}
          <div className="text-black font-black absolute right-4 bottom-4 cursor-pointer duration-150 ease-linear hover:scale-150">
            {selectSlide}/<span className="font-semibold text-sm">3 </span>
          </div>
          {Slides[selectSlide]}
        </div>
      </div>
    </>
  );
}

export default Main;
