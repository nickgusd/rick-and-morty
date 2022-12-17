/* eslint-disable react/prop-types */
import React from "react";
import { Pagination } from "semantic-ui-react";

const PaginationComponent = ({ totalPages, onChange, activePage }) => {
  if (totalPages <= 1) return null;

  return (
    <Pagination
      activePage={activePage || 1}
      ellipsisItem={null}
      totalPages={totalPages}
      onPageChange={onChange}
    />
  );
};

export default PaginationComponent;
