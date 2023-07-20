import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import { Form, Divider } from 'antd';
import PropTypes from 'prop-types';
import {
  CustomModal,
  FormListContainer,
  FormListContent,
  CustomRemoveIcon,
  CustomAddIcon,
  FormSectionTitle,
  ButtonsContainer,
  AddCategoryContainer,
} from './gameFormModalStyles';
import Input from '../Input';
import TextArea from '../TextArea';
import DatePicker from '../DatePicker';
import Select from '../Select';
import Button from '../Button';
import { gamesContext } from '../../context/gamesContext';
import GamesAPI from '../../domain/gamesAPI';
import ErrorCreator from '../../helpers/ErrorCreator';
import sendNotification from '../../helpers/senNotification';

const gamesAPI = new GamesAPI();

function GameFormModal({
  open,
  cancelCallback,
  title,
  info,
  type,
}) {
  const { categories, getAllCategories, getAllGames } = useContext(gamesContext);
  const [categoryToAdd, setCategoryToAdd] = useState('');
  const [isLoadingGame, setIsLoadingGame] = useState(false);
  const [isLoadingCategory, setIsLoadingCategory] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const getCategoriesOption = () => {
    const options = [];

    categories.forEach(({ category }) => {
      options.push({
        label: category,
        value: category,
      });
    });

    return options;
  };

  const getPlatforms = (platforms) => {
    if (!platforms || platforms.length === 0) {
      return [];
    }

    const formattedPlatforms = [];

    platforms.forEach(({ platform }) => {
      formattedPlatforms.push(platform);
    });

    return formattedPlatforms;
  };

  const onFinished = async (values) => {
    const {
      metascore,
      userscore,
      platforms,
      releaseDate,
      addCategory,
      ...rest
    } = values;

    const gameValues = { ...rest };
    const { _id } = info;

    gameValues.releaseDate = new Date(values.releaseDate).toJSON();
    gameValues.metacritic = {
      userscore: +userscore,
      metascore: +metascore,
    };
    gameValues.platforms = getPlatforms(platforms);

    if (gameValues.platforms.length === 0) {
      sendNotification('Por favor, adicione ao menos uma plataforma', 'error');
      return;
    }

    let result;
    let message;

    setIsLoadingGame(true);

    if (type === 'add') {
      result = await gamesAPI.addNewGame(gameValues);

      message = 'Jogo adicionado com sucesso!';
    } else if (type === 'update') {
      result = await gamesAPI.updateGame(gameValues, _id);

      message = 'Jogo atualizado com sucesso!';
    }

    setIsLoadingGame(false);

    if (result instanceof ErrorCreator) {
      sendNotification(result.customMessage, 'error');
    } else {
      sendNotification(message, 'success');
      cancelCallback(false);

      getAllGames();

      let id;

      if (_id) {
        id = _id;
      } else {
        const { gameAdded: { _id: addedId } } = result;

        id = addedId;
      }

      if (type === 'add') {
        navigate(`/details/${id}`);
      } else {
        window.location.reload();
      }
    }
  };

  const onCategoryInputChange = ({ target: { value } }) => {
    setCategoryToAdd(value);
  };

  const onAddCategoryClick = async () => {
    if (categoryToAdd === '') {
      sendNotification('Por favor, digite uma categoria válida', 'error');
      return;
    }

    setIsLoadingCategory(true);

    const result = await gamesAPI.addNewCategory({ category: categoryToAdd });

    setIsLoadingCategory(false);

    if (result instanceof ErrorCreator) {
      sendNotification(result.customMessage, 'error');
    } else {
      sendNotification('Categoria adicionada com sucesso!', 'success');
      setCategoryToAdd('');
      getAllCategories();
      form.setFieldValue('addCategory', '');
    }
  };

  const onCancel = () => {
    form.resetFields();
    cancelCallback(false);
  };

  const onFinishFailed = () => {
    sendNotification('Não foi possível adicionar o jogo, por favor, verifique os campos e tente novamente', 'error');
  };

  return (
    <CustomModal
      open={open}
      width={isMobile ? '90%' : '60%'}
      onCancel={onCancel}
      title={title}
      footer={[]}
      destroyOnClose
    >
      <Form layout="vertical" onFinish={onFinished} form={form} initialValues={info} onFinishFailed={onFinishFailed}>
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
          placeHolder="Conte um pouco sobre o jogo"
          label="Um pouco sobre o jogo"
          name="sinopse"
          colon
          margin="30px 0"
          required
          maxLength={2000}
          showCount
          resize="none"
          autoSize
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
          placeholder="Digite a url do tema do jogo"
          border="1px solid black"
          borderWidth="0 0 1px 0"
          borderRadius="0"
          label="Url do tema"
          name="themeURL"
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
        <Select
          placeholder="Selecione um categoria"
          label="Categoria"
          name="category"
          colon
          margin="30px 0"
          required
          options={getCategoriesOption()}
          helper="Caso não encontre a categoria desejada, adicione-a primeiro no final do formulário"
        />
        <FormSectionTitle>Plataformas</FormSectionTitle>
        <Form.List name="platforms">
          {(fields, { add, remove }) => (
            <FormListContainer>
              {fields.map(({ key, name, ...restFields }) => (
                <FormListContent
                  key={key}
                >
                  <Input
                    placeholder="Digite a plataforma"
                    label={`Plataforma ${name + 1}`}
                    border="1px solid black"
                    borderWidth="0 0 1px 0"
                    borderRadius="0"
                    colon
                    margin="30px 0"
                    name={[name, 'platform']}
                    required
                    width="80%"
                    {...restFields}
                  />
                  <Button
                    onClick={() => remove(name)}
                    display="block"
                    background="none"
                    color="red"
                  >
                    <CustomRemoveIcon />
                  </Button>
                </FormListContent>
              ))}
              <Divider />
              <Button
                onClick={() => add()}
                display="block"
                background="none"
                border="1px solid black"
                borderWidth="0 0 1px 0"
              >
                <CustomAddIcon />
                Adicionar plataforma
              </Button>
            </FormListContainer>
          )}
        </Form.List>
        <ButtonsContainer>
          <Button
            margin="0 10px"
            background="red"
            color="white"
            onClick={onCancel}
            mobileMargin="0 10px"
          >
            Cancelar
          </Button>
          <Button
            margin="0 10px"
            background="#00e012"
            color="white"
            htmlType="submit"
            isLoading={isLoadingGame}
            mobileMargin="0 10px"
          >
            Salvar
          </Button>
        </ButtonsContainer>
        <Divider />
        <AddCategoryContainer>
          <Input
            placeholder="Digite a categoria"
            border="1px solid black"
            borderWidth="0 0 1px 0"
            borderRadius="0"
            label="Categoria"
            name="addCategory"
            colon
            margin="30px 0"
            width="70%"
            onChange={onCategoryInputChange}
          />
          <Button
            background="#5be6ff"
            color="#494949"
            onClick={onAddCategoryClick}
            isLoading={isLoadingCategory}
          >
            Adicionar categoria
          </Button>
        </AddCategoryContainer>
      </Form>
    </CustomModal>
  );
}

GameFormModal.defaultProps = {
  info: {},
};

GameFormModal.propTypes = {
  open: PropTypes.bool.isRequired,
  cancelCallback: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  info: PropTypes.shape({
    _id: PropTypes.string,
  }),
  type: PropTypes.string.isRequired,
};

export default GameFormModal;
