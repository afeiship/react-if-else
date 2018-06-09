# react-if-else
> If else logic component for react

## properties:
```javascript

  static propTypes = {
    value: PropTypes.bool
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

  render(){
    return (
      <div className="hello-react-if-else">
        <ReactIfElse ref='rc' />
      </div>
    );
  }
}

```
