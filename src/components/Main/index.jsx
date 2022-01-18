import "./main.css";

function Main() {
  return (
    <>
      <div className="wrap_main">
        <div className="wrap_content">
          {/* <div className="wrap_img">
            <img src="" alt="" />
          </div> */}
          <div className="wrap_text">
            <h1>میلاد حسنی</h1>
            <h3>کارشناس ارشد عمران</h3>
            <h5>عاشق برنامه نویسی</h5>
          </div>
          <div className="wrap_img">
            <div className="img">
              <img className="img_me" src="/me.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
