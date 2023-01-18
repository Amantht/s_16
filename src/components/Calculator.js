import '../App.css';
  function Calculator() {
    function Handle(event)
  {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const un = data.get("n1");
    const pw = data.get("n2");
    const a=parseInt(un)
    const b=parseInt(pw)

    console.log(a+b);

  }
    
    return (
        
     <div>
    <div className='App-body'>
      <div className='App-login'>
      <form onClick={Handle}>
      <center><h3 >Add here</h3></center>
        Enter first number:<input type="integer" name="n1"/><br/>
        Enter Second number:<input type="integer" name="n2"/><br/>
        <center><input type="submit" value="Add"/></center>
      </form>
      
      </div>
      </div>
    </div>
    );
  }
  
  
  export default Calculator;

  