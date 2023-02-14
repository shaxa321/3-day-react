import React from "react";

class FormMovies extends React.Component {
  state = {};

  handleSubmit = async (e) => {
    try {
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=fb66903c&s=harry%20potter"
      );
      console.log(response);
    } catch (error) {}
  };

  prova = function () {
    return fetch("http://example.com/movies.json")
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  render() {
    return <></>;
  }
}
export default FormMovies;
