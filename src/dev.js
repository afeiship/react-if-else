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

  render(){
    return (
      <div className="hello-react-if-else">
        <ReactIfElse ref='rc' />
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
