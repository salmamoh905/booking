import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://t3.ftcdn.net/jpg/02/82/40/58/240_F_282405828_RIyMRvb2cYFiar1pJ6JDCPg0Gpqbjji0.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://t4.ftcdn.net/jpg/00/80/10/59/240_F_80105952_AdGru0K88l0GUjgfbRXfVKsXbEASVOSW.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Reno</h1>
          <h2>533 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Austin</h1>
          <h2>532 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;