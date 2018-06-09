import './dev.scss';
import ReactIfElse from './main';

/*===example start===*/

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
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
