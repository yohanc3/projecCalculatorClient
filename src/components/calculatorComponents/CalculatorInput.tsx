import GolfBallParameters from "./GolfBallParameters";
import CliffParameters from "./CliffParameters";
import TableTopParameters from "./TableTopParameters";

import type {OnFormSubmitType, CleanUp} from "../../Types/types"


export default function CalculatorInput({onFormSubmit, problemType, cleanUp}: {onFormSubmit: OnFormSubmitType, problemType: string, cleanUp: CleanUp}){

  if(problemType === "golfBall"){
    return <GolfBallParameters {...{onFormSubmit, cleanUp}}/>
  } else if(problemType === "tableTop"){
    return <TableTopParameters {...{onFormSubmit, cleanUp}}/>
  } else if (problemType === "cliff"){
    return <CliffParameters {...{onFormSubmit, cleanUp}}/>
  }

}