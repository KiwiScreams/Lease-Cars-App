import "./Detail.css";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
function Detail() {
  const { name } = useParams();
  console.log(name);
  const [detail, setDetail] = useState([]);
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
  );
}
export default Detail;
