import './App.css';
import WelcomeMessage from './Components/FirstClassComponent';
import GreetMessage from './Components/FirstFunctionalComponent';
import FullName from './Components/JsxExample';

function App() {
  return (
    <div className="App">
      <GreetMessage name = "Sahil" age="10">This is a Children Props</GreetMessage>
      <GreetMessage name = "Rahul" age="12"></GreetMessage>
      <GreetMessage name = "Vivek" age="14">This is a Children Props</GreetMessage>
      
      <WelcomeMessage name="Bruce" age="22">This is a Class Component Passed Prop</WelcomeMessage>
      <WelcomeMessage name="Bruce" age="22">This is a Class Component Passed Prop</WelcomeMessage>      
      <WelcomeMessage name="Bruce" age="22">This is a Class Component Passed Prop</WelcomeMessage>

    </div>
  );
}

export default App;
