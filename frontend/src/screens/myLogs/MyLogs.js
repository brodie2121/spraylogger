import MainScreen from "../../components/MainScreen";
import { Link } from "react-router-dom";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import logs from "../../data/logs";
import { useEffect } from "react";
import axios from "axios";

const MyLogs = () => {
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
    }
  };

  const fetchLogs = async () => {
    const data = await axios.get("/logs/mylogs");
    console.log(data);
  };
  useEffect(() => {
    fetchLogs();
  }, []);

  return (
    <MainScreen title="Welcome Back">
      <Link to="createlog">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create new Log
        </Button>
      </Link>
      {logs.map((log) => (
        <Accordion>
          <Card style={{ margin: 10 }}>
            <Card.Header style={{ display: "flex" }}>
              <span
                style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1,
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: 18,
                }}
              >
                <Accordion.Toggle as={Card.Text} variant="link" eventKey="0">
                  {log.dateApplied}
                </Accordion.Toggle>
              </span>

              <div>
                <Button href={`/log/${log._id}`}>Edit</Button>
                <Button
                  variant="danger"
                  className="mx-2"
                  onClick={() => deleteHandler(log._id)}
                >
                  Delete
                </Button>
              </div>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <h4>
                  <Badge variant="success">Area - {log.area}</Badge>
                </h4>
                <blockquote className="blockquote mb-0">
                  <p>{log.Opperator}</p>
                  <footer className="blockquote-footer">
                    Created On - date
                  </footer>
                </blockquote>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}
    </MainScreen>
  );
};

export default MyLogs;
