import { useState, useEffect } from "react";
import "./ClearUp.css"
const ClearUp = () => {
  const [widthCount, setWidthCount] = useState(window.screen.width);
  const [heightCount,setHeightCount]=useState(window.screen.height);

  const currentScreenWidth = () => {
    setWidthCount(() => window.innerWidth);
    
  };
  
  const currentScreenHeight = () => {
    setHeightCount(()=>window.outerHeight)
  };

  useEffect(() => {
    window.addEventListener("resize", currentScreenWidth);
    window.addEventListener("resize", currentScreenHeight);
  });
  return (
    <>
      <div className="container">
        <h2>
          The size of the window is width x height<span> {widthCount} 
          X {heightCount} 
          
           </span>
        </h2>
      </div>
      </>
  );
};


export default ClearUp;