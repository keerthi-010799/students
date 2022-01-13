import React from 'react';
import './pagination.css';
const Pagination = ({ dataPerPage, totalData, paginate,prevPage,nextPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
          <li className ='page-name'> <a onClick={prevPage} href='!#' className='page-link'>Prev</a></li>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
        <li className='page-name'><a onClick={nextPage} href='!#' className='page-link'>next</a></li>
      </ul>
    </nav>
  );
};

export default Pagination;
