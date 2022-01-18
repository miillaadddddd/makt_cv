import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div>
        <ul className="Navbar">
          <li>
            <Link to="/">
              <button>صفحه اصلی</button>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <button>درباره من</button>
            </Link>
          </li>

          <li>
            <Link to="/conect">
              <button>تماس با ما</button>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
