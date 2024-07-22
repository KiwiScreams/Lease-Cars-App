import "./Detail.css"
import React, { useEffect, useState } from "react"
import { Outlet, useParams } from "react-router-dom"
import { cars } from "../../assets/cars"
import { useDispatch } from "react-redux"
import { addToCart } from "../../components/store/Store"
function Detail() {
    const {name} = useParams();
    console.log(name);
    const [detail, setDetail] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    useEffect(() => 
    {
        const findDetail = cars.filter(car => car.car === name);
        if(findDetail.length > 0)
        {
            setDetail(findDetail[0]);
        }
        else
        {
            window.location.href = '/';
        }
    }, [name])
    function handleMinusQuantity()
    {
        setQuantity(quantity - 1 < 1 ? 1 : quantity -1);
    }
    function handlePlusQuantity()
    {
        setQuantity(quantity + 1);
    }
    function handleAddToCart()
    {
        dispatch(addToCart({
            carId: detail.id,
            quantity: quantity
        }));
    }
    return (
        <>
        <div>
            <img src={detail.image} alt="" />
            <h1>{detail.name}</h1>
            <p>{detail.price}</p>
            <p>{detail.description}</p>
            <button onClick={handleAddToCart}>Add</button>
            <button onClick={handleMinusQuantity}>-</button>
            <button>{quantity}</button>
            <button onClick={handlePlusQuantity}>+</button>
        </div>
        {/* <Outlet/> */}
        </>
    )
}
export default Detail