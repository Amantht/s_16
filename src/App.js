import './App.css';
import logo from './logo.svg';
import Login from './components/Login';
import Registration from './components/Registration';
import {BrowserRouter, Routes , Route} from 'react-router-dom';
import Home from './components/Home';
import Idcard from './components/Idcard';
import NewRegister from './components/NewRegister';
import { Container } from '@mui/system';
import Sign from './components/Sign'
import Calculator from './components/Calculator';

function App() {
  return (
    <div>
    <div className='App-header'>
      <img src={logo} style={{width:"130px",height:"130px"}}/>
      <marquee><h1>This is my sample Web page</h1> </marquee>
    </div>
    <div className='App-body'>
      <Container><Home/></Container>
      <BrowserRouter>
      <Routes>
      
      <Route path="/log" element={<Login/>}/>
      <Route path="/reg" element={<Registration/>}/>
      <Route path="/idc" element={<Idcard/>}/>
      <Route path="/cal" element={<Calculator/>}/>
      <Route path="/new" element={<NewRegister/>}/>
      <Route path="/sig" element={<Sign/>}/>
      </Routes>
      </BrowserRouter>
      
      {/* <Login/>
      <Registration/> */}
    </div>
    </div>
  );
}

export default App;