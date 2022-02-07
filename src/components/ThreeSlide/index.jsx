import React from "react";

function ThreeSlide() {
  return (
    <div className="animate-fade-in-down">
      <div className="wrap_text animate-fade-in-down">
        <h1 className="p-3 duration-150 hover:scale-150 text-cyan-400">
          <a
            target="_blank"
            rel="noreferrer"
            className="font-bold "
            href="https://github.com/miillaadddddd"
          >
            {" "}
            آدرس گیت هابم
          </a>
        </h1>

        <h5 className="p-3 duration-150 hover:scale-150 text-cyan-400">
          <a
            target="_blank"
            rel="noreferrer"
            className="font-bold "
            href="https://www.linkedin.com/in/milad-hasani-52b330176/"
          >
            لینکدینم
          </a>
        </h5>
        <h3 className=" font-bold text-red-400">instagram : miladhasani7212</h3>
      </div>
      <div className="wrap_img">
        <div className="img">
          <img className="img_me" src="/me.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default ThreeSlide;
