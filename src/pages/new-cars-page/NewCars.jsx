import "./NewCars.css"
import { Outlet } from "react-router-dom"
import { cars } from "../../assets/cars"
import Cart from "../../components/car/CarList"
function NewCars() {
    return (
        <>
            <h1>New Cars</h1>
            <div className="cars-container _flex">
                {cars.map((car) =>
                    <Cart key={car.id} data={car}/>
                    )}
            </div>
        </>
    )
}
export default NewCars