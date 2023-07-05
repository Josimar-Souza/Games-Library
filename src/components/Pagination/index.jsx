import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import CustomPagination from './paginationStyles';
import { gamesContext } from '../../context/gamesContext';

function Pagination({
  total,
  pageSize,
  defaultCurrent,
}) {
  const { setPagination } = useContext(gamesContext);

  const onPageChange = (page) => {
    const endIndex = pageSize * page;
    const startIndex = endIndex - pageSize;

    setPagination({ startIndex, endIndex, page });
  };

  return (
    <CustomPagination
      total={total}
      pageSize={pageSize}
      defaultCurrent={defaultCurrent}
      onChange={onPageChange}
    />
  );
}

Pagination.propTypes = {
  total: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  defaultCurrent: PropTypes.number.isRequired,
};

export default Pagination;
