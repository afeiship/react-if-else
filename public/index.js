import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import noop from '@jswork/noop';
import ReactIfElse from '../src/main';
import './assets/style.scss';

class App extends React.Component {
  state = {
    checked: false,
    value: false
  };
  render() {
    return (
      <ReactDemokit
        className="p-3 app-container"
        url="https://github.com/afeiship/react-if-else">
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
        <p>
          <label>
            <input
              type="checkbox"
              value={this.state.checked}
              onChange={() => {
                this.setState({ checked: !this.state.checked });
              }}
            />
            点前面的切换
          </label>
        </p>
        <ReactIfElse virtual value={this.state.value}>
          <span>When Truthy</span>
          <span>When Falsly</span>
        </ReactIfElse>
        <ReactIfElse only value={this.state.checked}>
          <span>When checked, i will show!</span>
        </ReactIfElse>
      </ReactDemokit>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
