import { Fragment } from "react";
import CollapsibleNavbar from "../components/CollapsibleNavbar";
import Container from "react-bootstrap/Container";
import UserForm from "../components/UserForm";

const LogIn = () => {
  return (
    <Fragment>
      <CollapsibleNavbar />
      <Container className="px-4 mt-3 px-sm-0">
        <h1>Connexion</h1>
        <UserForm />
      </Container>
    </Fragment>
  );
};

export default LogIn;
