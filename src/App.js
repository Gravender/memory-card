import React, { Component } from "react";
import Footer from "./components/footer";
import Card from "./components/Card";
import uniqid from "uniqid";
import "./css/style.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      bestScore: 0,
      card: {
        imgSrc: "",
        title: "",
        id: uniqid(),
      },
      cards: [],
    };
  }
  increaseScore = () => {
    this.setState({
      score: this.state.score + 1,
      bestScore:
        this.state.score >= this.state.bestScore
          ? this.state.score + 1
          : this.state.bestScore,
    });
  };
  decreaseScore = () => {
    this.setState({
      score: this.state.score - 1,
    });
  };
  createData(data) {
    localStorage.setItem("score", JSON.stringify(data));
  }
  restore() {
    if (!localStorage.score) {
      this.createData(this.state);
    } else {
      let parsedScore = JSON.parse(localStorage.getItem("score"));

      this.setState({
        score: parsedScore.score,
        bestScore: parsedScore.bestScore,
      });
    }
  }
  componentDidMount() {
    this.restore();
  }
  componentDidUpdate() {
    this.createData(this.state);
  }
  render() {
    const { score, bestScore } = this.state;
    return (
      <div className="App">
        <p>Score: {score}</p>
        <p>Best Score: {bestScore}</p>
        <button onClick={this.increaseScore}>Increase Score</button>
        <button onClick={this.decreaseScore}>Decrease Score</button>
        <Card
          imgSrc={"https://picsum.photos/600/300?random=1"}
          title={"Village"}
        />
        <Card
          imgSrc={"https://picsum.photos/200/300?random=1"}
          title={"removed"}
        />
        <Card
          imgSrc={"https://picsum.photos/200/300?random=2"}
          title={"moreover"}
        />
        <Card imgSrc={"https://picsum.photos/100/50"} title={"waffle"} />
        <Card
          imgSrc={"https://picsum.photos/200/300?random=3"}
          title={"testttttting"}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
