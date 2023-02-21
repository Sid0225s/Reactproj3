import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
function Navbar() {
  const [showNav, setShowNav] = useState(false);
  return (
    <div>
      <div id="nav">
        <ul className={showNav ? "sec hambug" : "sec"} id="ul">
          <li>
            <Link className="home" to="header">
              Home
            </Link>
          </li>
          <li>
            <Link className="ab">About</Link>
          </li>
          <li>
            <Link className="con">Contact</Link>
          </li>
        </ul>
        <p className="sec1">Landie</p>
        <button className="sec1 text-center" id="but">
          Buy Now
        </button>
        <div className="burger">
          <a className="burg" href="#" onClick={() => setShowNav(!showNav)}>
            <GiHamburgerMenu />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
