import React from "react";
import { Card } from "react-bootstrap";

class SingleBook extends React.Component {
  state = {
    isSelected: false,
  };

  render() {
    return (
      <Card
        onClick={() => {
          console.log(this.props.id);
          this.setState({
            isSelected: true,
          });

          return this.props.setSelectedBookId(this.props.id);
        }}
      >
        <Card.Img variant="top" src={this.props.image} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.text}</Card.Text>
          <Card.Text>{this.props.price}</Card.Text>
          <Card.Text>{this.props.category}</Card.Text>
          <Card.Text>{this.props.id}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
