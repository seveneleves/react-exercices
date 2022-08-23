import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import ToDoList from "./containers/ToDo/ToDoList";
import AddToDo from "./containers/ToDo/AddToDo";
import EditToDo from "./containers/ToDo/EditToDo";
import LogIn from "./containers/LogIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="todo">
          <Route index element={<ToDoList />} />
          <Route path="add" element={<AddToDo />} />
          <Route path="edit/:todoId" element={<EditToDo />} />
        </Route>
        <Route path="/connexion" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
