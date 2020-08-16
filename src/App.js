import React, { Component } from 'react';
import './App.css';
import { init, createAnimation } from './components/Animation/Renderer';
import {
  AnimationButtonControl,
  ButtonContainer,
} from './components/Animation/AnimationButtonControl';

class App extends Component {
  constructor() {
    super();
    this.state = {
      animationHandlers: {
        stopAnimation: () => {},
        startAnimation: () => {},
        animationState: null,
      },
    };
  }

  componentDidMount() {
    if (this.renderMount) {
      init(this.renderMount);
      const animationHandlers = createAnimation(1);
      this.setState({ ...this.state, animationHandlers });
    }
  }

  stopAnimating = () => {
    if (this.state.animationHandlers.stopAnimation) {
      this.state.animationHandlers.stopAnimation();
    } else {
      console.log(this.state);
    }
  };
  startAnimating = () => {
    if (this.state.animationHandlers.startAnimation) {
      this.state.animationHandlers.startAnimation();
    } else {
      console.log(this.state);
    }
  };

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <div
            aria-label='animation-holder'
            ref={(ref) => (this.renderMount = ref)}
          ></div>
          <p>
            <code>Work in progress</code>
            <ButtonContainer>
              <AnimationButtonControl onClick={this.stopAnimating}>
                Stop animating
              </AnimationButtonControl>
              <AnimationButtonControl onClick={this.startAnimating}>
                Start animating
              </AnimationButtonControl>
            </ButtonContainer>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
