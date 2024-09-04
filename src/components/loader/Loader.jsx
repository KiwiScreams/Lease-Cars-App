import { useEffect, useState } from "react";
import "./Loader.css";
const Loader = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);
  }, []);

  return (
    <>
      <div>
        {show ? (
          <section className="loader">
            <h1>D&M</h1>
          </section>
        ) : null}
      </div>
    </>
  );
};

export default Loader;
