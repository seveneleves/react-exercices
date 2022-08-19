import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const setInputValue = (t) => {
    switch (t.id) {
      case "formBasicName":
        setName(t.value);
        break;
      case "formBasicEmail":
        setEmail(t.value);
        break;
      case "formBasicPassword":
        setPassword(t.value);
        break;
      case "formResetBtn":
        console.log("test");
        break;
      default:
        break;
    }
  };

  const resetInputValue = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nom</Form.Label>
        <Form.Control
          value={name}
          onChange={(e) => setInputValue(e.target)}
          type="text"
          placeholder="Nom"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Adresse Email</Form.Label>
        <Form.Control
          value={email}
          onChange={(e) => setInputValue(e.target)}
          type="email"
          placeholder="Email"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Mot de passe</Form.Label>
        <Form.Control
          value={password}
          onChange={(e) => setInputValue(e.target)}
          type="password"
          placeholder="Mot de passe"
        />
      </Form.Group>
      <Button
        onClick={() =>
          alert(
            "Nom : " +
              name +
              "\nEmail : " +
              email +
              "\nMot de passe : " +
              password
          )
        }
        variant="primary"
        type="button"
      >
        Se connecter
      </Button>
      <Button
        onClick={() => resetInputValue()}
        className="ms-2"
        variant="danger"
        type="reset"
      >
        Effacer
      </Button>
    </Form>
  );
};

export default UserForm;
