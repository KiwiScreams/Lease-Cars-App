import "./Detail.css"
import React, { useEffect, useState } from "react"
import { Outlet, useParams } from "react-router-dom"
import { cars } from "../../assets/cars"
import { useDispatch } from "react-redux"
import { addToCart } from "../../components/store/Store"
function Detail() {
    const { name } = useParams();
    console.log(name);
    const [detail, setDetail] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    useEffect(() => {
        const findDetail = cars.filter(car => car.car === name);
        if (findDetail.length > 0) {
            setDetail(findDetail[0]);
        }
        else {
            window.location.href = '/';
        }
    }, [name])
    function handleMinusQuantity() {
        setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
    function handlePlusQuantity() {
        setQuantity(quantity + 1);
    }
    function handleAddToCart() {
        dispatch(addToCart({
            carId: detail.id,
            quantity: quantity
        }));
    }
    return (
        <>
            <div className="car-detail-container">
                <div className="car-detail-left">
                    <div className="car-detail-image">
                        <img src={detail.image} alt="" />
                    </div>
                    <div className="cart-buttons">
                        <button onClick={handleAddToCart} className="add-btn btn">Add</button>
                        <div className="_flex add-btns">
                            <button onClick={handleMinusQuantity} className="cart-btn">-</button>
                            <button className="quantity">{quantity}</button>
                            <button onClick={handlePlusQuantity} className="cart-btn">+</button>
                        </div>
                    </div>
                </div>
                <div className="car-detail-info">
                    <h1>{detail.name}</h1>
                    <p>starting price {detail.price} $</p>
                    <p>{detail.description}</p>
                </div>

            </div>
        </>
    )
}
export default Detail