import "./css/App.css";
import FrontPage from "./components/FrontPage";
import Spacer from "./util/Spacer";
import CalculatorOverlay from "./components/CalculatorOverlay";

export default function App(){

  
  function scrollDown(id: string){
    document.getElementById(id)?.scrollIntoView();

  }

  return (
    <div> 
      <div className="navBar">
        <p>Projectile Calculator</p>
        <button onClick={() => scrollDown("calculator")}className="navBar-button">Calculate</button>
      </div>
      <FrontPage/>
      <Spacer layer="layer4"/>
      <CalculatorOverlay/>
    </div>
  )
}


