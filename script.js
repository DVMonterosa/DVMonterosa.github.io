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

        </div>

        <div className="logger-2">
          <p>
            GAMMA: {this.state.gamma}
          </p>

          <p>
            cos: {this.cos(this.state.gamma)}
          </p>

          <p>
            sin: {this.sin(this.state.gamma)}
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

  getInitialState: function () {
    return {
      alpha: 0,
      beta: 0,
      gamma: 0,
      shiftX: 0,
      shiftY: 0
    }
  },
  componentDidMount: function () {
    window.addEventListener('deviceorientation', this.onDeviseOrientation);
  },
  onDeviseOrientation: function ({alpha,beta,gamma}) {
    this.setState({
      shiftX: this.cos(gamma * 2) * NIMBLE_RANGE * this.cos(beta),
      shiftY: this.sin(beta) * NIMBLE_RANGE
    });
    /*
     this.frame = requestAnimationFrame(()=> {

     let shiftBeta;
     let shiftGamma;

     if ((Math.abs(beta) < 70)) {
     shiftGamma = this.getDegreeSin(gamma * 2) * NIMBLE_RANGE;
     } else if (Math.abs(beta) > 110) {
     shiftGamma = -this.getDegreeSin(gamma * 2) * NIMBLE_RANGE;
     } else {
     return;
     }

     shiftBeta = this.getDegreeSin(beta) * NIMBLE_RANGE;

     if (window.orientation) {
     this.setState({
     shiftX: shiftBeta,
     shiftY: shiftGamma
     });
     } else {
     this.setState({
     shiftY: shiftBeta,
     shiftX: shiftGamma
     });
     }
     });
     */

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