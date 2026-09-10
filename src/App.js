import { useState, useRef } from "react";
import './App.css';

//componente principal de la calculadora, contiene el estado del resultado y las funciones para realizar las operaciones matemáticas
function App() {
  const inputRef = useRef(null); //inputRef es una referencia al input, se utiliza para obtener el valor del input y para limpiar el input
  const resultRef = useRef(null); //resultRef es una referencia al resultado, se utiliza para mostrar el resultado en el DOM
  const [result, setResult] = useState(0); //result es el estado del resultado, se inicializa en 0 y se actualiza con setResult
 
  //funcion sumar 
 

  function plus(e) {
    e.preventDefault(); //e.preventDefault() evita que el formulario se recargue al hacer click en el boton
    const inputVal = inputRef.current.value; //inputRef.current.value obtiene el valor del input
    const newResult = result + Number(inputVal); //Number(inputVal) convierte el valor del input a numero y lo suma al resultado actual
    setResult(newResult); //setResult(newResult) actualiza el estado del resultado con el nuevo resultado
  }

  function minus(e) {
    e.preventDefault();
    const inputVal = inputRef.current.value;
    const newResult = result - Number(inputVal); //Number(inputVal) convierte el valor del input a numero y lo resta al resultado actual
    setResult(newResult);
  }

  function times(e) {
    e.preventDefault();
    const inputVal = inputRef.current.value;
    const newResult = result * Number(inputVal); //Number(inputVal) convierte el valor del input a numero y lo multiplica por el resultado actual
    setResult(newResult);
  }

  function divide(e) {
    e.preventDefault();
    const inputVal = Number(inputRef.current.value);
    if (inputVal === 0) { alert("It can't be divided by 0") } //si el valor del input es 0, muestra un mensaje de alerta y no realiza la division
    else {
      const newResult = result / inputVal; //Number(inputVal) convierte el valor del input a numero y lo divide por el resultado actual
      setResult(newResult);
    }
  }

  function resetInput(e) {
    
    inputRef.current.value = ""; //inputRef.current.value = "" limpia el valor del input
  }

  function resetResult(e) {
    setResult(0); //setResult(0) reinicia el estado del resultado a 0
  }

  return (
    <div className="App">
      <div>
        <h1>Simplest Working calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>{result}</p>
        <input
          pattern="[0-9]*"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />


        <button onClick={plus}>add</button>
        <button onClick={minus}>substract</button>
        <button onClick={times}>Multiply</button>
        <button onClick={divide}>Divide</button>
        <button onClick={resetInput}>Reset Input</button>
        <button onClick={resetResult}>Reset Result</button>
      </form>
    </div>
  );
}

export default App;
