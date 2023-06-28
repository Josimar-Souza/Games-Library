import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';

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
  MetacriticScore,
} from './detailsPageStyles';
import GamesAPI from '../../domain/gamesAPI';
import ErrorCreator from '../../helpers/ErrorCreator';
import sendNotification from '../../helpers/senNotification';
import Button from '../../components/Button';
import getEmbededUrl from '../../helpers/getEmbededUrl';
import Loading from '../../components/Loading';
import GameFormModal from '../../components/GameFormModal';

const gamesAPI = new GamesAPI();

function DetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [game, setGame] = useState({});
  const [updateModal, setUpdateModal] = useState({ open: false });

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
    return (
      <DetailsContainer>
        <Loading tip="Carregando..." size="large" />
      </DetailsContainer>
    );
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
    releaseYear,
  } = game;

  const onBackClick = () => {
    navigate('/');
  };

  const getScoreBackground = (score, type = 'userscore') => {
    const good = '#65ff00';
    const middle = '#ffe900';
    const bad = '#ff7b00';

    if (type === 'metascore') {
      if (score >= 80) {
        return good;
      }

      if (score >= 50 && score < 80) {
        return middle;
      }

      return bad;
    }

    if (score >= 8) {
      return good;
    }

    if (score >= 5 && score < 8) {
      return middle;
    }

    return bad;
  };

  const setUpdateModalState = (value) => {
    setUpdateModal({ ...updateModal, open: value });
  };

  const formatDate = (date) => {
    const dateSplitted = date.split('/');

    return `${dateSplitted[2]}-${dateSplitted[1]}-${dateSplitted[0]}`;
  };

  const getFormattedPlatforms = (platformstoFormat) => {
    const formattedPlatforms = [];

    platformstoFormat.forEach((platform) => {
      formattedPlatforms.push({
        platform,
      });
    });

    return formattedPlatforms;
  };

  const getModalInfo = () => {
    const {
      releaseYear: infoReleaseYear,
      platforms: infoPlatforms,
      metacritic: infoMetacritic,
      ...rest
    } = game;

    const info = { ...rest };

    const date = new Date(formatDate(infoReleaseYear)).toJSON();

    info.releaseDate = dayjs(date);
    info.metascore = infoMetacritic.metascore;
    info.userscore = infoMetacritic.userscore;
    info.platforms = getFormattedPlatforms(infoPlatforms);

    return info;
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
          <HorizontalDivider />
          <HorizontalContainer>
            <Button
              background="#0099ff"
              border="none"
              color="white"
              onClick={() => setUpdateModalState(true)}
            >
              Atualizar jogo
            </Button>
            <Button
              background="#ff5400"
              border="none"
              color="white"
            >
              Deletar jogo
            </Button>
          </HorizontalContainer>
          <HorizontalDivider />
          <HorizontalContainer>
            <Info>{category}</Info>
            <Info>{releaseYear}</Info>
          </HorizontalContainer>
          <HorizontalDivider />
          <HorizontalContainer>
            <Info>{`Desenvolvido por ${developer}`}</Info>
            <Info>{`publicado por ${publisher}`}</Info>
          </HorizontalContainer>
          <HorizontalDivider />
          <Title margin="10px 0">Metacritic</Title>
          <HorizontalContainer>
            <Info>
              Metascore:
              <MetacriticScore background={getScoreBackground(metacritic.metascore, 'metascore')}>
                {metacritic.metascore}
              </MetacriticScore>
            </Info>
            <Info>
              Userscore:
              <MetacriticScore background={getScoreBackground(metacritic.userscore)}>
                {metacritic.userscore}
              </MetacriticScore>
            </Info>
          </HorizontalContainer>
          <HorizontalDivider />
          <Title margin="10px 0">Trailer</Title>
          <TrailerView src={getEmbededUrl(trailerURL)} allowFullScreen />
        </InfoSider>
        <VerticalDivider />
        <ContentContainer>
          <Title margin="20px 0">Sinopse</Title>
          <Info>{sinopse}</Info>
          <HorizontalDivider />
          <Title margin="20px 0">Plataformas</Title>
          <PlatformsContainer>
            {platforms.map((platform) => (
              <Info width="30%">{platform}</Info>
            ))}
          </PlatformsContainer>
        </ContentContainer>
      </InfoContainer>
      <GameFormModal
        open={updateModal.open}
        title={`Atualize o jogo ${title}`}
        cancelCallback={setUpdateModalState}
        info={getModalInfo()}
      />
    </DetailsContainer>
  );
}

export default DetailsPage;
