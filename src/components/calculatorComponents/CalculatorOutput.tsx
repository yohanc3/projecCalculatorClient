

interface Output {
  initialHorizontalVelocity?: number;
  initialVerticalVelocity?: number;
  flightTime?: number;
  horizontalDisplacement?: number;
  maxHeight?: number;
  totalFallTime? : number;
  totalHorizontalDisplacement?: number;
  totalVerticalVelocity?: number;
  trueFinalVelocity?: number;
  angleAtFinalVelocity?: number;
  problemType?: string;
}

export default function CalculatorOutput({calculations, problemType}: {calculations: Output | null, problemType: string}){

  console.log(calculations);

  return (

    <div className="calculator-output-wrapper">
      <div className="calculator-output-parameter-wrapper">
        <div className="calculator-output-title"> { problemType === "tableTop" ? "Total Fall Time" : "Initial Horizontal Displacement"}</div>
        <div className="calculator-output-parameter">
            {problemType === "tableTop" ? calculations?.totalFallTime || "0" : calculations?.initialHorizontalVelocity || "0"}
        </div>
      </div>
      <div className="calculator-output-parameter-wrapper">
         <div className="calculator-output-title"> {problemType === "tableTop" ? "Total Horizontal Velocity" : "Initial Vertical Displacement"}</div>
        <div className="calculator-output-parameter">
        { problemType === "tableTop" ? calculations?.totalHorizontalDisplacement || "0" : calculations?.initialVerticalVelocity || "0"}
        </div>
      </div>
      <div className="calculator-output-parameter-wrapper">
         <div className="calculator-output-title">{problemType === "tableTop" ? "Final Vertical Velocity" : "Flight Time"}</div>
        <div className="calculator-output-parameter">
        {problemType === "tableTop" ? calculations?.totalVerticalVelocity || "0" : calculations?.flightTime || "0"}
        </div>
      </div>
      <div className="calculator-output-parameter-wrapper">
         <div className="calculator-output-title"> {problemType === "tableTop" ? "True Final Velocity" : "Horizontal Displacement"}</div>
        <div className="calculator-output-parameter">
        { problemType === "tableTop" ? calculations?.trueFinalVelocity || "0" : calculations?.horizontalDisplacement || "0"}
        </div>
      </div>
      <div className="calculator-output-parameter-wrapper">
         <div className="calculator-output-title">{problemType === "tableTop" ? "Angle At Final Velocity" : "Max Height"}</div>
        <div className="calculator-output-parameter">
        { problemType === "tableTop" ? calculations?.angleAtFinalVelocity || 0 :  calculations?.maxHeight || "0"}
        </div>
      </div>
    </div>

  );

}