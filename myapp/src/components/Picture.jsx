import data from "../helper/data";

const Picture = () => {
  // console.log(data);
  return (
    <div className="pictures row">
      {data.map((item) => (
        <div className="picture col-md-6 col-lg-4 col-xl-3 col-xxl-2 border border-3 border-danger g-3 mx-2">
          <div className="imageContainer">
            <img src={item.img} alt="" />
          </div>
          <div className="info">
            <p>{item.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Picture;
