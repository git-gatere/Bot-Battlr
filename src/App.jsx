import React, { useState } from 'react';
import BotCollection from './assets/components/botCollection';
import BotDetails from './assets/components/botSpecs';
import EnlistedBots from './assets/components/yourBotArmy';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [enlistedBots, setEnlistedBots] = useState([]); 
  return (
    <div>
      <EnlistedBots enlistedBots={enlistedBots} />
      <Routes>
        <Route
          path="/"
          element={<BotCollection setEnlistedBots={setEnlistedBots} />}
        />
        <Route
          path="/details/:id"
          element={<BotDetails setEnlistedBots={setEnlistedBots} enlistedBots={enlistedBots} />} 
        />
        
      </Routes>
    </div>
  );
}

export default App;