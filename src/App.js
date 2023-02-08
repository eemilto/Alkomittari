import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react' 

function App() {

  const [weight, setPaino] = useState(0)
  const [bottles, setPullot] = useState(1)
  const [gender, setSukupuoli] = useState("male")
  const [time, setAika] = useState(1)
  const [result, setTulos] = useState(0)

  function calculate(e) {
    e.preventDefault();
    const litres = bottles * 0.33
    const grams = litres * 8 * 4.5
    const burning = weight / 10
    const gramsLeft = grams - (burning * time)
    let result = 0

    if (gender === "male") {
      result = gramsLeft / (weight * 0.7)
    }
    
    else {
      result = gramsLeft / (weight * 0.6)
    }

    if (result < 0) {
      result = 0
    }


    setTulos(result.toFixed(1))

  }

  return (
    <form onSubmit={calculate}>
    <h1>Lasketaan veren alkoholitaso</h1>
    <div>
      <label>Paino</label>
      <input type="number" name="paino" id="" step="1"  onChange={e => setPaino(e.target.value)}/>
    </div>
    <div>
      <label>Pullot</label>
      <select type="number" name="bottles" id="" step="1" onChange={e => setPullot(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
      </select>
    </div>
    <div>
      <label>Aika</label>
      <select type="number" name="time" step="1" onChange={e => setAika(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
      </select>
    </div>
    <div>
      <label>Sukupuoli</label>
      <input type="radio" name="gender" id="male" value="male" onChange={e => setSukupuoli("male")} defaultChecked />
      <label>Male</label>
      <input type="radio" name="gender" id="female" onChange={e => setSukupuoli("female")}/>
      <label>Female</label>
    </div>
    <output>{result}</output>
    <button type='submit'>Calculate</button>
    </form>
  );
}

export default App;