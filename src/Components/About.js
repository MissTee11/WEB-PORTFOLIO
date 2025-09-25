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
                 <p>I am a third-year Computer Engineering student studying abroad at Sakarya 
                    University in Türkiye. I am passionate about web technology, full-stack 
                    development, and embedded systems.<br/>
                    I specialize in creating interactive and responsive user interfaces using 
                    tools like React.js, Redux, CSS, and HTML on the frontend, and Node.js with 
                    PostgreSQL on the backend.<br/>
                    Beyond software, I have hands-on experience with hardware projects, working 
                    with ESP32, Arduino, and nRF52840 (Nice!Nano) to integrate sensors, enable 
                    Bluetooth communication, and build IoT solutions.<br/>
                    I enjoy exploring innovative ways to enhance user experiences, connect 
                    software with hardware, and expand my knowledge of modern technologies.
                </p>
                </div>
               
        </section>
        
    

    )

}
export default About;