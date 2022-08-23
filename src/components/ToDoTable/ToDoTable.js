import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import "./ToDoTable.css";

const ToDoTable = ({ toDos, deleteToDo }) => {
  return (
    <Table className="mt-4" striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>A faire</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {toDos.map((e) => (
          <tr key={e.id}>
            <td>{toDos.findIndex((t) => t.id === e.id) + 1}</td>
            <td>{e.item.description}</td>
            <td>
              <Link to={`edit/${e.id}`}>
                <i className="bi bi-pencil-fill"></i>
              </Link>
              <i
                onClick={() => deleteToDo(e.id)}
                className="ms-3 bi bi-trash3-fill"
              ></i>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ToDoTable;
