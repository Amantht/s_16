import '../App.css';
/* import {Greet} from './components/Greet';
import Hello from './components/Hello';
import Welcome from './components/Welcome'; */
// import Message from './components/Message';
import logo from '../logo.png'
import Aman from '../Aman.JPG'
function Idcard() {
  return (
    <div class="ex1">
    <img src={logo} align="left" style={{width:"55px", height:"55px"}}/>
    <h6>KL Deemed to be University</h6>
    <h7>Vaddeswaram,Andhrapradesh</h7>
    <hr color="black"/>
    <img src={Aman} align="center" style={{width:"120px",height:"120px"}}/>
      <h3> Aman Chaudhary</h3>
      <h4>2100032572</h4>
      <h5>Student</h5>

</div>
);
}

export default Idcard;
