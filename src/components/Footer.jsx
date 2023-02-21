import {
  FaYoutube,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
function Footer() {
  return (
    <div className="footer">
      <div className="foot flex items-center">
        <ul className="ul2">
          <li id="color">©2020 Yourcompany</li>
          <li className="color text-3xl  ">Landie</li>
        </ul>
        <button className="btnkit h-6">Purchase Now</button>
      </div>
      <div className=" flex justify-center">
        <div className="line "></div>
      </div>
      <div className="foot4">
        <ul className="nav2">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <ul className="icon">
          <li>
            {" "}
            <FaFacebook />{" "}
          </li>
          <li>
            <FaLinkedin />{" "}
          </li>
          <li>
            {" "}
            <FaTwitter />
          </li>
          <li>
            <FaYoutube />{" "}
          </li>
          <li>
            {" "}
            <FaInstagram />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
