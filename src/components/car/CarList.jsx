import { Link } from "react-router-dom";
import "./CarList.css";
import { useNavigate } from "react-router-dom";
function CarList(props) {
  const { id, name, price, image, car, monthPrice } = props.data;
  const navigate = useNavigate();
  const handleNavigateToDetailPage = () => {
    navigate(car);
  };
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
        <button className="btn" onClick={handleNavigateToDetailPage}>see details</button>
        <br />
      </div>
    </>
  );
}
export default CarList;
