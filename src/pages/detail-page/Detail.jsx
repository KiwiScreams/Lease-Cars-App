import "./Detail.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cars } from "../../assets/cars";
import Loader from "../../components/loader/Loader";
function Detail() {
  const { name } = useParams();
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    const findDetail = cars.filter((car) => car.car === name);
    if (findDetail.length > 0) {
      setDetail(findDetail[0]);
    } else {
      window.location.href = "/";
    }
  }, [name]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="car-detail-container">
          <div className="car-detail-left">
            <div className="car-detail-image">
              <img src={detail.image} alt="" />
            </div>
          </div>
          <div className="car-detail-info">
            <h2>{detail.name}</h2>
            <p>starting price {detail.price} $</p>
            <p>{detail.description}</p>
          </div>
        </div>
      )}
    </>
  );
}
export default Detail;
