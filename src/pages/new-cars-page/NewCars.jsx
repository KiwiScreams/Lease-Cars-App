import "./NewCars.css";
import { cars } from "../../assets/cars";
import Cart from "../../components/car/CarList";
import { useState, useEffect } from "react";

function NewCars() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredCars = cars.filter((car) => {
    if (selectedCategory === "") {
      return true;
    } else {
      return car.category === selectedCategory;
    }
  });

  return (
    <>
      <section className="section-car">
        <h1>Choose your car</h1>
        <div className="category-buttons">
          <button
            className={selectedCategory === "" ? "active" : ""}
            onClick={() => handleCategoryChange("")}
          >
            All
          </button>
          <button
            className={selectedCategory === "minivan" ? "active" : ""}
            onClick={() => handleCategoryChange("minivan")}
          >
            Car and Minivan
          </button>
          <button
            className={selectedCategory === "trucks" ? "active" : ""}
            onClick={() => handleCategoryChange("trucks")}
          >
            Trucks
          </button>
          <button
            className={selectedCategory === "suv" ? "active" : ""}
            onClick={() => handleCategoryChange("suv")}
          >
            Crossovers & SUVs
          </button>
          <button
            className={selectedCategory === "electrified" ? "active" : ""}
            onClick={() => handleCategoryChange("electrified")}
          >
            Electrified
          </button>
        </div>
        <div className="cars-container">
          {filteredCars.length > 0 ? (
            filteredCars.map((car) => <Cart key={car.id} data={car} />)
          ) : (
            <p className="no-cars">No cars found in this category.</p>
          )}
        </div>
      </section>
    </>
  );
}

export default NewCars;
