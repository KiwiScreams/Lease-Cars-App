import "./NewCars.css";
import { cars } from "../../assets/cars";
import Cart from "../../components/car/CarList";
import { useState, useEffect } from "react";

function NewCars() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [rows, setRows] = useState(1);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleRowsChange = (rows) => {
    setRows(rows);
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
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              className={rows === 1 ? "active" : ""}
              onClick={() => handleRowsChange(1)}
            >
              1
            </button>
            <button
              className={rows === 2 ? "active" : ""}
              onClick={() => handleRowsChange(2)}
            >
              2
            </button>
            <button
              className={rows === 3 ? "active" : ""}
              onClick={() => handleRowsChange(3)}
            >
              3
            </button>
            <button
              className={rows === 4 ? "active" : ""}
              onClick={() => handleRowsChange(4)}
            >
              4
            </button>
          </div>
        </div>
        <div
          className="cars-container"
          style={{ gridTemplateColumns: `repeat(${rows}, 1fr)` }}
        >
          {filteredCars.length > 0 ? (
            filteredCars.map((car) => (
              <Cart key={car.id} data={car} className={`car-size-${rows}`} />
            ))
          ) : (
            <p className="no-cars">No cars found in this category.</p>
          )}
        </div>
      </section>
    </>
  );
}

export default NewCars;
