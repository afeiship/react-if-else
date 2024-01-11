import TheComponent from '@jswork/react-if-else';
import '@jswork/react-if-else/src/style.scss';
import './App.css';


function App() {
  return (
    <>
      <h1>react-if-else</h1>
      <TheComponent
        onClick={() => {
          console.log('click me');
        }}>
        Click me
      </TheComponent>
    </>
  );
}

export default App;
