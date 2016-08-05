const BETA_RANGE = 180;
const GAMMA_RANGE = 90;
const NIMBLE_RANGE = 50;

let App = React.createClass({
  frame: null,

  cos: function (angel) {
    return Math.cos(this.toRadian(angel)).toFixed(2);
  },

  sin: function (angel) {
    return Math.sin(this.toRadian(angel)).toFixed(2);
  },

  toRadian: function (angel) {
    return angel * Math.PI / 180;
  },

  render: function () {
    return (
      <div className="wrapper">
        <div className="logger-1">
          <p>Acceleration</p>
          <p>
            x: {this.state.x}
          </p>

          <p>
            y: {this.state.y}
          </p>

          <p>
            z: {this.state.z}
          </p>

        </div>

        <div className="logger-2">
          <p>AccelerationIncludingGravity</p>

          <p>
            x: {this.state.x_g}
          </p>

          <p>
            y: {this.state.y_g}
          </p>

          <p>
            z: {this.state.z_g}
          </p>

        </div>
        <div className="nimble"
             style={{transform: `translate3d(${-this.state.shiftX}px, ${-this.state.shiftY}px, 0)`}}>
          <div className="img_wrapper">
            <img src="white-eye.png" alt="Logo" ref="interactive"/>
          </div>
        </div>
      </div>
    )
  },
/*

 <p>
 ALPHA: {this.state.alpha}
 </p>

 <p>
 cos: {this.cos(this.state.alpha)}
 </p>

 <p>
 sin: {this.sin(this.state.alpha)}
 </p>

 <br></br>

 <p>
 BETA: {this.state.beta}
 </p>

 <p>
 cos: {this.cos(this.state.beta)}
 </p>

 <p>
 sin: {this.sin(this.state.beta)}
 </p>

<p>
  GAMMA: {this.state.gamma}
</p>

<p>
cos: {this.cos(this.state.gamma)}
</p>

  <p>
    sin: {this.sin(this.state.gamma)}
  </p>*/
  getInitialState: function () {
    return {
      alpha: 0,
      beta: 0,
      gamma: 0,
      shiftX: 0,
      shiftY: 0,
      x_g: 0,
      y_g: 0,
      z_g: 0,
      x: 0,
      y: 0,
      z: 0
    }
  },
  componentDidMount: function () {
    window.addEventListener('deviceorientation', this.onDeviseOrientation);
    window.addEventListener('devicemotion', this.onDeviceMotion);
  },
  onDeviceMotion: function ({acceleration, accelerationIncludingGravity}) {
    this.setState({
      x_g: accelerationIncludingGravity.x,
      y_g: accelerationIncludingGravity.y,
      z_g: accelerationIncludingGravity.z,
      x: acceleration.x,
      y: acceleration.y,
      z: acceleration.z
    })
  },
  onDeviseOrientation: function ({alpha,beta,gamma}) {
    this.setState({
      shiftX: this.sin(gamma * 2) * NIMBLE_RANGE * this.cos(beta),
      shiftY: this.sin(beta) * NIMBLE_RANGE
    });

    this.setState({
      alpha: Math.round(alpha),
      beta: Math.round(beta),
      gamma: Math.round(2 * gamma)
    });
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);