import "../css/calculator.css";
import CalculatorInput from "./calculatorComponents/CalculatorInput";
import CalculatorOutput from "./calculatorComponents/CalculatorOutput";
import { useEffect, useState } from "react";

interface Output {
  initialHorizontalVelocity?: number;
  initialVerticalVelocity?: number;
  flightTime?: number;
  horizontalDisplacement?: number;
  maxHeight?: number;
  totalFallTime? : number;
  totalHorizontalDisplacement?: number;
  totalVerticalDisplacement?: number;
  trueFinalVelocity?: number;
  angleAtFinalVelocity?: number;
}

type FormDataType = {
  angle?: number;
  initialSpeed?: number;
  height?: number;
};

export default function Calculator({problemType}: {problemType: string}){

  const [calculations, setCalculations] = useState<Output | null>(null);

  const VITE_APP_BUILD_ENV: string = import.meta.env.VITE_APP_BUILD_ENV;

  useEffect(() => {
    cleanUp();
  }, [problemType]);

  function cleanUp(){
    setCalculations(null);
  }

  async function onFormSubmit(formData: FormDataType){
    
    const fetchedCalculations = await fetchCalculations(formData);
    setCalculations(fetchedCalculations);

  }

  async function fetchCalculations(formData: FormDataType){
    try {
      const finalFormData = {
        ...formData, 
        problemType: problemType,
      }

      const JSONFormData = JSON.stringify(finalFormData);
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSONFormData
      }

      const calculations = await fetch(VITE_APP_BUILD_ENV, options);

      const readableCalculations = await calculations.json();

      return readableCalculations;
    } catch(e){
      console.log(e);
    }
  }

  return (

    <div className="calculator">
      <div className="calculator-input">
        <CalculatorInput problemType={problemType} onFormSubmit={onFormSubmit} cleanUp={cleanUp}/>
      </div>
      <div className="calculator-output">
        <CalculatorOutput {...{calculations, problemType}}/>
      </div>
    </div>

  )
}