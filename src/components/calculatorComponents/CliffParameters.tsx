import "../../css/calculator.css";
import {useForm,} from "react-hook-form";
import { useEffect, useState } from "react";

import {useDebounce} from "usehooks-ts";

type FormDataType = {
  angle?: number;
  initialSpeed?: number;
  height?: number;
};

type FormErrorsType = {
  angle: boolean;
  initialSpeed: boolean;
  height: boolean;
}

type cleanUp = () => void;

type onFormSubmitType = (formData: FormDataType) => void;


export default function GolfBallParameters({onFormSubmit, cleanUp}: {onFormSubmit: onFormSubmitType, cleanUp: cleanUp}){

  const {register, handleSubmit} = useForm<FormDataType>();

  // const [formData, setFormData] = useState<FormDataType> | null(null);
  const [formData, setFormData] = useState<FormDataType>({angle: 0, initialSpeed: 0, height: 0});
  const [formErrors, setFormErrors] = useState<FormErrorsType>({angle: false, initialSpeed: false, height: false});

  const debouncedForm = useDebounce(formData, 700);

  useEffect(() => {
    console.log("FIRED");
    if(isFormDataValid(formData)){
      console.log("FIRED IF");
      onFormSubmit(formData);
    }
  }, [debouncedForm])

  function isFormDataValid(formData: FormDataType){
    return !(Object.values(formData).some(i => i===0))
  }

  function handleFormSubmit(formInputs: FormDataType){
    console.log(formInputs);
    const isFormErrorsClean = autoSetFormErrors(formInputs);
    if(isFormErrorsClean){
      setFormData(formInputs);
    } else {
      setFormData({angle: 0, initialSpeed: 0, height: 0});
      cleanUp();
    }
  }



  function autoSetFormErrors(formInputs: FormDataType){
    const newFormErrors: FormErrorsType = {angle: !!formInputs.angle, initialSpeed: !!formInputs.initialSpeed, height: !!formInputs.height}
    setFormErrors(newFormErrors);
    return !Object.values(newFormErrors).some((error) => (!!error) === false)
  }

  return (
      <form onChange={handleSubmit((data) => handleFormSubmit(data))} className="calculator-input-form">

        <div className="calculator-parameter-wrapper">
          {(!formErrors.angle) && <span className="parameter-error">This is a required parameter</span>}
          <div className="calculator-parameter">
            <div className="calculator-parameter-label">
              Angle
            </div>
          <div className="calculator-parameter-label-input">
            <input type="number" className="calculator-parameter-input" {...register("angle")}/>
            <div className="calculator-parameter-type-wrapper">
              <select name="parameter-type">
                <option value="degrees" title="deg (degrees)">deg</option>
                <option value="radians">rad</option>
              </select>
            </div>
          </div>
        </div>
        </div>
       
        <div className="calculator-parameter-wrapper">
          {(!formErrors.initialSpeed) && <span className="parameter-error">This is a required parameter</span>}
          <div className="calculator-parameter">
            <div className="calculator-parameter-label">
              Initial speed
            </div>
            <div className="calculator-parameter-label-input">
              <input type="number" className="calculator-parameter-input" {...register("initialSpeed")}/>
              <div className="calculator-parameter-type-wrapper">
                <select name="parameter-type">
                  <option value="m/s" title="m/s">m/s</option>
                  <option value="ft/s">ft/s</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="calculator-parameter-wrapper">
          {(!formErrors.height) && <span className="parameter-error">This is a required parameter</span>}
          <div className="calculator-parameter">
            <div className="calculator-parameter-label">
               Height
            </div>
            <div className="calculator-parameter-label-input">
              <input type="number" className="calculator-parameter-input" {...register("height")}/>
              <div className="calculator-parameter-type-wrapper">
                <select name="parameter-type">
                  <option value="m" title="m">m</option>
                  <option value="ft" title="ft">ft</option>
                </select>
              </div>
            </div>
          </div>
        </div>
          
      </form>
      
  )
}