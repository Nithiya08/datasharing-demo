import logo from './logo.svg';
import './App.css';
import BoxComponent from './BoxComponent';
import Welcome from './Welcome';
import SideEffect from './SideEffect';
import FetchProduct from './FetchProduct';
import FetchUser from './FetchUser';
import CardComp from './CardComp';
import Products from './Products';
import UserData from './UserData';
import LoginLogOut from './LoginLogOut';
import HelloWorld from './HelloWorldClass';
import GreetUser from './PropsClass';
import CounterClass from './CounterClass';
import ConditoanlRendering from './LoginLogOutInClass';
import Product from './Categroty';
import DataSharingParent from './DataSharingParent';
import StudentDetails from './StudentDetails';
import ProductSearch from './ProductSearch';
import UseRefDmo from './UseRefDemo';
import UseRefDemo1 from './UseRefDemo1';
import UseRefDemo3 from './UseRefExample'
import UseRefDemo2 from './UseRefDemo2';
import UseRefDemo4 from './UseRefDemo4';
import ProductUseRef from './ProductUseRef';
import TODo from './ToDo';



function App() {
  return (
    <div className="App">
       <BoxComponent bgcolor='red' text='box2' height='120px' weight='120px'></BoxComponent>
      <BoxComponent bgcolor='blue' text='box1' height='100px' weight='100px'></BoxComponent>
      <Welcome name='John' color='blue'></Welcome>
      <Welcome name='Jamesh' color='green'></Welcome> 
       <SideEffect></SideEffect><br></br> 
       <FetchProduct></FetchProduct> <br></br>
       <FetchUser></FetchUser> <br></br>
       <CardComp></CardComp> <br></br>
       <Products></Products> <br></br>
       <UserData></UserData> <br></br>
       <LoginLogOut></LoginLogOut><br></br>
      <HelloWorld></HelloWorld><br></br>
      <GreetUser name='John'></GreetUser><br></br>
      <CounterClass></CounterClass><br></br>
      <ConditoanlRendering></ConditoanlRendering> <br></br>
       <Product></Product> <br></br>
       <DataSharingParent></DataSharingParent><br></br>
      <StudentDetails></StudentDetails><br></br>
      <ProductSearch></ProductSearch><br></br>
      <UseRefDmo></UseRefDmo><br></br> 
       <UseRefDemo1></UseRefDemo1><br></br> 
      <UseRefDemo3></UseRefDemo3><br></br>
      <UseRefDemo2></UseRefDemo2> <br></br>
       <UseRefDemo4></UseRefDemo4><br></br>
      <ProductUseRef></ProductUseRef> <br></br>
      <TODo></TODo>

    </div>
  );
}

export default App;
