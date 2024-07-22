import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { store } from "../store";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/Store";
function CarList(props) {
    const {id, name, price, image, car} = props.data;
    const carts = useSelector(store => store.cart.items);
    const dispatch = useDispatch();
    function handleAddToCart()
    {
        dispatch(addToCart({
            carId: id,
            quantity: 1
        }));
    }
    console.log(carts);
    return (
        <>
            <div className="car">
                <Link to={car}>
                <img src={image} alt="" />
                </Link>
                <h3>{name}</h3>
                <span>{price} $</span>
                <br />
                <button onClick={handleAddToCart}>+</button>
            </div>
        </>
    )
}
export default CarList