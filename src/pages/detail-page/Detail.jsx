import "./Detail.css"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { cars } from "../../assets/cars"
function Detail() {
    const { name } = useParams();
    console.log(name);
    const [detail, setDetail] = useState([]);
    useEffect(() => {
        const findDetail = cars.filter(car => car.car === name);
        if (findDetail.length > 0) {
            setDetail(findDetail[0]);
        }
        else {
            window.location.href = '/';
        }
    }, [name])
    return (
        <>
            <div className="car-detail-container">
                <div className="car-detail-left">
                    <div className="car-detail-image">
                        <img src={detail.image} alt="" />
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