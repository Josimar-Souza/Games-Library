import React, { useEffect, useState, useContext } from 'react';
import { isMobile } from 'react-device-detect';
import { useParams, useNavigate } from 'react-router-dom';
import { Popconfirm } from 'antd';
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
  VideoViewer,
  MetacriticScore,
} from './detailsPageStyles';
import GamesAPI from '../../domain/gamesAPI';
import ErrorCreator from '../../helpers/ErrorCreator';
import sendNotification from '../../helpers/senNotification';
import Button from '../../components/Button';
import getEmbededUrl from '../../helpers/getEmbededUrl';
import Loading from '../../components/Loading';
import GameFormModal from '../../components/GameFormModal';
import { gamesContext } from '../../context/gamesContext';

const gamesAPI = new GamesAPI();

function DetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getAllGames } = useContext(gamesContext);
  const [game, setGame] = useState({});
  const [updateModal, setUpdateModal] = useState({ open: false });

  useEffect(() => {
    window.scroll({ top: 0, left: 0 });

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
    themeURL,
    releaseDate,
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
      releaseDate: infoReleaseDate,
      platforms: infoPlatforms,
      metacritic: infoMetacritic,
      ...rest
    } = game;

    const info = { ...rest };

    info.releaseDate = dayjs(infoReleaseDate);
    info.metascore = infoMetacritic.metascore;
    info.userscore = infoMetacritic.userscore;
    info.platforms = getFormattedPlatforms(infoPlatforms);

    return info;
  };

  const onDeleteGameclicked = async () => {
    const result = await gamesAPI.deleteGameById(id);

    if (result instanceof ErrorCreator) {
      sendNotification('Não foi possível deletar esse jogo, por favor, tente mais tarde', 'error');
    } else {
      sendNotification('Jogo deletado com sucesso!', 'success');
      getAllGames();
      navigate('/');
    }
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
            <Popconfirm
              title="Tem certeza que deseja deletar esse jogo?"
              okText="Sim"
              cancelText="Não"
              onConfirm={onDeleteGameclicked}
            >
              <Button
                background="#ff5400"
                border="none"
                color="white"
              >
                Deletar jogo
              </Button>
            </Popconfirm>
          </HorizontalContainer>
          <HorizontalDivider />
          <HorizontalContainer>
            <Info>{category}</Info>
            <Info>{dayjs(releaseDate).format('DD/MM/YYYY')}</Info>
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
          {!isMobile
            ? (
              <>
                <Title margin="10px 0">Tema</Title>
                <VideoViewer src={getEmbededUrl(themeURL)} allowFullScreen />
              </>
            ) : null}
        </InfoSider>
        <VerticalDivider />
        <ContentContainer>
          <Title margin="20px 0">Um pouco sobre o jogo</Title>
          <Info>{sinopse}</Info>
          <HorizontalDivider />
          <Title margin="20px 0">Plataformas</Title>
          <PlatformsContainer>
            {platforms.map((platform) => (
              <Info width="30%">{platform}</Info>
            ))}
          </PlatformsContainer>
          <HorizontalDivider />
          <Title margin="10px 0">Trailer</Title>
          <VideoViewer src={getEmbededUrl(trailerURL)} allowFullScreen />
          {isMobile
            ? (
              <>
                <Title margin="10px 0">Tema</Title>
                <VideoViewer src={getEmbededUrl(themeURL)} allowFullScreen />
              </>
            ) : null}
        </ContentContainer>
      </InfoContainer>
      <GameFormModal
        open={updateModal.open}
        title={`Atualize o jogo ${title}`}
        cancelCallback={setUpdateModalState}
        info={getModalInfo()}
        type="update"
      />
    </DetailsContainer>
  );
}

export default DetailsPage;
