import React from 'react';
import PropTypes from 'prop-types';
import CustomPagination from './paginationStyles';

function Pagination({
  total,
  pageSize,
  defaultCurrent,
}) {
  return (
    <CustomPagination total={total} pageSize={pageSize} defaultCurrent={defaultCurrent} />
  );
}

Pagination.propTypes = {
  total: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  defaultCurrent: PropTypes.number.isRequired,
};

export default Pagination;
