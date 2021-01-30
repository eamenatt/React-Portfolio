import React from "react";
import Navigation from "../components/Navigation";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./style.css";
// import axios from "axios";
// import { useStoreContext } from "../utils/GlobalState";
// import { SET_CURRENT_USER } from "../utils/actions";


function Contact() {
  // const [state, dispatch] = useStoreContext();
  // const [user, setUser] = useState();

  // useEffect(() => {
  //   const checkLoggedIn = async () => {
  //     let token = localStorage.getItem("auth-token");
  //     if (token === null) {
  //       localStorage.setItem("auth-token", "");
  //       token = "";
  //     }
  //     const tokenRes = await axios.post(
  //       "/api/user/validate",
  //       null,
  //       { headers: { "x-auth-token": token } }
  //     );
  //     console.log(tokenRes.data);
  //     if (tokenRes.data) {
  //       const userRes = await axios.get(
  //         "/api/user",
  //         { headers: { "x-auth-token": token } }
  //       );
  //       dispatch({
  //         type: SET_CURRENT_USER,
  //         user: userRes.data
  //       });
  //       setUser({
  //         token,
  //         user: userRes.data,
  //       });
  //     }
  //   };

  //   checkLoggedIn();
  // }, []);

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