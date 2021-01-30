import React from "react";
import Navigation from "../components/Navigation";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./style.css";



function Contact() {
  
  return (
    <div className="background">
      <Header />
      <Navigation />
      <Jumbotron>
        <h1>Have a question? Reach out to me!</h1>

        <ul>
          <li>Email: <a href="mailto:eamenatt@gmail.com" target="_blank">eamenatt@gmail.com</a></li>
          <li>Linkedin: <a href="https://www.linkedin.com/in/eric-menatti-74130679/" target="_blank">https://www.linkedin.com/in/eric-menatti-74130679/</a></li>
          <li>GitHub Repository: <a href="https://github.com/eamenatt" target="_blank">https://www.linkedin.com/in/eric-menatti-74130679/</a></li>
        </ul>
      </Jumbotron>
      <ContactForm />
    </div>
  );
}

export default Contact;