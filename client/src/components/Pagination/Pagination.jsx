/* eslint-disable react/prop-types */
import React from 'react';
import { Pagination } from 'semantic-ui-react';

const PaginationComponent = ({ totalPages, onChange, activePage }) => (
  <Pagination
    activePage={activePage}
    ellipsisItem={null}
    totalPages={totalPages}
    onPageChange={onChange}
  />
);

export default PaginationComponent;
