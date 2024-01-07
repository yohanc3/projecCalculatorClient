
export interface Output {
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

export type FormDataType = {
  angle?: number;
  initialSpeed?: number;
  height?: number;
};

export type FormErrorsType = {
  angle?: boolean;
  initialSpeed?: boolean;
  height?: boolean;
}

export type CleanUp = () => void;

export type OnFormSubmitType = (formData: FormDataType) => void;




