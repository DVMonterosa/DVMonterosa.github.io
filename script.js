let App = React.createClass({
  cos: function (angel) {
    return Math.cos(this.toRadian(angel)).toFixed(2);
  },

  sin: function (angel) {
    return Math.sin(this.toRadian(angel)).toFixed(2);
  },

  toRadian: function (angel) {
    return angel * Math.PI / 360;
  },

  render: function () {
    return (
      <div className="wrapper">
        <div className="logger-1">
          <p>
            BETA: {this.state.beta}
          </p>

          <p>
            cos: {this.cos(this.state.beta)}
          </p>

          <p>
            sin: {this.sin(this.state.beta)}
          </p>

        </div>
        <div className="logger-2">
          <p>
            GAMMA: {this.state.gamma},
          </p>

          <p>
            cos: {this.cos(this.state.gamma)}
          </p>

          <p>
            sin: {this.sin(this.state.gamma)}
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