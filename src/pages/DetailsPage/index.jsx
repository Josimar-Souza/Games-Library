import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { DetailsContainer, BackButtonContainer, CustomBackIcon } from './detailsPageStyles';
import GamesAPI from '../../domain/gamesAPI';
import ErrorCreator from '../../helpers/ErrorCreator';
import sendNotification from '../../helpers/senNotification';
import Button from '../../components/Button';

const gamesAPI = new GamesAPI();

function DetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
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

  const onBackClick = () => {
    navigate('/');
  };

  return (
    <DetailsContainer image={backdrop}>
      <BackButtonContainer>
        <Button
          background="none"
          border="none"
          boxShadow="none"
          onClick={onBackClick}
        >
          <CustomBackIcon />
        </Button>
      </BackButtonContainer>
    </DetailsContainer>
  );
}

export default DetailsPage;
