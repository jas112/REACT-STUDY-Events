import WiseSquare from './components/wiseSquare/WiseSquare';
import WiseSquareWithProps from './components/wiseSquareWithProps/WiseSquareWithProps';
import ExperimentalSquare from './components/experimentalSquare/ExperimentalSquare';
import AnnoyingForm from './components/annoyingForm/AnnoyingForm';
import ButtonList from './components/buttonList/ButtonList';
import CopyDemo from './components/copyDemo/CopyDemo';
import NumberList from './components/numberList/NumberList';
import OptimizedNumberList from './components/optimizedNumberList/OptimizedNumberList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React Events Practice</h1>
      {/* <WiseSquare/> */}
      {/* <AnnoyingForm/> */}
      {/* <CopyDemo/> */}
      {/* <WiseSquareWithProps/> */}
      {/* <ExperimentalSquare/> */}
      {/* <ButtonList/> */}
      <NumberList/>
      <OptimizedNumberList/>
    </div>
  );
}

export default App;
