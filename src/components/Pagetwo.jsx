import s2 from "../images/s2.png";
import logo from "../images/logo.png";

function Pagetwo() {
  return (
    <div className="pagetwo">
      <div className="pagewrite">
        <h1>Light, Fast & Powerful</h1>
        <p className=" pt-8">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus
        </p>
        <br />
        <p>
          mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
          sem. Nulla consequat massa quis enim.
        </p>
        <div className="big flex pt-16">
          <div className="small">
            <img className=" h-12" src={logo} alt="" />{" "}
            <h4 className=" text-2xl font-medium">Title Goes Here</h4>
            <p className=" text-xs">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.{" "}
            </p>
          </div>

          <div className="small1">
            <img className=" h-12" src={logo} alt="" />{" "}
            <h4 className=" text-2xl font-medium ">Title Goes Here</h4>
            <p className=" text-xs">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="img3 pl-6">
        <img src={s2} alt="img" />
      </div>
    </div>
  );
}

export default Pagetwo;
