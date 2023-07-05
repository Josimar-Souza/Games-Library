import styled from 'styled-components';
import { Pagination } from 'antd';

export const PaginationContainer = styled.div`
  align-items: center;
  display: flex;
  margin-top: 10px;

  @media only screen and (max-width: 512px) {
    flex-direction: column;
    margin: 20px 0;
  }
`;

export const CustomPagination = styled(Pagination)``;

export const PaginationTitle = styled.p`
  font-size: 20px;
  margin-right: 15px;

  @media only screen and (max-width: 512px) {
    margin-bottom: 10px;
  }
`;
