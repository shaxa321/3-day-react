import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import logo from "./logo.svg";
import CustomNav from "./CustomNav";
import MyFooter from "./MyFooter";
import Welcome from "./Welcome";
import CustomHeader from "./CustomHeader";
import SingleBook from "./SingleBook";
import AllTheBooks from "./AllTheBooks";
import CustomForm from "./CustomForm";
import BookList from "./BookList";
import fantasy from "../src/books/fantasy.json";
import history from "../src/books/history.json";
import horror from "../src/books/horror.json";
import scifi from "../src/books/scifi.json";
import romance from "../src/books/horror.json";
import FormMovies from "./FormMovies";
import { Col, Row, Container } from "react-bootstrap";
import CommentsAreaBooks from "./CommentsAreaBooks";
import { Component } from "react";
import CommentsAreaProva from "./CommentsAreaProva";

const AllTheBooksArray = [
  ...fantasy,
  /*...history,
  ...horror,
  ...scifi,
  ...romance,*/
];

class App extends Component {
  state = {
    selectedBookId: null,
  };

  setSelectedBookId = (bookId) =>
    this.setState({
      selectedBookId: bookId,
    });

  render() {
    return (
      <>
        {console.log("APP js STATE:", this.state.selectedBookId)}
        <CustomHeader bgColor="danger" />
        <Welcome bgButtonColor="secondary" />
        <FormMovies />
        <Container>
          <Row>
            <Col md={6}>
              <CustomForm
                bookList={AllTheBooksArray}
                setSelectedBookId={this.setSelectedBookId}
              />
            </Col>
            <Col md={6}>
              {<CommentsAreaBooks selectedBookId={this.state.selectedBookId} />}
            </Col>
          </Row>
        </Container>

        {/*<p>{CustomForm.state.Titlesearch}</p>*/}
      </>
    );
  }
}

export default App;
