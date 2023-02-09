import SingleBook from "./SingleBook";
import fantasy from "../src/books/fantasy.json";
import history from "../src/books/history.json";
import horror from "../src/books/horror.json";
import scifi from "../src/books/scifi.json";
import romance from "../src/books/horror.json";
import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const alltheBooksArray = [
  ...fantasy,
  ...history,
  ...horror,
  ...scifi,
  ...romance,
];

const alltheBooksArray1 = alltheBooksArray.map((element) => {
  element.nationality = "english";
});

for (let i = 0; i < alltheBooksArray.length; i++) {}

class AllTheBooks extends React.Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            {alltheBooksArray.map((book) => (
              <>
                <Col xs={12} sm={6} md={4} lg={3}>
                  <SingleBook
                    image={book.img}
                    text={book.title}
                    price={book.price}
                    category={book.category}
                  />
                </Col>
              </> //perche parentesi tonde e non graffe sopra??
            ))}
          </Row>
        </Container>
        {/**/}
      </>
    );
  }
}

export default AllTheBooks;
