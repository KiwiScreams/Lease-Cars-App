import { useState } from 'react'
import './Home.css'
import Header from '../../components/header/Header'
import Carousel from '../../components/home-components/carousel/Carousel.jsx'
import car_image_1 from "../../assets/images/car.png"
import Homebody from '../../components/home-components/body/Homebody.jsx'
function Home() {
    let slides =
        [
            car_image_1,
            "https://i.pinimg.com/originals/51/58/d1/5158d111864f2da8f79fd027cc647802.jpg",
            "https://images.alphacoders.com/190/190863.jpg"
        ];
    return (
        <>
            <div className="image-container">
                <Carousel slides={slides}/>
                <div className="content">
                    <h1>Leasing From D&M</h1>
                    <button className="btn">find a car</button>
                </div>
            </div>
            <Homebody/>
        </>
    )
}

export default Home