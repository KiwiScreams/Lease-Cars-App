import { useState, useEffect } from "react"
import HomeBody from "../body/Homebody";
export default function Carousel({ slides }) {
    let [current, setCurrent] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrent((prevCurrent) => {
            if (prevCurrent + 1 >= slides.length) {
              return 0;
            }
            return (prevCurrent + 1) % slides.length;
          });
        }, 3000);
      
        return () => {
          clearInterval(intervalId);
        };
      }, [slides]);
    return (
        <div className="overflow-hidden relative w-full h-auto">
            <div className={`flex transition ease-out duration-500`}
                style={{ transform: `translateX(-${current * 100}%)` }}>
                {slides.map((s) => {
                    return <img key={s} src={s} />
                })}
            </div>
            <div className="carousel-about">
                {slides.map((s, i) => {
                    return (
                <div key={"circle" + i} className={`carousel-indicator rounded-full ${i == current ? "bg-white" : "bg-black"}`} onClick={()=>
                {
                    setCurrent(i);
                }
                }></div>
                    )
                })}
            </div>
        </div>
    )
}