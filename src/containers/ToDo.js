import { Fragment } from "react";
import CollapsibleNavbar from "../components/CollapsibleNavbar/CollapsibleNavbar";
import Container from "react-bootstrap/Container";

const ToDo = () => {
  return (
    <Fragment>
      <CollapsibleNavbar />
      <Container className="px-4 mt-3 px-sm-0">
        <h1 className="mb-3">To-Do</h1>
      </Container>
    </Fragment>
  );
};

export default ToDo;
