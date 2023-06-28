import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailsContainer from './detailsPageStyles';
import GamesAPI from '../../domain/gamesAPI';
import ErrorCreator from '../../helpers/ErrorCreator';
import sendNotification from '../../helpers/senNotification';

const gamesAPI = new GamesAPI();

function DetailsPage() {
  const { id } = useParams();
  const [game, setGame] = useState({});

  useEffect(() => {
    const getGame = async () => {
      const gameFounded = await gamesAPI.getGameById(id);

      if (gameFounded instanceof ErrorCreator) {
        sendNotification(gameFounded.customMessage, 'error');
      } else {
        setGame(gameFounded);
      }
    };

    getGame();
  }, []);

  if (Object.entries(game).length === 0) {
    return <h1>Loading...</h1>;
  }

  const { backdrop } = game;

  return (
    <DetailsContainer image={backdrop}>
      <h1>Details Page</h1>
    </DetailsContainer>
  );
}

export default DetailsPage;
