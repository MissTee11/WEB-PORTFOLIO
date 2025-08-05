import React from "react";
import "./Skills.css";
import css from "../images/css.png";
import html from "../images/html.png";
import javascript from "../images/javascript.png";
import react from "../images/reactjs.png";
import redux from "../images/redux.png";
import postgreSQL from "../images/postgresql.png";


function MySkills(){

    return(
        <section id="skills">
            <h1 className="skillTitle">Technical Skills</h1>

        <div className="Skills">
            <div className="skill">
                <div className="imgContainer">
                <img  src={html} className="skillImg"/>
                </div>
                <h5>HTML</h5>
                </div>

                <div className="skill">
                    <div className="imgContainer">
                    <img  src={css} className="skillImg"/>
                    </div>
                <h5>CSS</h5>
                </div>

                <div className="skill">
                    <div className="imgContainer">
                    <img  src={javascript} className="skillImg"/>
                    </div>
                <h5>Javascript</h5>
                </div>

                <div className="skill">
                    <div className="imgContainer">
                    <img  src={react} className="skillImg"/>
                    </div>
                <h5>React.js</h5>
                </div>

                <div className="skill">
                    <div className="imgContainer">
                    <img  src={redux} className="skillImg"/>
                    </div>
                <h5>Redux</h5>
                </div>

                <div className="skill">
                    <div className="imgContainer">
                    <img  src={postgreSQL} className="skillImg"/>
                    </div>
                <h5>PostgreSQL</h5>
                </div>

              
        </div>

       
        
        </section>
    )
}
export default MySkills;