/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React from "react";
import { Pagination } from "semantic-ui-react";
// import { useMediaQuery } from "react-responsive";

const PaginationComponent = ({ totalPages, onChange, activePage }) => {
  // const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  if (totalPages <= 1) return null;

  return (
    <Pagination
      activePage={activePage || 1}
      ellipsisItem={null}
      totalPages={totalPages}
      onPageChange={onChange}
      firstItem
      lastItem
      siblingRange={1}
    />
  );
};

export default PaginationComponent;
