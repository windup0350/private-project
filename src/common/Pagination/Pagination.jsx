import ReactPaginate from "react-paginate";
import "./Pagination.style.css";

const Pagination = ({ forcePage, pageCount, onClickPage }) => {
  return (
    <div className="pagination-container">
      <ReactPaginate
        onPageChange={onClickPage}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        forcePage={forcePage}
        previousLabel="<"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextLabel=">"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
