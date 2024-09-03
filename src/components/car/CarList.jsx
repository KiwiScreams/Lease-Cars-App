import { Link } from "react-router-dom";
import "./CarList.css";
function CarList(props) {
    const { id, name, price, image, car, monthPrice } = props.data;
  return (
    <>
      <div className="car">
        <div className="car-image">
          <img src={image} alt="" />
        </div>
        <div className="car-body">
          <h2 className="name">{name}</h2>
          <span>starting from $ {price}</span>
          <h2 className="month-price">$ {monthPrice}/mo</h2>
        </div>
        <button className="btn">
          <Link to={car}>see details</Link>
        </button>
        <br />
      </div>
    </>
  );
}
export default CarList;
