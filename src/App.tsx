import "./css/App.css";
import FrontPage from "./components/FrontPage";
import Spacer from "./util/Spacer";
import CalculatorOverlay from "./components/CalculatorOverlay";
import {scrollDown} from "./util/scrollDown";

export default function App(){

  return (
    <div> 
      <div className="navBar">
        <p>Projectile Calculator</p>
        <button onClick={() => scrollDown("calculator")}className="navBar-button">Calculate</button>
      </div>
      <FrontPage/>
      <Spacer/>
      <CalculatorOverlay/>
    </div>
  )
}


