import React, { useState } from 'react';
import './App.css';
import animalData from './data.json';
import Card from './components/Card';


function App() {

  const  [animals, setAnimals] = useState(animalData)

  const handleSortByLife = () => {
    const orderThings = [...animals].sort((a, b) => a.lifeExpectancy - b.lifeExpectancy)
    setAnimals(orderThings);
  }

  return (
    <div className="App">
      <h1>Adopt me plz 🐾</h1>
      {animals.map(elem => {
        <button className="action-btn" onClick={handleSortByLife}>Sort by life</button>
        {animals.map(elem => {
        return <Card key={elem._id} animal={elem}/>
      })}
    </div>
  );
}


   
export default App;

