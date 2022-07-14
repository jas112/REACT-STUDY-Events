import WiseSquare from './components/wiseSquare/WiseSquare';
import WiseSquareWithProps from './components/wiseSquareWithProps/WiseSquareWithProps';
import AnnoyingForm from './components/annoyingForm/AnnoyingForm';
import CopyDemo from './components/copyDemo/CopyDemo';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React Events Practice</h1>
      <WiseSquare/>
      <AnnoyingForm/>
      <CopyDemo/>
      <WiseSquareWithProps/>
    </div>
  );
}

export default App;
