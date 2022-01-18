import { useEffect, useState } from "react";
import "./conenction.css";

function Conenction() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [showMassege, setShowMassege] = useState(false);
  const resetdata = () => {
    setName("");
    setPhone("");
    setDescription("");
  };
  const _handel_data = () => {
    let data = `اطلاعاتی که قراره برسه به دستم 

    ${name} 

    ${phone}

    ${description}

    `;

    alert(data);
    resetdata();
    setShowMassege(true);
  };
  useEffect(() => {
    if (showMassege) {
      setTimeout(() => {
        setShowMassege(false);
      }, 6000);
    }
  }, [showMassege]);

  return (
    <>
      <div className="wrap_main">
        <div className="wrap_content">
          <div style={{ marginBottom: "20px", color: "rgb(0, 255, 110)" }}>
            فرم تماس
          </div>
          <div className="wrap_input">
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
              placeholder="نام ونام خانوادگی"
              className="input"
              type="text"
            />
            <input
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              value={phone}
              placeholder="شماره تماس"
              className="input"
              type="text"
            />
            <textarea
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              placeholder="هرچه دل تنگت میخواهد بگو..."
              rows="5"
              value={description}
              className="input"
              type="text"
            />
            <div className="wrap_btn">
              <button onClick={_handel_data} className="btn">
                برو پیش میلاد
              </button>
            </div>
            <div className="massege">
              {showMassege && (
                <span>
                  {" "}
                  خیلی ممنون که پیام برام فرستادی. چون حقیقت یکی از اصول زندگیمه
                  بهت بگم که این پیام هیچوقت به دست من نمیرسه .مثل خیلی چیزای
                  دیگه تو این دنیا فقط نمایشیه
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Conenction;
