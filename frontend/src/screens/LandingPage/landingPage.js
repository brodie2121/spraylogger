import { Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./landingPage.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const LandingPage = ({ history }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push("/logs");
    }
  }, [history, userInfo]);

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
              <Link to="/login">
                <Button size="lg" className="landingbutton">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button size="lg" className="landingbutton">
                  Register
                </Button>
              </Link>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
