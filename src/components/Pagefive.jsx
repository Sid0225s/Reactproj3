import s5 from "../images/s5.png";
function Pagefive() {
  return (
    <div className="pagefive flex items-center mb-16">
      <div className="img3">
        <img src={s5} alt="img" />
      </div>
      <div className="pagethree">
        <div className="pagewrite3">
          <h1>Light, Fast & Powerful</h1>
          <p className="pagewrite5  pt-8">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus
          </p>
          <br />
          <p>
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            sem. Nulla consequat massa quis enim.
          </p>
          <button className="btnkit  mt-8 h-6">Purchase Now</button>
        </div>
      </div>
    </div>
  );
}

export default Pagefive;
