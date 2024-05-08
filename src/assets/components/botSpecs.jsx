import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function BotDetails({ setEnlistedBots, enlistedBots }) {
  let { id } = useParams();
  const [bot, setBot] = useState(null);
  
  useEffect(() => {
    fetch(`http://localhost:3000/bots/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setBot(data);
      })
      .catch((error) => {
        console.error('Error fetching bot details:', error);
      });
  }, [id]);

  const enlistBot = () => {
    if (!enlistedBots.some((enlistedBot) => enlistedBot.bot_class === bot.bot_class)) {
      setEnlistedBots((prevBots) => [...prevBots, bot]);
    }
  };
  

 

  return (
    <div>
      {bot ? (
        <div className="bot-details">
          <img src={bot.avatar_url} alt={bot.name} />
          <div>Name: {bot.name}</div>
          <div>Health: {bot.health}</div>
          <div>Damage: {bot.damage}</div>
          <div>Armour: {bot.armour}</div>
          <div>Class: {bot.bot_class}</div>
          <div>Catchphrases: {bot.catchphrases}</div>
          <div>Created At: {bot.created_at}</div>
          <div>Updated At: {bot.updated_at}</div>
          <button onClick={enlistBot}>Enlist Bot</button>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default BotDetails;
