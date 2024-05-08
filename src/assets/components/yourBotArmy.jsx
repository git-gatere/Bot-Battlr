import React from 'react';
import "./App.css";

function EnlistedBots({ enlistedBots }) {
    return (
      <div className="enlisted-bots">
        <h2>Enlisted Bots</h2>
        {enlistedBots.map(bot => (
          <div key={bot.id} className="bot-item">
            <img src={bot.avatar_url} alt={bot.name} />
            <div>{bot.name}</div>
            
          </div>
        ))}
      </div>
    );
  }
  
  export default EnlistedBots;
