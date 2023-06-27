import styled from 'styled-components';
import { Modal } from 'antd';
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';

export const CustomModal = styled(Modal)``;

export const FormListContainer = styled.div``;

export const FormListContent = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const CustomRemoveIcon = styled(MinusCircleOutlined)`
  font-size: 22px;
`;

export const CustomAddIcon = styled(PlusCircleOutlined)`
  font-size: 16px;
`;

export const FormSectionTitle = styled.h1`
  font-size: 20px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const AddCategoryContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  min-height: 50px;
  width: 100%;
`;
