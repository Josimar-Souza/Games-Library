import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { CustomPagination, PaginationTitle, PaginationContainer } from './paginationStyles';
import { gamesContext } from '../../context/gamesContext';

function Pagination({
  total,
  pageSize,
  defaultCurrent,
  title,
  pageTitle,
}) {
  const { setPagination, pagination } = useContext(gamesContext);

  const onPageChange = (page) => {
    const endIndex = pageSize * page;
    const startIndex = endIndex - pageSize;

    setPagination({ startIndex, endIndex, page });
  };

  return (
    <PaginationContainer>
      {pageTitle ? <PaginationTitle>{title}</PaginationTitle> : null}
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

Pagination.defaultProps = {
  title: '',
  pageTitle: false,
};

Pagination.propTypes = {
  total: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  defaultCurrent: PropTypes.number.isRequired,
  title: PropTypes.string,
  pageTitle: PropTypes.bool,
};

export default Pagination;
