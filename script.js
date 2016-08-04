let App = React.createClass({
  render: function () {
    return (
      <div className="wrapper">
        <div className="logger">
          <p>
            ALPHA: {this.state.alpha},
            cos: {Math.cos(this.state.alpha).toString(3)},
            sin: {Math.sin(this.state.alpha).toString(3)}
          </p>
          <p>
            BETA: {this.state.beta},
            cos: {Math.cos(this.state.beta).toString(3)},
            sin: {Math.sin(this.state.beta).toString(3)}
          </p>
          <p>
            GAMMA: {this.state.gamma},
            cos: {Math.cos(this.state.gamma).toString(3)},
            sin: {Math.sin(this.state.gamma).toString(3)}
          </p>
        </div>
        <div className="nimble">
          <img src="white-eye.png" alt="Logo" ref="interactive"/>
        </div>
      </div>
    )
  },
  getInitialState: function () {
    return {
      alpha: 0,
      beta: 0,
      gamma: 0
    }
  },
  componentDidMount: function () {
    window.addEventListener('deviceorientation', this.onDeviseOrientation);
  },
  onDeviseOrientation: function (event) {
    this.setState({
      alpha: Math.round(event.alpha),
      beta: Math.round(event.beta),
      gamma: Math.round(event.gamma)
    });
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);