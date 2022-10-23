import React, { Component } from "react";
import Footer from "./components/footer";
import MemoryCards from "./components/MemoryCards";
import uniqid from "uniqid";
import tree from "./images/tree.jpg";
import dog from "./images/dog.jpg";
import forest from "./images/forest.jpg";
import honey from "./images/honey.jpg";
import people from "./images/people.jpg";
import yogurt from "./images/yogurt.jpg";
import trainTrack from "./images/trainTrack.jpg";
import flower from "./images/flower.jpg";
import "./css/style.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
    };
  }
  componentDidMount() {
    this.setState({
      cards: [
        {
          imgSrc: dog,
          title: "dog",
          id: uniqid(),
        },
        {
          imgSrc: honey,
          title: "honey",
          id: uniqid(),
        },
        {
          imgSrc: forest,
          title: "forest",
          id: uniqid(),
        },
        {
          imgSrc: people,
          title: "people",
          id: uniqid(),
        },
        {
          imgSrc: yogurt,
          title: "yogurt",
          id: uniqid(),
        },
        {
          imgSrc: tree,
          title: "tree",
          id: uniqid(),
        },
        {
          imgSrc: flower,
          title: "flower",
          id: uniqid(),
        },
        {
          imgSrc: trainTrack,
          title: "trainTrack",
          id: uniqid(),
        },
      ],
    });
  }
  render() {
    const { cards } = this.state;
    return (
      <div className="App">
        <MemoryCards cards={cards} />
        <Footer />
      </div>
    );
  }
}

export default App;
