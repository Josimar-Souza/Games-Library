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
  PlatformsContainer,
  VerticalDivider,
  TrailerView,
} from './detailsPageStyles';
import GamesAPI from '../../domain/gamesAPI';
import ErrorCreator from '../../helpers/ErrorCreator';
import sendNotification from '../../helpers/senNotification';
import Button from '../../components/Button';
import getEmbededUrl from '../../helpers/getEmbededUrl';

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
    platforms,
    trailerURL,
  } = game;

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
          <HorizontalContainer>
            <Info width="20%">{category}</Info>
            <Button
              background="#0099ff"
              border="none"
              color="white"
            >
              Atualizar jogo
            </Button>
          </HorizontalContainer>
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
          <TrailerView src={getEmbededUrl(trailerURL)} allowFullScreen />
        </InfoSider>
        <VerticalDivider />
        <ContentContainer>
          <Title margin="20px 0">Sinopse</Title>
          <Info>{sinopse}</Info>
          <Title margin="20px 0">Plataformas</Title>
          <PlatformsContainer>
            {platforms.map((platform) => (
              <Info width="30%">{platform}</Info>
            ))}
          </PlatformsContainer>
        </ContentContainer>
      </InfoContainer>
    </DetailsContainer>
  );
}

export default DetailsPage;
