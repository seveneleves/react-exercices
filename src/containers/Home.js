import { Fragment } from "react";
import CollapsibleNavbar from "../components/CollapsibleNavbar/CollapsibleNavbar";
import Container from "react-bootstrap/Container";

const Home = () => {
  return (
    <Fragment>
      <CollapsibleNavbar />
      <Container className="px-4 my-3 px-sm-0">
        <h1 className="mb-3">Accueil</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Suspendisse sed nisi lacus sed viverra tellus in hac habitasse.
          Viverra suspendisse potenti nullam ac tortor. Convallis tellus id
          interdum velit. Metus dictum at tempor commodo. Mauris a diam maecenas
          sed enim ut sem. Et netus et malesuada fames ac turpis egestas. At
          consectetur lorem donec massa. Aliquam eleifend mi in nulla posuere
          sollicitudin aliquam ultrices sagittis. Risus quis varius quam quisque
          id diam vel quam elementum. Aenean pharetra magna ac placerat
          vestibulum lectus mauris. Neque viverra justo nec ultrices dui sapien
          eget mi. Amet facilisis magna etiam tempor. Cras adipiscing enim eu
          turpis egestas pretium aenean pharetra magna. Mattis pellentesque id
          nibh tortor id. Nibh ipsum consequat nisl vel pretium lectus.
        </p>
        <p>
          Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
          tristique senectus. Elit ullamcorper dignissim cras tincidunt. Gravida
          quis blandit turpis cursus in hac. Arcu felis bibendum ut tristique et
          egestas quis. Tellus id interdum velit laoreet id donec ultrices. Elit
          duis tristique sollicitudin nibh sit amet commodo nulla. Donec
          adipiscing tristique risus nec feugiat in fermentum posuere.
          Adipiscing vitae proin sagittis nisl rhoncus. Posuere ac ut consequat
          semper viverra nam libero justo. Leo vel orci porta non pulvinar neque
          laoreet suspendisse. Donec ultrices tincidunt arcu non sodales. Sed
          enim ut sem viverra aliquet eget sit amet.
        </p>
      </Container>
    </Fragment>
  );
};

export default Home;
