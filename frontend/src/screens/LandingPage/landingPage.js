import { Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./landingPage.css";
//import { useEffect } from "react";

const LandingPage = () => {
  //useEffect(() => {
  //const userInfo = localStorage.getItem("userInfo");

  //if (userInfo) {
  //history.push("mylogs");
  //}
  //}, [history]);

  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to Spraylogger</h1>
              <p className="subtitle">Logging made easy</p>
            </div>
            <div className="buttonContainer">
              <a href="/login">
                <Button size="lg" className="landingbutton">
                  Login
                </Button>
              </a>
              <a href="/register">
                <Button size="lg" className="landingbutton">
                  Register
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
