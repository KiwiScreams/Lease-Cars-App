import "./NewCars.css"
import { Outlet } from "react-router-dom"
import { cars } from "../../assets/cars"
import Cart from "../../components/car/CarList"
function NewCars() {
    return (
        <>
            <div className="cars-container">
                {cars.map((car) =>
                    <Cart key={car.id} data={car} />
                )}
            </div>
        </>
    )
}
export default NewCars