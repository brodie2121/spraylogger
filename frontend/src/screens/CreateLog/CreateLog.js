import React, { useEffect, useState } from "react";
import MainScreen from "../../components/MainScreen";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createLogAction } from "../../actions/logsActions";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/Error";

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
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            <Form.Group controlId="title">
              <Form.Label>Date Applied</Form.Label>
              <Form.Control
                type="title"
                value={date_applied}
                placeholder="Enter the Spraying Date"
                onChange={(e) => setDate_applied(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicSelect">
              <Form.Label>Select Location Type</Form.Label>
              <Form.Control
                as="select"
                value={location}
                onChange={(e) => {
                  console.log("e.target.value", e.target.value);
                  setLocation(e.target.value);
                }}
              >
                <option value="Fairways">Fairways</option>
                <option value="Greens">Greens</option>
                <option value="Native">Native</option>
                <option value="Rough">Rough</option>
                <option value="Tees">Tees</option>
                <option value="Other">Other</option>
              </Form.Control>
            </Form.Group>

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
