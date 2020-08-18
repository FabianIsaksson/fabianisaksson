import React, { Component } from 'react';
import './App.css';
import { init, createAnimation } from './components/Animation/Renderer';
import {
  AnimationButtonControl,
  ButtonContainer,
  ProTip,
} from './components/Animation/AnimationButtonControl';

class App extends Component {
  constructor() {
    super();
    this.state = {
      idleCount: 0,
      clicked: false,
      timeRemaining: 10,
      showScreenSaver: false,
      screenSaver: false,
      animationHandlers: {
        stopAnimation: () => {},
        startAnimation: () => {},
        animationState: null,
      },
    };
  }

  componentDidMount() {
    this.countdown();
  }

  componentDidUpdate() {
    if (this.renderMount && !this.state.screenSaver) {
      this.renderScreenSaver();
    }
  }

  restart = () => {
    this.stopAnimating();
    this.setState({
      ...this.state,
      timeRemaining: 10,
      showScreenSaver: false,
      screenSaver: false,
    });
    this.countdown();
  };

  countdown = () =>
    setTimeout(() => {
      const timeRemaining = this.state.timeRemaining - 1;
      this.setState({
        ...this.state,
        timeRemaining,
      });
      if (timeRemaining > 0) {
        this.countdown();
      } else {
        this.setState({
          ...this.state,
          showScreenSaver: true,
          idleCount: this.state.idleCount + 1,
        });
      }
    }, 800 - this.state.idleCount * 100);

  renderScreenSaver = () => {
    init(this.renderMount);
    const animationHandlers = createAnimation(1);
    this.setState({ ...this.state, animationHandlers, screenSaver: true });
  };

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
      <div>
        <div className='App'>
          <header className='App-header'>
            {this.state.showScreenSaver ? (
              <>
                <div
                  aria-label='animation-holder'
                  ref={(ref) => (this.renderMount = ref)}
                ></div>
                <p>
                  <code>
                    {`Successfully went idle ${
                      this.state.idleCount > 1
                        ? `${this.state.idleCount} times `
                        : ''
                    } `}
                    {this.state.idleCount < 3 && (
                      <span role='img' aria-label='stupid emoji'>
                        🎉
                      </span>
                    )}
                  </code>
                  {this.state.idleCount === 3 && (
                    <ProTip>Is it really that fun?</ProTip>
                  )}
                  {this.state.idleCount === 4 && <ProTip>Well ok...</ProTip>}
                  {this.state.idleCount === 6 && (
                    <ProTip>Please do something else now</ProTip>
                  )}
                  {this.state.idleCount === 7 && (
                    <ProTip>
                      Ok that's it no more tries, i'm disabling the button!
                    </ProTip>
                  )}
                  {this.state.idleCount === 8 && (
                    <ProTip>
                      {this.state.clicked === false ? (
                        <>
                          I don't have the heart to do it{' '}
                          <span role='img' aria-label='stupid emoji'>
                            🥺
                          </span>
                        </>
                      ) : (
                        'Just kidding'
                      )}
                    </ProTip>
                  )}
                </p>
                {this.state.idleCount === 1 && (
                  <div
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: '13px',
                    }}
                  >
                    (it's a work in progress)
                  </div>
                )}
                <ButtonContainer>
                  <AnimationButtonControl
                    onTransitionEnd={
                      this.state.idleCount === 8 ? null : this.restart
                    }
                    onClick={
                      this.state.idleCount === 8 && this.state.clicked === false
                        ? () => this.setState({ ...this.state, clicked: true })
                        : false
                    }
                  >
                    {this.state.clicked === false
                      ? 'Do it again!'
                      : 'Go make your bed or something'}
                  </AnimationButtonControl>
                </ButtonContainer>
                <ButtonContainer>
                  <AnimationButtonControl onClick={this.stopAnimating}>
                    Stop animating
                  </AnimationButtonControl>
                  <AnimationButtonControl onClick={this.startAnimating}>
                    Start animating
                  </AnimationButtonControl>
                </ButtonContainer>
              </>
            ) : (
              <code>Going idle in {this.state.timeRemaining}</code>
            )}
          </header>
        </div>
      </div>
    );
  }
}

export default App;
