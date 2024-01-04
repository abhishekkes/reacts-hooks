import { useState, useEffect } from "react";
import "./UseEffect.css";


const UseEffect = () => {
  const [count, setCount] = useState(0);

  const countUpdate = (val) => {
    if (val === "inc") return setCount(count + 1);
    if (val === "dec") return setCount(count - 1);
  };

  useEffect(() => {
    document.title = count;
  }, [count]);

  return (
    <>
      
        <div className="container">
          <button className="mybutton" onClick={() => countUpdate("inc")}>
            +
          </button>
          <h1>{count}</h1>
          <button className="mybutton" onClick={() => countUpdate("dec")}>
            -
          </button>
        </div>
      
    </>
  );
};


export default UseEffect;