import React from "react";

class CommentsAreaProva extends React.Component {
  componentDidMount = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/1497644917",
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
      } else {
        console.log("error while fetching");
      }
    } catch (e) {
      console.log(" catch errore");
      console.log(e);
    }
  };

  render() {
    return console.log("Ciao sono un Comment di prova");
  }
}

export default CommentsAreaProva;
