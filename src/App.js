import './App.css';
import Counter from './Components/ClassCounter';
import WelcomeMessage from './Components/FirstClassComponent';
import GreetMessage from './Components/FirstFunctionalComponent';
import FuncCounter from './Components/FunctionCounter';
import HookCounter from './Components/HookCounter';
import FullName from './Components/JsxExample';
import Message from './Components/StateMessage';
import UseStateWithObject from './Components/UseStateExample';
import UseStateArray from './Components/useStateArrayExample';
import ClickCounter from './Hooks/useEffectExample';
function App() {
  return (
    <div className="App">
      {/* <GreetMessage name = "Sahil" age="10">This is a Children Props</GreetMessage>
      <GreetMessage name = "Rahul" age="12"></GreetMessage>
      <GreetMessage name = "Vivek" age="14">This is a Children Props</GreetMessage>
      
      <WelcomeMessage name="Bruce" age="22">This is a Class Component Passed Prop</WelcomeMessage>
      <WelcomeMessage name="Bruce" age="22">This is a Class Component Passed Prop</WelcomeMessage>      
      <WelcomeMessage name="Bruce" age="22">This is a Class Component Passed Prop</WelcomeMessage> */}
    
    {/* <Message name="Sahil"/> */}

    {/* <Counter/> */}

    {/* <FuncCounter/> */}

    {/* <HookCounter/> */}
   {/* <UseStateWithObject/> */}

   {/* <UseStateArray/> */}

   <ClickCounter/>
    </div>
  );
}

export default App;
