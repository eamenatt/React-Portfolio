import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import { useStoreContext } from "../utils/GlobalState";
import { UPDATE_PROJECTS } from "../utils/actions";
import axios from "axios";

import API from "../utils/API";
import "./style.css";

function Portfolio() {
  const [state, dispatch] = useStoreContext();

  const getProjects = () => {
    dispatch({ type: LOADING });
    API.getProject()
      .then(results => {
        dispatch({
          type: UPDATE_PROJECTS,
          projects: results.data
        });
      })
      .catch(err => console.log(err));
  };


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
  getProjects();
  return (
    <div>

      <Header />
      <Navigation />
      <h2 className="orange-text">My Project Portfolio</h2>
      <Container>
        <Row>
          <Col size="md-12">
            {state.projects.map(project => (
              <Card key={project._id} className="pet-list-card">
                <Card.Body>
                  <Card.Title className="pet-list-text">{project.name}</Card.Title>
                  <Card.Text className="pet-list-text">
                    {project.details}
                  </Card.Text>
                  <Card.Subtitle className="mb-2 pet-list-text">Project Link: {project.url}</Card.Subtitle>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Portfolio;