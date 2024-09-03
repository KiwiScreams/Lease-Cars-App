import "./NewCars.css";
import { cars } from "../../assets/cars";
import Cart from "../../components/car/CarList";
import { useState, useEffect } from "react";
import Loader from "../../components/loader/Loader";

function NewCars() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [rows, setRows] = useState(1);
  const [loading, setLoading] = useState(true);

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
            <div style={{ display: "flex", gap: "4px" }}>
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
      )}
    </>
  );
}

export default NewCars;
