
import React, { Component } from "react";
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);

 this.state = {
      currentIndex: 0
    };
  }

  handleNext = () => {
    const { currentIndex } = this.state;
    const { slides } = this.props;
    if (currentIndex < slides.length - 1) {
      this.setState({ currentIndex: currentIndex + 1 });
    }
  };

  handlePrev = () => {
    const { currentIndex } = this.state;
    if (currentIndex > 0) {
      this.setState({ currentIndex: currentIndex - 1 });
    }
  };

  handleRestart = () => {
    this.setState({ currentIndex: 0 });
  };

  render() {
    const { slides } = this.props;
    const { currentIndex } = this.state;
    const currentSlide = slides[currentIndex];

    return (
      <div>
        <h1 data-testid="title">{currentSlide.title}</h1>
        <p data-testid="text">{currentSlide.text}</p>
        <button
          data-testid="button-prev"
          onClick={this.handlePrev}
          disabled={currentIndex === 0}
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          onClick={this.handleNext}
          disabled={currentIndex === slides.length - 1}
        >
          Next
        </button>
        <button
          data-testid="button-restart"
          onClick={this.handleRestart}
          disabled={currentIndex === 0}
        >
          Restart
        </button>
      </div>
    );
  }
}

export default App;

