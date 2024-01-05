import GolfBallParameters from "./GolfBallParameters";
import CliffParameters from "./CliffParameters";
import TableTopParameters from "./TableTopParameters";

type onFormSubmitType = (formData: FormDataType) => void;

type FormDataType = {
  angle?: number;
  initialSpeed?: number;
  height?: number;
};

type cleanUp = () => void;


export default function CalculatorInput({onFormSubmit, problemType, cleanUp}: {onFormSubmit: onFormSubmitType, problemType: string, cleanUp: cleanUp}){

  if(problemType === "golfBall"){
    return <GolfBallParameters {...{onFormSubmit, cleanUp}}/>
  } else if(problemType === "tableTop"){
    return <TableTopParameters {...{onFormSubmit, cleanUp}}/>
  } else if (problemType === "cliff"){
    return <CliffParameters {...{onFormSubmit, cleanUp}}/>
  }

}