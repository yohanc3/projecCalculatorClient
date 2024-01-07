import ParticlesBackground from "../particles"
import "../css/App.css"
import {scrollDown} from "../util/scrollDown";

export default function FrontPage(){

  return (

        <section className="outter-title-wrapper">
          <div className="title-wrapper">
            <div className="centered-title">
              <div className="title">Projectile</div><div className="title">Calculator</div>
            </div>
            <div className="slogan">
              Answers to your Projectile Motion problems in seconds
            </div>
            <button onClick={() => scrollDown("calculator")}className="go-button">Calculate</button>
            <button className="down-arrow-container">
            <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 0 24 24" width="35px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg>
            </button>
          </div>
            <div className="particlesbg-container">
              <div className="particles-background">
                <ParticlesBackground/>
              </div>
            </div>
        </section>

  )

}
