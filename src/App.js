
import './App.css';
import { useState } from 'react';
function App() {
  const data = 
[

    { word: "React", meaning: "A JavaScript library for building user interfaces." },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." }

]
const [searchInput, setSearchInput] = useState('')
const [definition,setDefinition] = useState('')
const [show, setShow] = useState(false)

const performSearch = () => {
  if(searchInput==='') {
    setShow(true)
    setDefinition('Word not found in the dictionary.')
    return
  }
  const imprString = searchInput[0].toUpperCase()+searchInput.slice(1).toLowerCase()
  let def = data.find(item => item.word === imprString)
  setShow(true)
  if(!def){
    setDefinition('Word not found in the dictionary.')
  }else{
    setDefinition(def.meaning)
  }
}
  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <input type='text' placeholder='Search for a word' onChange={e=>setSearchInput(e.target.value)} value={searchInput}/>
      <button onClick={performSearch}>Search</button>
      <h3>Definition:</h3>
      {show && <p>{definition}</p> }
    </div>
  );
}

export default App;
