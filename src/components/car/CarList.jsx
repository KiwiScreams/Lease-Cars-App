import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { store } from "../store";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/Store";
import "./CarList.css"
function CarList(props) {
    const { id, name, price, image, car, monthPrice } = props.data;
    const carts = useSelector(store => store.cart.items);
    const dispatch = useDispatch();
    function handleAddToCart() {
        dispatch(addToCart({
            carId: id,
            quantity: 1
        }));
    }
    // console.log(carts);
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
                <button className="btn"><Link to={car}>see details</Link></button>
                <br />
                {/* <button onClick={handleAddToCart}>+</button> */}
            </div>
        </>
    )
}
export default CarList