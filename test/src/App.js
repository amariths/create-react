import './App.css';

import Functional from './component/Functional';
import ClassComponent from './component/classcomponent';
import FunctionalProps from './component/FunctionalProps';
import FunctionalProps2 from './component/FunctionalProps2';
import FunctionalPropsChildren from './component/FunctionalPropsChildren';
import ClassComponentProps from './component/CLassComponentProps';
import StateCounterClass from './component/StateCounterClass';
import CounterFunction from './component/StateCounterFunction';
import FunctionEvent from './component/FunctionEvent';


function App() {
  return (
    <div className="App">
        <Functional/>
        <ClassComponent/>
        <FunctionalProps name="ja, nej"/>
        <FunctionalProps2 first="richard" last="carlsson" />
        <FunctionalPropsChildren first="richard" last="carlsson" children="jag är barn"/>
        <ClassComponentProps text="är props"/>
        <StateCounterClass/>
        <CounterFunction/>
        <FunctionEvent/>


    </div>
  );
}

export default App;
