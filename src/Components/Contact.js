import React,{useState} from "react";
import './Contact.css'

function Contact(){

  const [messageSubmitted, setMessageSubmitted] = useState(false);
  const [messageText, setMessageText] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "6e0035a2-5fb9-402b-9494-1240cda6ac1e");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

    try{    

        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          setMessageSubmitted(true);
          setMessageText("✅ Message sent successfully!");
          event.target.reset();

          setTimeout(() => {
            setMessageSubmitted(false);
        }, 3000);

        } else {
          setMessageSubmitted(true);
          setMessageText("❌ Failed to send message. Please try again.");
      }
      }
     catch (error) {
        setMessageSubmitted(true);
        setMessageText("⚠️ Network error. Please check your connection.");
    }
  };

    return(
        <section id="contact">

            <div className="contactDet">
            <h2>Get In Touch</h2>
            <p>Have questions or want to collaborate? Fill out the form to send me an email!</p>
            <a href="/CV.pdf" download="Tariro_CV">Download My CV</a>
            </div>


            <form onSubmit={onSubmit}>
            
            <div className="input-box">
                <label>Full Name</label>
                <input type="text" className="input-field" placeholder="Enter your name" name="name" required/>
            </div>

            <div className="input-box">
                <label>Email Address</label>
                <input type="email" className="input-field" placeholder="Enter your email" name="email" required/>
            </div>

            <div className="input-box">
                <label>Your Message</label>
                <textarea name="message" className="message-field" placeholder="Enter your message" required></textarea>
            </div>
            <button type="submit" className="submitBtn"> Send Message</button>
            </form>

            {messageSubmitted && (
                <div className="popup">
                    <p>{messageText}</p>
                </div>
            )}

        </section>
    );
};

export default Contact;