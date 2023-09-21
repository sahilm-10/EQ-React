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
// import AboutPage from './React-Router/AboutPage';
import Navbar from './React-Router/Navbar';
import OrderSummary from './React-Router/OrderSummary';
import NoMatchPage from './React-Router/NoMatchPage';
import ProductsPage from './React-Router/ProductsPage';
import FeaturedProduct from './React-Router/FeaturedProduct';
import NewProduct from './React-Router/NewProduct';
import Users from './React-Router/Users';
import UserDetails from './React-Router/UserDetails';
import React from 'react';
import TestObject from './Components/TestObject';
import GetUsersByFetch from './HttpCalls/GetUsersByFetch';
import GetUsersByAxios from './HttpCalls/GetUsersByAxios';
import GetUserById from './HttpCalls/GetUsersById';
import LifecycleA from './ComponentLifeCycle/LifecycleA';
import UpdateLifecycleA from './ComponentLifeCycle/UpdateLifecycleA';
import SampleGrid from './AG-Grid/SampleGrid';
import AGGrid from './AG-Grid/AGGrid';
import GridExample from './AG-Grid/GridExample';
import TableGridCell from './AG-Grid/TableGridCell';
import CounterButtons from './React-Redux/app/CounterButtons';
import Counters from './ReduxToolkit/Counters';
import DateRange from './AG-Grid/DateRange';
import RefForm from './Hooks/UseRef/RefForm';
const LazyAbout = React.lazy(()=> import('../src/React-Router/AboutPage'))
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
    {/* <Navbar/> */}
    {/* <Routes> */}
      {/* Route takes two props - path(denoting url path), element-(Component to render) */}
      {/* <Route path='/home' element={<HomePage/>}></Route> */}
      {/* <Route path='/about'  */}
      {/* element={<React.Suspense fallback='Loading...'> */}
                    {/* <LazyAbout/> */}
              {/* </React.Suspense> }> */}
      {/* </Route> */}

      {/* <Route path='/order-summary' element={<OrderSummary/>}></Route>
      <Route path='/products' element={<ProductsPage/>}>
        <Route index element={<FeaturedProduct/>}/>
        <Route path='featured-page' element={<FeaturedProduct/>}></Route>
        <Route path='new-page' element={<NewProduct/>}></Route> */}
      {/* </Route> */}
      {/* <Route path='users' element={<Users/>}> */}
        {/* <Route path=':userId' element={<UserDetails/>}/> */}
      {/* </Route> */}
      {/* <Route path='*' element={<NoMatchPage/>}></Route> */}
    {/* </Routes> */}

    {/* <TestObject/> */}
    {/* <UseStateWithObject/> */}
    {/* <GetUsersByFetch/> */}
    {/* <GetUsersByAxios/> */}
    {/* <GetUserById/> */}

    {/* <LifecycleA/> */}
    {/* <UpdateLifecycleA/> */}
    {/* <SampleGrid/> */}

    {/* <AGGrid/> */}
        
    {/* <GridExample/> */}
    <TableGridCell/>
    {/* <CounterButtons/> */}
    {/* <Counters/> */}

    {/* <DateRange/> */}
    {/* <RefForm/> */}
    </div>
  );
}

export default App;
