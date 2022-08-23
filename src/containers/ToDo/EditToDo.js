import { useEffect, useState, Fragment } from "react";
import Navbar from "../../components/CollapsibleNavbar/CollapsibleNavbar";
import { Container, Form, Button } from "react-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";

const EditToDo = () => {
  let { todoId } = useParams();
  let navigate = useNavigate();

  const [originalToDo, setOriginalTodo] = useState("");
  const [editedToDoDescription, setEditedToDoDescription] = useState("");

  useEffect(() => {
    const toDo = JSON.parse(localStorage.getItem(todoId));
    setOriginalTodo(toDo);
    setEditedToDoDescription(toDo.description);
  }, [todoId]);

  const handleChange = (e) => {
    setEditedToDoDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const editedToDo = {
      description: editedToDoDescription,
      timestamp: originalToDo.timestamp,
    };
    localStorage.setItem(todoId, JSON.stringify(editedToDo));
    navigate("/todo");
  };

  return (
    <Fragment>
      <Navbar />
      <Container className="px-4 mt-3 px-sm-0">
        <h1>Modifier la tâche</h1>
        <Form className="mt-4">
          <Form.Group className="mb-3" controlId="editToDo.ControlInput1">
            <Form.Label>
              Modifier la To-Do ci-dessous et cliquer sur "Sauvegarder" :
            </Form.Label>
            <Form.Control
              value={editedToDoDescription}
              type="text"
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
            Sauvegarder
          </Button>
          <span>
            ou <Link to="/todo">revenir à la liste des To-Dos</Link>.
          </span>
        </Form>
      </Container>
    </Fragment>
  );
};

export default EditToDo;
