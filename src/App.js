
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

const performSearch = () => {
  if(searchInput==='') return
  const imprString = searchInput[0].toUpperCase()+searchInput.slice(1)
  let def = data.find(item => item.word === imprString)
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
      <h3>Definiion: </h3>
      <p>{definition}</p>
    </div>
  );
}

export default App;
