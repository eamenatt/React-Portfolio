import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import "./style.css";
import projects from "./projects.json"


function Portfolio() {
  return (
    <div>
      <Header />
      <Navigation />
      <h2 className="orange-text">My Project Portfolio</h2>
      <Container>
        <Row>
          <Col size="md-12">
            {projects.map(project => (
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