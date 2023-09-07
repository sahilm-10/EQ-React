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
import CleanUpMouse from './Hooks/CleanUpToggle';
import CustomCounter from './Hooks/CustomHooks/CustomCounter';
import UpdateDocTitle from './Hooks/CustomHooks/DocTitleUpdation';
import FormDetails from './Hooks/CustomHooks/FormDetails';
import FetchData from './Hooks/DataFetch';
import GetById from './Hooks/DataFetchById';
import FormDetailsClass from './Hooks/Forms/FormsDetails';
import SampleForm from './Hooks/Forms/ReactFormik/SampleForm';
import ComponentA from './Hooks/UseContext/ComponentA';
import ComponentC from './Hooks/UseContext/ComponentC';
import ClickCounterMemo from './Hooks/UseMemoHook.js/ClickCounter';
import FocusInput from './Hooks/UseRef/FocusInput';
import MouseCleanUpExample from './Hooks/useEffectCleanup';
import ClickCounter from './Hooks/useEffectExample';
import MouseExample from './Hooks/useEffectMouseExample';
import {Routes,Route} from 'react-router-dom';
import HomePage from './React-Router/HomePage';
import AboutPage from './React-Router/AboutPage';
import Navbar from './React-Router/Navbar';
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

   {/* <ClickCounter/>*/}

   {/* <MouseExample/> */}

   {/* <MouseCleanUpExample/> */}

   {/* <CleanUpMouse/> */}

    {/* <FetchData/> */}

    {/* <GetById/> */}

    {/* <ComponentA/> */}
    
    {/* <ClickCounterMemo/> */}
    {/* <FocusInput/> */}

    {/* <UpdateDocTitle/> */}

    {/* <CustomCounter/> */}

    {/* <FormDetails/> */}
    {/* <FormDetailsClass/> */}

    {/* <SampleForm/> */}

    {/* Routes below  */}
    <Navbar/>
    <Routes>
      {/* Route takes two props - path(denoting url path), element-(Component to render) */}
      <Route path='/home' element={<HomePage/>}></Route>
      <Route path='/about' element={<AboutPage/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
