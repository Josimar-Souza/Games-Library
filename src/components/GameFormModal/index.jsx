import React from 'react';
import PropTypes from 'prop-types';
import CustomModal from './gameFormModalStyles';
import Button from '../Button';

function GameFormModal({ open, onAddCloseGameClicked, title }) {
  return (
    <CustomModal
      open={open}
      onCancel={() => onAddCloseGameClicked(false)}
      title={title}
      footer={[
        <Button
          background="red"
          color="white"
        >
          Cancelar
        </Button>,
        <Button
          background="#00d4ff"
          color="white"
        >
          Salvar
        </Button>,
      ]}
    />
  );
}

GameFormModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onAddCloseGameClicked: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default GameFormModal;
