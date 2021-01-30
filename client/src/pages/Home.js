import React from "react";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";
import "./style.css";
// import { SET_CURRENT_USER } from "../utils/actions";
// import { useStoreContext } from "../utils/GlobalState";
// import axios from "axios";



function Home() {
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
    <div>
      <Header />
      <Navigation />
      <Container>
        <Jumbotron fluid className="home-jumbotron">
          <h2 className="headline">About Me</h2>
          <p className="home-body">
                My name is Eric Menatti and I'm an aspiring sofware developer. I completed my undergraduate's degree
                in Management Information Systems from Clemson University in 2013 and have been a Software sales
                professional for the past 7 years. I've gained experience working with customers across the Federal
                Government and the Events
                Industry, among others.
                
                I was born in France and lived between the US and Belgium until 2001. I currently live in Arlington,
                Virginia with my girlfriend, Elaine. Some of my main hobbies are hiking local trails, tinkering
                with my PC, and gaming with friends. I have recently completed the GWU Full-Stack Development course.
            </p>
        </Jumbotron>
        <Jumbotron className="home-jumbotron">
          <h3 className="headline">What am I up to?</h3>
          <p className="home-body">
                I'm currently working as technical support and developer for CommonLook, a company that provides the leading technology in 508 compliance and enables organizations to ensure their online resources are accessible to the blind and disabled.
            </p>
          <p>
            <Link to="/Contact">
              <Button className="send-form" variant="outline-secondary">Contact Us</Button>
            </Link>
          </p>
        </Jumbotron>
      </Container>
    </div>
  )
}

export default Home;