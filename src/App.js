import './App.css';
import { Display } from './Components/Display';
import { Button } from './Components/Button';
import  React from 'react';
import  Footer from './Components/Footer';

function App(){
 
  const [display, setDisplay] = React.useState("0")

  const [equation, setEquation] = React.useState("")
  
  const numberInput = (e)=>{
    // empty equation
    if(equation === "")
    {
      if(display==="0"&& e.target.value!=="0"){
        if(e.target.value ==="."){
          setEquation(equation + "0.")
          setDisplay("0.")  //value input is '.' then set state specify 
        }
        else{
          setEquation(e.target.value)
          setDisplay(e.target.value)
        }
      }
    }
    if(!equation.includes("="))
    {
      if(equation.match(/[-*/+]$/) != null){
        if(e.target.value ==="."){
          setEquation(equation + "0.")
          setDisplay("0.")
        }
        else{
          setEquation(equation + e.target.value) 
          setDisplay(e.target.value)
        }
      }
      // if last string is '.' then not input '.', can input 0-9
      if(equation.match(/[.]$/) != null){
        if(e.target.value==="."){
            console.log(false)
        }else{
            setEquation(equation + e.target.value)
            setDisplay(display + e.target.value)
        }
      }// if last string is (0-9) and string include '.' then not input '.'
      else 
        if(equation.match(/[0-9]$/) != null)
        {
          if(display.includes(".")){
            if(e.target.value==="."){
              console.log(false)
            }else{
              setEquation(equation + e.target.value)
              setDisplay(display + e.target.value)
            }
          }else{
            setEquation(equation + e.target.value)
            setDisplay(display + e.target.value)  
          }
        }
    }else{
      if(e.target.value!=="0"){
        if(e.target.value ==="."){
          setEquation( "0.")
          setDisplay("0.")
        }else{
          setEquation( e.target.value)
          setDisplay( e.target.value)  
        }
      }
      else{
        setDisplay("0")
        setEquation("")
      }
    }
  }

  const operationInput = (e)=>{
    if(!equation.includes("=") ){
      //last string has a 0-9 or '.' then equation + value (+ - * /)
      if(equation.match(/[0-9.]$/)!==null){
        setEquation(equation + e.target.value)
      }
      //last string has a (+ - * /) then change last character of string with value input
      if(equation.match(/[+\-*/]$/)!==null){
        setEquation(equation.substring(0, equation.length-1) + e.target.value)
      }
    }
  }

  const clearInput = ()=>{
    setDisplay("0")
    setEquation("")
  }

  const calcularEquation = ()=>{
    if(!equation.includes("=") && equation !== ""){
      if(equation!=="" && equation.match(/[+\-*\/]$/) ===null && equation.match(/[+\-*\/]/)!==null){
        let result = eval(equation)
        if(result.toString().match(/[a-z]/)!==null){
          setEquation("")
          setDisplay(result.toString())
        }
        else{
          setEquation(`${equation} = ${result}`)
          setDisplay(result.toString())
        }
      }
      console.log(equation)
    }
  }
  numberInput.bind(this)
  operationInput.bind(this)
  calcularEquation.bind(this)


    return (
      <div>
        <div className="container">
          <div className="equa">
              <Display display={display} equation={equation} ></Display>
          </div>
          
          <div className="first-row">
            <Button name="1" value="1" className="global" onHandleClick={numberInput}></Button>
            <Button name="2" value="2" className="global" onHandleClick={numberInput}></Button>
            <Button name="3" value="3" className="global" onHandleClick={numberInput}></Button>
            <Button name="+" value="+" className="global" onHandleClick={operationInput}></Button>
          </div>
           <div className="second-row">
            <Button name="4" value="4" className="global" onHandleClick={numberInput}></Button>
            <Button name="5" value="5" className="global" onHandleClick={numberInput}></Button>
            <Button name="6" value="6" className="global" onHandleClick={numberInput}></Button>
            <Button name="-" value="-" className="global" onHandleClick={operationInput}></Button>
          </div>
          <div className="third-row">
            <Button name="7" value="7" className="global" onHandleClick={numberInput}></Button>
            <Button name="8" value="8" className="global" onHandleClick={numberInput}></Button>
            <Button name="9" value="9" className="global" onHandleClick={numberInput}></Button>
            <Button name="x" value="*" className="global" onHandleClick={operationInput}></Button>
          </div>
          <div className="fourth-row">
            <Button name="." value="." className="global" onHandleClick={numberInput}></Button>
            <Button name="0" value="0" className="global-2" onHandleClick={numberInput}></Button>
            <Button name="/" value="/" className="global" onHandleClick={operationInput}></Button>
          </div>
          <div className="conflict">
           <Button name="Del" className="global-3" onHandleClick={clearInput}></Button>
           <Button name="=" value="=" className="global-4" onHandleClick={calcularEquation}></Button>
          </div>
        </div>
        <Footer></Footer>
      </div>
    )
  

}
  


export default App;
