# react-if-else
> If else logic component for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-if-else
```

## properties
| Name | Type | Required | Default | Description       |
| ---- | ---- | -------- | ------- | ----------------- |
| only | bool | false    | false   | If is only child. |


## usage
1. import css
  ```scss
  @import "~@jswork/react-if-else/dist/style.css";

  // or use sass
  @import "~@jswork/react-if-else/dist/style.scss";

  // customize your styles:
  $react-if-else-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import noop from '@jswork/noop';
  import ReactIfElse from '@jswork/react-if-else';
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

  ```

## documentation
- https://afeiship.github.io/react-if-else/

## todo
```jsx
// will trigger error warning
<IfElse virtual value={item.to}>
  <Link to={item.to}>{item.label}</a>
  <strong>{item.label}</strong>
</IfElse>
```

## license
Code released under [the MIT license](https://github.com/afeiship/react-if-else/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-if-else
[version-url]: https://npmjs.org/package/@jswork/react-if-else

[license-image]: https://img.shields.io/npm/l/@jswork/react-if-else
[license-url]: https://github.com/afeiship/react-if-else/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-if-else
[size-url]: https://github.com/afeiship/react-if-else/blob/master/dist/react-if-else.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-if-else
[download-url]: https://www.npmjs.com/package/@jswork/react-if-else
