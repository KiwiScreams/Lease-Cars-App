import { useState } from "react"
import carsvg from "../../../assets/images/car.svg"
import percentsvg from "../../../assets/images/percentsvg.svg"
import cardsvg from "../../../assets/images/cardsvg.svg"
import arrowupsvg from "../../../assets/images/arrowtopsvg.svg"
import carVideo from "../../../assets/video/car-video.mp4"
import "./Homebody.css"
function Homebody() {
    return (
        <>
            <h2 className="lease">Why Lease with D&M?</h2>
            <section className="item-container">
                <div className="item">
                    <div className="item-image">
                        <img src={carsvg} alt="car" />
                    </div>
                    <h6>Top Dealers</h6>
                    <p>TrueCar Certified Dealers compete for your business by providing discounted pricing on in-stock inventory.</p>
                </div>
                <div className="item">
                    <div className="item-image">
                        <img src={percentsvg} alt="car" />
                    </div>
                    <h6>Discounted Pricing</h6>
                    <p>View local inventory from the comfort of home and get access to guaranteed savings on the car of your choice.</p>
                </div>
                <div className="item">
                    <div className="item-image">
                        <img src={cardsvg} alt="car" />
                    </div>
                    <h6>Lower Payments</h6>
                    <p>Get discounted pricing when you shop for a car or truck using TrueCar and save on your lease payment.</p>
                </div>
                <div className="item">
                    <div className="item-image">
                        <img src={arrowupsvg} alt="car" />
                    </div>
                    <h6>Easy Upgrade</h6>
                    <p>Easy to upgrade to the newest vehicle model every few years if you would like to be modern and comfortable</p>
                </div>
            </section>
            <section>
                <h2 className="lease">How Does Leasing Work?</h2>
                <p>Leasing a vehicle is essentially entering into a long term rental agreement for that vehicle. Unlike a traditional car purchase, you don't actually own the vehicle. Instead, a leasing company purchases the vehicle from the dealer on your behalf and then you make monthly payments to the leasing company for the duration of your lease. Some leases however, do provide the option to purchase the vehicle at the end of the lease.</p>
                <h3 className="similar">Similar to a short term car rental, there are rules that define:</h3>
                <div className="container">
                    <div className="box _flex">
                        <h5 className="num">1</h5>
                        <p>How much you can drive, stated as annual miles (excess miles are charged at a specified rate)</p>
                    </div>
                    <div className="box _flex">
                        <h5 className="num">2</h5>
                        <p>Types of damage that you may be liable for at the end of your lease</p>
                    </div>
                    <div className="box _flex">
                        <h5 className="num">3</h5>
                        <p>The procedures and costs when you return the vehicle at the end of your lease</p>
                    </div>
                </div>
                <p>Lease contracts are a commitment and ending them early can be difficult and expensive so it is important to consider your circumstances carefully before you decide.</p>
            </section>
            <section>
                <h1>WELCOME TO D&M LEASING</h1>
                <h2>Find out how easy it is to lease from D&M</h2>
                <video controls>
                    <source src={carVideo} type="video/mp4">
                    </source>
                </video>
            </section>
        </>
    )
}
export default Homebody