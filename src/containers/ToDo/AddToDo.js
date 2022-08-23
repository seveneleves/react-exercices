import { useState, Fragment } from "react";
import { Container, Form, Button } from "react-bootstrap";
import Navbar from "../../components/CollapsibleNavbar/CollapsibleNavbar";
import { Link, useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";

const AddToDo = () => {
  let navigate = useNavigate();

  const [newToDo, setNewToDo] = useState("");

  const handleChange = (e) => {
    setNewToDo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(
      nanoid(),
      JSON.stringify({
        description: newToDo,
        timestamp: Date.now(),
        isDone: false,
      })
    );
    navigate("/todo");
  };

  return (
    <Fragment>
      <Navbar />
      <Container className="px-4 mt-3 px-sm-0">
        <h1>Ajouter une tâche</h1>
        <Form className="mt-4">
          <Form.Group className="mb-3" controlId="newToDo.ControlInput1">
            <Form.Control
              value={newToDo}
              type="text"
              placeholder="Acheter des pommes, Sortir le chien..."
              onChange={handleChange}
            />
          </Form.Group>
          <Button
            type="submit"
            size="sm"
            variant="primary"
            className="me-2"
            onClick={handleSubmit}
          >
            Ajouter
          </Button>
          <span>
            ou <Link to="/todo">revenir à la liste des To-Dos</Link>.
          </span>
        </Form>
      </Container>
    </Fragment>
  );
};

export default AddToDo;
