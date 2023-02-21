import Navbar from "./Navbar";
function Header() {
  return (
    <div id="header">
      <Navbar />
      <div className="content">
        <h1>
          Introduce Your Product <br></br> Quickly & Effectively
        </h1>
        <div id="p">
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus
          </p>
          <br></br>
          <p>
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            sem. Nulla consequat massa quis enim.
          </p>
        </div>
        <div className="btn1">
          <button className="btnkit  ">Purchase UI Kit</button>
          <button className="btnl">Learn More</button>
        </div>
      </div>
    </div>
  );
}
export default Header;
