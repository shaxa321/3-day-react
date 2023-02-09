import React from "react";
import { Card } from "react-bootstrap";

class SingleBook extends React.Component {
  render() {
    return (
      <Card>
        <Card.Img variant="top" src={this.props.image} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.text}</Card.Text>
          <Card.Text>{this.props.price}</Card.Text>
          <Card.Text>{this.props.category}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
