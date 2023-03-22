import './App.css';

import Functional from './component/Functional';
import ClassComponent from './component/classcomponent';
import FunctionalProps from './component/FunctionalProps';
import FunctionalProps2 from './component/FunctionalProps2';
import FunctionalPropsChildren from './component/FunctionalPropsChildren';
import ClassComponentProps from './component/CLassComponentProps';


function App() {
  return (
    <div className="App">
        <Functional/>
        <ClassComponent/>
        <FunctionalProps name="ja, nej"/>
        <FunctionalProps2 first="richard" last="carlsson" />
        <FunctionalPropsChildren first="richard" last="carlsson" children="jag är fucking barn"/>
        <ClassComponentProps text="är props"/>

    </div>
  );
}

export default App;
