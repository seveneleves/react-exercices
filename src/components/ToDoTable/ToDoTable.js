import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import "./ToDoTable.css";

const ToDoTable = ({ toDos, checkToDo, deleteToDo }) => {
  return (
    <Table className="mt-4" striped hover>
      <tbody>
        {toDos.map((e) => (
          <tr
            className={`d-flex ${
              e.item.isDone ? "text-decoration-line-through" : ""
            }`}
            key={e.id}
          >
            <td>
              <i
                onClick={() => checkToDo(e.id)}
                className={`bi ${
                  e.item.isDone ? "bi-check-circle-fill" : "bi-circle"
                }`}
              ></i>
            </td>
            <td className="flex-grow-1">
              {toDos.findIndex((t) => t.id === e.id) +
                1 +
                ". " +
                e.item.description}
            </td>
            <td className="d-flex justify-content-end">
              {e.item.isDone ? null : (
                <Link to={`edit/${e.id}`}>
                  <i className="ms-3 bi bi-pencil-fill"></i>
                </Link>
              )}
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
