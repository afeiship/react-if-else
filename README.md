# react-if-else
> If else logic component for react

## properties:
```javascript

  static propTypes = {
  };

  static defaultProps = {
  };
  
```

## install && import:
```bash
npm install --save afeiship/react-if-else --registry=https://registry.npm.taobao.org
```

```js
import ReactIfElse from 'react-if-else';
```

```scss
// customize your styles:
$react-if-else-options:(
);

@import 'node_modules/react-if-else/dist/style.scss';
```


## usage:
```jsx

// install: npm install afeiship/react-if-else --save
// import : import ReactIfElse from 'react-if-else'

class App extends React.Component{
  state = {

  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  _onChange = e =>{
    const { checked } = e.target;
    this.setState({ value: checked })
  };

  render(){
    return (
      <div className="hello-react-if-else">
        <label>
          <input value={this.state.value} type="checkbox" onChange={this._onChange} />
          <span>切换if-else</span>
        </label>
        <ReactIfElse value={this.state.value}>
          <button>YES - 选中</button>
          <button>NO - 非选中</button>
        </ReactIfElse>
      </div>
    );
  }
}

```
