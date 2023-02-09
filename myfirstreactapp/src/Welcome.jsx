import { Button } from "react-bootstrap";

const Welcome = function (props) {
  return (
    <>
      <h1>Benvenuto nel nostro Catalogo Libri</h1>
      <h6>by Amonov Shahruz</h6>
      <p></p>
      <p>
        <Button variant={props.bgButtonColor}> Clicca Qui</Button>
      </p>
    </>
  );
};

export default Welcome;
