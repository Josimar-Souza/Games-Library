import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { CustomPagination, PaginationTitle, PaginationContainer } from './paginationStyles';
import { gamesContext } from '../../context/gamesContext';

function Pagination({
  total,
  pageSize,
  defaultCurrent,
}) {
  const { setPagination, pagination } = useContext(gamesContext);

  const onPageChange = (page) => {
    const endIndex = pageSize * page;
    const startIndex = endIndex - pageSize;

    setPagination({ startIndex, endIndex, page });
  };

  return (
    <PaginationContainer>
      <PaginationTitle>Páginas:</PaginationTitle>
      <CustomPagination
        total={total}
        pageSize={pageSize}
        defaultCurrent={defaultCurrent}
        onChange={onPageChange}
        current={pagination.page}
      />
    </PaginationContainer>
  );
}

Pagination.propTypes = {
  total: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  defaultCurrent: PropTypes.number.isRequired,
};

export default Pagination;
