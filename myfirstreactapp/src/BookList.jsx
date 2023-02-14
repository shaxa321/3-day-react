import SingleBook from "./SingleBook";
import fantasy from "../src/books/fantasy.json";
import history from "../src/books/history.json";
import horror from "../src/books/horror.json";
import scifi from "../src/books/scifi.json";
import romance from "../src/books/horror.json";
import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import CustomForm from "./CustomForm";

const alltheBooksArray = [...fantasy];

let currentBooks = [...alltheBooksArray];
let booksToShow = [...currentBooks];

class BookList extends React.Component {
  render() {
    return (
      <>
        <h1>{this.props.saerch}</h1>
        <Container>
          <Row>
            {alltheBooksArray
              .filter((book) =>
                book.title
                  .toLocaleLowerCase()
                  .includes(this.state.titleSearch.toLocaleLowerCase())
              )
              .map((book) => (
                <>
                  <Col xs={12} sm={6} md={4} lg={3}>
                    <SingleBook
                      image={book.img}
                      text={book.title}
                      price={book.price}
                      category={book.category}
                      id={book.asin}
                    />
                  </Col>
                </>
                //perche parentesi tonde e non graffe sopra??
              ))}
          </Row>
        </Container>
        {/**/}
      </>
    );
  }
}

export default BookList;
