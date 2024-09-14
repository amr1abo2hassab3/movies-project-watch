import React from "react";
import ReactPaginate from "react-paginate";

const PaginationCom = ({ fnGetPage}) => {
  const handlePageClick = (data) => {
    fnGetPage(data.selected + 1);
  };
  const countpage = 500;

  return (
    <ReactPaginate
      //   breakLabel="..."
      nextLabel="التالى"
      onPageChange={handlePageClick}
      marginPagesDisplayed={1}
      pageRangeDisplayed={1}
      pageCount={countpage}
      previousLabel="السابق"
      containerClassName={"pagination justify-content-center p-3"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link mx-1"}
      previousClassName={"page-item"}
      nextClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextLinkClassName={"page-link"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      activeClassName={"active"}
    />
  );
};

export default PaginationCom;
