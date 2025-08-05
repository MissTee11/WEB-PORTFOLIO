import './About.css'
import me from '../images/me.JPG'

function About(){

    return(
        <section className="AboutSection" id="about">

            <div className="left-section">
                <img src={me} className="Profile" alt="Profile"/>
            </div>
            
            <div className="About">
            <h2 className="aboutTitle">ABOUT</h2>
                <p>I am a second year computer engineering student studying abroad at Sakarya<br/>  University in Türkiye. I am passionate
                    about web technology and front-end development.<br/>  I specialize in creating interactive
                    responsive user interfaces. Using tools like React.js,<br/> Redux,CSS and HTML.
                    I enjoy exploring innovative ways to enhance user experiences and expand my knowledge of 
                    modern web technologies.
              
                </p>
                </div>
               
        </section>
        
    

    )

}
export default About;