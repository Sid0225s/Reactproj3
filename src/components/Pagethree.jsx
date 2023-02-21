import s3 from "../images/s3.png";
function Pagethree() {
  return (
    <div className="pagethree1 flex items-center h-">
      <div className="img3">
        <img src={s3} alt="img" />
      </div>
      <div className="pagethree">
        <div className="pagewrite3">
          <h1>Light, Fast & Powerful</h1>
          <p className="pt-8">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus
          </p>
          <br />
          <p>
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            sem. Nulla consequat massa quis enim.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Pagethree;
