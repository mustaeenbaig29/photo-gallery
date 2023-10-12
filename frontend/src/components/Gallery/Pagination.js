import React from 'react';

const Pagination = ({ page, setPage, disabledPrev }) => {
  const handleNextClick = () => {
    setPage(page + 1);
    window.scrollTo(0, 0); 
  };

  return (
    <div className='pagination'>
      <button onClick={() => setPage(page - 1)} disabled={disabledPrev}>
        Previous
      </button>
      <span>Page {page}</span>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
}

export default Pagination;
