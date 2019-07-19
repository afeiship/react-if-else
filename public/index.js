import ReactIfElse from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import noop from 'noop';
import './assets/style.scss';

class App extends React.Component {
  state = {
    value: false
  };

  render() {
    return (
      <div className="app-container">
        <h1>Status: {String(this.state.value)}</h1>
        <p>
          <span
            onClick={() => {
              this.setState({ value: !this.state.value });
            }}>
            <input type="checkbox" onChange={noop} checked={this.state.value} />
            <strong>改变状态</strong>
          </span>
        </p>
        <ReactIfElse virtual value={this.state.value}>
          <span>When Truthy</span>
          <span>When Falsly</span>
        </ReactIfElse>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
