import MainScreen from "../../components/MainScreen";
import { Link, useHistory } from "react-router-dom";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listLogs } from "../../actions/logsActions";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const MyLogs = () => {
  const dispatch = useDispatch();

  const logList = useSelector((state) => state.logList);
  const { loading, logs, error } = logList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
    }
  };

  console.log(logs);

  const history = useHistory();

  useEffect(() => {
    dispatch(listLogs());
    if (!userInfo) {
      history.push("/");
    }
  }, [dispatch]);

  return (
    <MainScreen title={`Welcome Back ${userInfo.name}`}>
      <Link to="createlog">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create new Log
        </Button>
      </Link>
      {error && <Error variant="danger">{error}</Error>}
      {loading && <Loading />}
      {logs?.map((log) => (
        <Accordion key={log._id}>
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
                  {log.date_applied}
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
                  <Badge variant="success">Location - {log.location}</Badge>
                </h4>
                <blockquote className="blockquote mb-0">
                  <p>{log.operator}</p>
                  <p>{log.holes_treated}</p>
                  <p>{log.chemicals}</p>
                  <p>{log.notes}</p>
                  <p>{log.operator}</p>
                  <footer className="blockquote-footer">
                    Created On{" "}
                    <cite title="Source Title">
                      {log.createdAt.substring(0, 10)}
                    </cite>
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
