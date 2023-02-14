import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import BookList from "./BookList";
import { Container, Col, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

class CustomForm extends React.Component {
  state = {
    titleSearch: "",
    nBooksToShow: 10,
  };

  componentDidMount = () => {
    console.log("component Did mount Custom Form");
    /*console.log(this.props.setSelectedBookId("1497644917"));*/
  };

  render() {
    return (
      <>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Search</Form.Label>
            <Form.Control
              type="text"
              placeholder="Scrivi il titolo del tuo libro"
              onInput={(e) => {
                if (e.nativeEvent.inputType === "deleteContentBackward") {
                  console.log("ok");
                  this.setState({
                    titleSearch: this.state.titleSearch.slice(0, -1),
                  });
                } else {
                  this.setState({
                    titleSearch: this.state.titleSearch + e.nativeEvent.data,
                  });
                }
              }}
            />
          </Form.Group>
        </Form>
        <p>{this.state.titleSearch}</p>

        <Container>
          <Row>
            {this.props.bookList
              .filter((book) =>
                book.title
                  .toLocaleLowerCase()
                  .includes(this.state.titleSearch.toLocaleLowerCase())
              )
              .map(
                (book, index, array) => (
                  <>
                    <Col xs={12} sm={6} md={4} lg={3}>
                      <SingleBook
                        image={book.img}
                        text={book.title}
                        price={book.price}
                        category={book.category}
                        id={book.asin}
                        setSelectedBookId={this.props.setSelectedBookId}
                      />
                    </Col>
                  </>
                )
                //perche parentesi tonde e non graffe sopra??
              )}
          </Row>
        </Container>
        <button>CLICCA</button>
      </>
    );
  }
}

export default CustomForm;
