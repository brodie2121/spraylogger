import React, { useEffect, useState } from "react";
import MainScreen from "../../components/MainScreen";
import axios from "axios";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteLogAction, updateLogAction } from "../../actions/logsActions";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/Error";

function SingleLog({ match, history }) {
  const [date_applied, setDate_applied] = useState("");
  const [location, setLocation] = useState("");
  const [operator, setOperator] = useState("");
  const [holes_treated, setHoles_treated] = useState("");
  const [chemicals, setChemicals] = useState("");
  const [notes, setNotes] = useState("");
  const [date, setDate] = useState("");

  const dispatch = useDispatch();

  const logUpdate = useSelector((state) => state.logUpdate);
  const { loading, error } = logUpdate;

  //DeleteLog is working now
  const logDelete = useSelector((state) => state.logDelete);
  const { loading: loadingDelete, error: errorDelete } = logDelete;

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteLogAction(id));
    }
    history.push("/logs");
  };

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`/logs/${match.params.id}`);

      setDate_applied(data.date_applied);
      setLocation(data.location);
      setOperator(data.operator);
      setHoles_treated(data.holes_treated);
      setChemicals(data.chemicals);
      setNotes(data.notes);
      setDate(data.updatedAt);
    };

    fetching();
  }, [match.params.id, date]);

  const resetHandler = () => {
    setDate_applied("");
    setLocation("");
    setOperator("");
    setHoles_treated("");
    setChemicals("");
    setNotes("");
  };

  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateLogAction(
        match.params.id,
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

  return (
    <MainScreen title="Edit Log">
      <Card>
        <Card.Header>Edit your Log</Card.Header>
        <Card.Body>
          <Form onSubmit={updateHandler}>
            {loadingDelete && <Loading />}
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            {errorDelete && (
              <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
            )}
            <Form.Group controlId="title">
              <Form.Label>Date Applied</Form.Label>
              <Form.Control
                type="title"
                value={date_applied}
                placeholder="Enter the Spraying Date"
                onChange={(e) => setDate_applied(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="content">
              <Form.Label>Location</Form.Label>
              <Form.Control
                value={location}
                placeholder="Enter the Location"
                onChange={(e) => setLocation(e.target.value)}
              />
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
            <Button variant="primary" type="submit">
              Update Log
            </Button>
            <Button
              className="mx-2"
              variant="danger"
              onClick={() => deleteHandler(match.params.id)}
            >
              Delete Log
            </Button>
          </Form>
        </Card.Body>

        <Card.Footer className="text-muted">
          Updated on - {date.substring(0, 10)}
        </Card.Footer>
      </Card>
    </MainScreen>
  );
}

export default SingleLog;
