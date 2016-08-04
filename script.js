let App = React.createClass({
  render: function () {
    return (
      <div className="wrapper">
        <div className="logger-1">
          <p>
            BETA: {this.state.beta}
          </p>

          <p>
            cos: {Math.cos(this.state.beta).toFixed(2)}
          </p>

          <p>
            sin: {Math.sin(this.state.beta).toFixed(2)}
          </p>

        </div>
        <div className="logger-2">
          <p>
            GAMMA: {this.state.gamma},
          </p>

          <p>
            cos: {Math.cos(this.state.gamma).toFixed(2)}
          </p>

          <p>
            sin: {Math.sin(this.state.gamma).toFixed(2)}
          </p>
        </div>
        <div className="nimble">
          <div className="img_wrapper">
            <img src="white-eye.png" alt="Logo" ref="interactive"/>
          </div>
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

/*          <p>
 ALPHA: {this.state.alpha},
 cos: {Math.cos(this.state.alpha).toFixed(3)},
 sin: {Math.sin(this.state.alpha).toFixed(3)}
 </p>
 <p>
 BETA: {this.state.beta},
 cos: {Math.cos(this.state.beta).toFixed(3)},
 sin: {Math.sin(this.state.beta).toFixed(3)}
 </p>*/