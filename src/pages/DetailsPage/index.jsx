import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  DetailsContainer,
  BackButtonContainer,
  CustomBackIcon,
  InfoContainer,
  InfoSider,
  Image,
  Title,
  ContentContainer,
  Info,
  HorizontalContainer,
  HorizontalDivider,
} from './detailsPageStyles';
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

  const {
    backdrop,
    image,
    title,
    sinopse,
    developer,
    publisher,
    metacritic,
    category,
  } = game;
  console.log(game);
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
      <InfoContainer>
        <InfoSider>
          <Image src={image} alt={`Imagem do jogo ${title}`} />
          <Title margin="10px 0">{title}</Title>
          <Info>{category}</Info>
          <HorizontalDivider />
          <HorizontalContainer>
            <Info>{`Desenvolvido por ${developer}`}</Info>
            <Info>{`publicado por ${publisher}`}</Info>
          </HorizontalContainer>
          <HorizontalDivider />
          <Title margin="10px 0">Metacritic</Title>
          <HorizontalContainer>
            <Info>{`Metascore: ${metacritic.metascore}`}</Info>
            <Info>{`Userscore: ${metacritic.userscore}`}</Info>
          </HorizontalContainer>
          <HorizontalDivider />
          <Title margin="10px 0">Trailer</Title>
        </InfoSider>
        <ContentContainer>
          <Title margin="20px 0">Sinopse</Title>
          <Info>{sinopse}</Info>
        </ContentContainer>
      </InfoContainer>
    </DetailsContainer>
  );
}

export default DetailsPage;
