
import './Hero.css';
function HeroSection(){

    return(
        <section className="container">
            <h1 className="heroTitle" id="animated-text">Hello, I'm Tariro!</h1>
            <h2 className="description" id="animated-text">Web Developer|Computer Engineering Student</h2>
            <a href="#contact" className="contactBtn">Contact Me</a>
            

            <div className="rightBlur"/>
            <div className="leftBlur"/>

        </section>
    )
}
export default HeroSection;