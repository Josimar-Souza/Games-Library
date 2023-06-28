import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import {
  GameCardContainer,
  ImageContainer,
  Image,
  Title,
  InfoContainer,
  CardInfo,
} from './gameCardStyles';
import Button from '../Button';

function GameCard({ game, _id }) {
  const navigate = useNavigate();

  const {
    image,
    title,
    developer,
    releaseDate,
  } = game;

  const onSeeDetailsClick = () => {
    navigate(`/details/${_id}`);
  };

  return (
    <GameCardContainer>
      <ImageContainer>
        <Image src={image} alt={`Imagem do jogo ${title}`} />
      </ImageContainer>
      <Title>{title}</Title>
      <InfoContainer>
        <CardInfo>{developer}</CardInfo>
        <CardInfo>{dayjs(releaseDate).format('DD/MM/YYYY')}</CardInfo>
      </InfoContainer>
      <Button
        fontSize="14px"
        margin="10px 0"
        background="rgba(255, 255, 255, 0.2)"
        border="none"
        onClick={onSeeDetailsClick}
      >
        Ver detalhes
      </Button>
    </GameCardContainer>
  );
}

GameCard.propTypes = {
  game: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    developer: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
  }).isRequired,
  _id: PropTypes.string.isRequired,
};

export default GameCard;
