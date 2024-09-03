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
            className={selectedCategory === "ford" ? "active" : ""}
            onClick={() => handleCategoryChange("ford")}
          >
            Ford
          </button>
          <button
            className={selectedCategory === "bmw" ? "active" : ""}
            onClick={() => handleCategoryChange("bmw")}
          >
            BMW
          </button>
          <button
            className={selectedCategory === "mercedes" ? "active" : ""}
            onClick={() => handleCategoryChange("mercedes")}
          >
            Mercedes
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
