import React from "react";

class CommentsAreaBooks extends React.Component {
  state = {
    commentsEachBook: null,
  };

  componentDidMount = async () => {
    console.log("I am a didMount");
  };

  async componentDidUpdate(prevProp, prevState) {
    console.log(
      "componentDidUpdate",
      "prevState",
      prevState.commentsEachBook,
      "currentState",
      this.state.commentsEachBook
    );
    if (prevProp.selectedBookId !== this.props.selectedBookId) {
      console.log("prevState", prevState.commentsEachBook);
      console.log("nextState", this.state.commentsEachBook);
      this.fetchFunction();
    } else {
      console.log(
        "Sono ugali",
        prevState.commentsEachBook,
        this.state.commentsEachBook
      );
    }
  }
  fetchFunction = async () => {
    console.log("Fetch ", this.props.selectedBookId);
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.selectedBookId,

        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2VhNWFjODVmZTk4NDAwMTM0ZDNkYTgiLCJpYXQiOjE2NzYzNjg1MzQsImV4cCI6MTY3NzU3ODEzNH0.NOHT-D-xCaf7vzJd4DlGg_y4T9cQh9KpvKEfwvlEm8A",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log("data", data);
        this.setState({
          commentsEachBook: data.map((object) => object.comment),
        });
        console.log(" Fetch response ok");
        console.log(" fetch DATA", data);
        console.log(" fetch STATE", this.state.commentsEachBook);
      } else {
        console.log("error while fetching");
      }
    } catch (e) {
      console.log(" catch errore");
      console.log(e);
    }
  };

  render() {
    return (
      <>
        {console.log("i Am a render")}
        <p>Ok</p>

        {console.log(
          "render: My state:",
          this.state.commentsEachBook,
          "  MyState is array?",
          Array.isArray(this.state.commentsEachBook),
          "my Prop",
          this.props.selectedBookId
        )}

        <ul>
          {this.state.commentsEachBook
            ? this.state.commentsEachBook.map((comment) => <li>{comment}</li>)
            : "NON CI SONO COMMENTI DA VISUALIZZARE"}
        </ul>
      </>
    );
  }
}
export default CommentsAreaBooks;
