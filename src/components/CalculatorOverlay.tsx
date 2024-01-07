import "../css/calculator.css";
import { useState } from "react";
import Calculator from "./Calculator";


export default function CalculatorOverlay(){

  const [currentBtnClicked, setCurrentButtonClicked] = useState<string>("golfBall");

  function toggleButtonClicked(problemType: string){
    
    setCurrentButtonClicked(problemType);

  } 

  return (
    <section id="calculator" className="calculator-section">
      <div className="calculator-wrapper">
        <div className="problem-type-buttons-wrapper">
          <div className="problem-type-buttons">
            <div className="button-wrapper">
              <button className={` problem-type-golf ${currentBtnClicked === "golfBall" ? "clicked" : ""}`} id="button-golf" onClick={() => (toggleButtonClicked("golfBall"))}>Golf Ball</button>
            </div>
            <div className="button-wrapper">
              <button className={`problem-type-table ${currentBtnClicked === "tableTop" ? "clicked" : ""}`} id="button-table" onClick={() => (toggleButtonClicked("tableTop"))}>Table Top</button>
            </div>
            <div className="button-wrapper">
              <button className= { `problem-type-cliff ${currentBtnClicked === "cliff" ? "clicked" : ""}`} id="button-cliff" onClick={() => toggleButtonClicked("cliff")}>Cliff</button>
            </div>
          </div>
        </div>
        <Calculator problemType={currentBtnClicked}/>

        
      </div>
      
    </section>
  );
}