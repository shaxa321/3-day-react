import { Container, Row, Col } from "react-bootstrap";

const MyFooter = function () {
  return (
    <Container>
      <Row>
        <Col xs={12} md={3}>
          <a href="https://Google.com">About Us</a>
          <a href="https://Google.com">Who we Are</a>
          <a href="https://Google.com">Work with us</a>
        </Col>
        <Col xs={12} md={6}>
          <a href="https://Google.com">Full-Stack Developer Course</a>
          <a href="https://Google.com">Front-End Developer Course</a>
        </Col>
        <Col xs={12} md={3}>
          <p>Copyright 2023</p>
        </Col>
      </Row>
    </Container>
  );
};

export default MyFooter;
