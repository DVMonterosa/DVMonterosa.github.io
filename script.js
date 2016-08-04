let App = React.createClass({
  render: function () {
    return (
      <div className="wrapper">
        <div className="logger">
          <p>alpha: {this.state.alpha}</p>

          <p>beta: {this.state.beta}</p>

          <p>gamma: {this.state.gamma}</p></div>
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
      alpha: event.alpha,
      beta: event.beta,
      gamma: event.gamma
    });
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);