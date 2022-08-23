import { Fragment, useEffect, useState } from "react";
import Navbar from "../../components/CollapsibleNavbar/CollapsibleNavbar";
import ToDoTable from "../../components/ToDoTable/ToDoTable";
import { Container, Spinner, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ToDos = () => {
  const [toDos, setToDos] = useState(null);

  useEffect(() => {
    let toDosIds = Object.keys(localStorage);
    let totalOfToDos = [];
    for (let i = 0; i < toDosIds.length; i++) {
      totalOfToDos.push({
        id: toDosIds[i],
        item: JSON.parse(localStorage.getItem(toDosIds[i])),
      });
    }
    setToDos(totalOfToDos.sort((a, b) => a.item.timestamp - b.item.timestamp));
  }, []);

  const checkToDo = (id) => {
    const updatedToDoList = toDos.map((el) => {
      if (el.id === id) {
        localStorage.setItem(
          el.id,
          JSON.stringify({ ...el.item, isDone: !el.item.isDone })
        );
        return { ...el, item: { ...el.item, isDone: !el.item.isDone } };
      }
      return el;
    });
    setToDos(updatedToDoList);
  };

  const deleteToDo = (id) => {
    setToDos(toDos.filter((el) => el.id !== id));
    localStorage.removeItem(id);
  };

  return (
    <Fragment>
      <Navbar />
      <Container className="px-4 mt-3 px-sm-0">
        <h1>List de To-Dos</h1>
        <Link to="/todo/add">
          <Button size="sm" variant="primary">
            Ajouter une tâche
          </Button>
        </Link>
        {!toDos ? (
          <Spinner className="mt-4" animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : toDos.length > 0 ? (
          <ToDoTable
            toDos={toDos}
            checkToDo={checkToDo}
            deleteToDo={deleteToDo}
          />
        ) : (
          <p className="mt-4">Rien à afficher pour le moment.</p>
        )}
      </Container>
    </Fragment>
  );
};

export default ToDos;
