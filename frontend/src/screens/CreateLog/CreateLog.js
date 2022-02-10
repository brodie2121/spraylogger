import React, { useEffect, useState } from "react";
import MainScreen from "../../components/MainScreen";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createLogAction } from "../../actions/logsActions";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import ReactMarkdown from "react-markdown";

function CreateLog({ history }) {
  const [date_applied, setDate_applied] = useState("");
  const [location, setLocation] = useState("");
  const [operator, setOperator] = useState("");
  const [holes_treated, setHoles_treated] = useState("");
  const [chemicals, setChemicals] = useState("");
  const [notes, setNotes] = useState("");

  const dispatch = useDispatch();

  const logCreate = useSelector((state) => state.logCreate);
  const { loading, error, log } = logCreate;

  console.log(log);

  const resetHandler = () => {
    setDate_applied("");
    setLocation("");
    setOperator("");
    setHoles_treated("");
    setChemicals("");
    setNotes("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createLogAction(
        date_applied,
        operator,
        location,
        holes_treated,
        chemicals,
        notes
      )
    );
    if (
      !date_applied ||
      !location ||
      !operator ||
      !holes_treated ||
      !chemicals ||
      !notes
    )
      return;

    resetHandler();
    history.push("/logs");
  };

  useEffect(() => {}, []);

  return (
    <MainScreen title="Create a Log">
      <Card>
        <Card.Header>Create a new Log</Card.Header>
        <Card.Body>
          <Form onSubmit={submitHandler}>
            {error && <Error variant="danger">{error}</Error>}
            <Form.Group controlId="title">
              <Form.Label>Date Applied</Form.Label>
              <Form.Control
                type="title"
                value={date_applied}
                placeholder="Enter the title"
                onChange={(e) => setDate_applied(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="content">
              <Form.Label>Location</Form.Label>
              <Form.Control
                as="textarea"
                value={location}
                placeholder="Enter the Location"
                rows={4}
                onChange={(e) => setLocation(e.target.value)}
              />
            </Form.Group>
            {location && (
              <Card>
                <Card.Header>Log Preview</Card.Header>
                <Card.Body>
                  <ReactMarkdown>{location}</ReactMarkdown>
                </Card.Body>
              </Card>
            )}

            <Form.Group controlId="content">
              <Form.Label>Operator</Form.Label>
              <Form.Control
                type="content"
                value={operator}
                placeholder="Enter the Operator's Name"
                onChange={(e) => setOperator(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="content">
              <Form.Label>Holes Treated</Form.Label>
              <Form.Control
                type="content"
                value={holes_treated}
                placeholder="Enter the Holes Treated"
                onChange={(e) => setHoles_treated(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="content">
              <Form.Label>Chemicals</Form.Label>
              <Form.Control
                type="content"
                value={chemicals}
                placeholder="Enter the Chemicals used"
                onChange={(e) => setChemicals(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="content">
              <Form.Label>Notes</Form.Label>
              <Form.Control
                type="content"
                value={notes}
                placeholder="Enter notes here"
                onChange={(e) => setNotes(e.target.value)}
              />
            </Form.Group>
            {loading && <Loading size={50} />}
            <Button type="submit" variant="primary">
              Create Log
            </Button>
            <Button className="mx-2" onClick={resetHandler} variant="danger">
              Reset Feilds
            </Button>
          </Form>
        </Card.Body>

        <Card.Footer className="text-muted">
          Creating on - {new Date().toLocaleDateString()}
        </Card.Footer>
      </Card>
    </MainScreen>
  );
}

export default CreateLog;
