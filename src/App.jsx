import React, { useState, useEffect } from 'react';
import './App.css';
import Botcollection from './components/BotCollection';
import BotDetails from './components/BotDetails';
import { Routes, Route } from 'react-router-dom';
import BotArmy from './components/BotArmy';
import SortBar from './components/SortBar';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then(response => response.json())
      .then(data => setBots(data))
      .catch(error => console.error('Error fetching bots:', error));
  }, []);

  const handleAddToArmy = (bot) => {
    setArmy(prevArmy => [...prevArmy, bot]);
  };

  const handleReleaseFromArmy = (bot) => {
    setArmy(prevArmy => prevArmy.filter(item => item.id !== bot.id));
  };

  const deleteBot = (bot) => {
    fetch(`http://localhost:3000/bots/${bot.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log("Bot deleted:", data);
      setArmy(prevArmy => prevArmy.filter(item => item.id !== bot.id));
      setBots(prevBots => prevBots.filter(item => item.id !== bot.id));
    })
    .catch(error => console.error('Error deleting bot:', error));
  };

  function sortBots(property) {
    const sortedBots = [...bots];
    sortedBots.sort((a, b) => a[property] - b[property]);
    setBots(sortedBots);
  };

  return (
    <div className="App">
      <SortBar sortBots={sortBots} />
      <BotArmy army={army} handleReleaseFromArmy={handleReleaseFromArmy} deleteBot={deleteBot}/>
      <h1 className='app-head'>Bot Army</h1>
      <Routes>
        <Route path='/' element={<Botcollection bots={bots} />} />
        <Route path='/bots/:id' element={<BotDetails bots={bots} handleAddToArmy={handleAddToArmy} />} />
      </Routes>
    </div>
  );
}

export default App;
