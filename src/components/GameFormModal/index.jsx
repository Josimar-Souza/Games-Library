import React from 'react';
import { Form } from 'antd';
import PropTypes from 'prop-types';
import CustomModal from './gameFormModalStyles';
import Input from '../Input';
import TextArea from '../TextArea';
import DatePicker from '../DatePicker';

function GameFormModal({ open, onAddCloseGameClicked, title }) {
  return (
    <CustomModal
      open={open}
      width="60%"
      onCancel={() => onAddCloseGameClicked(false)}
      title={title}
      footer={[]}
    >
      <Form layout="vertical">
        <Input
          placeholder="Digite o nome do jogo"
          border="1px solid black"
          borderWidth="0 0 1px 0"
          borderRadius="0"
          label="Título"
          name="title"
          colon
          margin="30px 0"
          required
        />
        <TextArea
          placeHolder="Digite a sinopse do jogo"
          label="Sinopse"
          name="sinopse"
          colon
          margin="30px 0"
          required
          maxLength={650}
          showCount
          resize="none"
        />
        <Input
          placeholder="Digite o nome da desenvolvedora do jogo"
          border="1px solid black"
          borderWidth="0 0 1px 0"
          borderRadius="0"
          label="Desenvolvedora"
          name="developer"
          colon
          margin="30px 0"
          required
        />
        <Input
          placeholder="Digite o nome da publicadora do jogo"
          border="1px solid black"
          borderWidth="0 0 1px 0"
          borderRadius="0"
          label="Publicadora"
          name="publisher"
          colon
          margin="30px 0"
          required
        />
        <DatePicker
          placeholder="Selecione a data de lançamento do jogo"
          label="Data de lançamento"
          name="releaseDate"
          colon
          margin="30px 0"
          required
          width="50%"
        />
        <Input
          placeholder="Digite a url do trailer do jogo"
          border="1px solid black"
          borderWidth="0 0 1px 0"
          borderRadius="0"
          label="Url do trailer"
          name="trailerURL"
          colon
          margin="30px 0"
          required
        />
        <Input
          placeholder="Digite a nota 'metascore' do Metacritic"
          border="1px solid black"
          borderWidth="0 0 1px 0"
          borderRadius="0"
          label="Nota 'metascore' do Metacritic"
          name="metascore"
          colon
          margin="30px 0"
          required
          type="number"
        />
        <Input
          placeholder="Digite a nota 'userscore' do Metacritic"
          border="1px solid black"
          borderWidth="0 0 1px 0"
          borderRadius="0"
          label="Nota 'usercore' do Metacritic"
          name="userscore"
          colon
          margin="30px 0"
          required
          type="number"
        />
        <Input
          placeholder="Digite a url da imagem do jogo"
          border="1px solid black"
          borderWidth="0 0 1px 0"
          borderRadius="0"
          label="Url da imagem"
          name="image"
          colon
          margin="30px 0"
          required
        />
        <Input
          placeholder="Digite a url da imagem de backdrop do jogo"
          border="1px solid black"
          borderWidth="0 0 1px 0"
          borderRadius="0"
          label="Url da imagem de backdrop"
          name="backdrop"
          colon
          margin="30px 0"
          required
        />
      </Form>
    </CustomModal>
  );
}

GameFormModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onAddCloseGameClicked: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default GameFormModal;
