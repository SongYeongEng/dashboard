import React, { useState, useEffect } from "react";
import './Instrument.css'

function Instrument() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://13.212.255.177/api/priceData/technical-test");
      const result = await response.json();
      setData(result);
    };

    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div >
      <table className="table">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Bid</th>
            <th>Ask</th>
            <th>Daily Change</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item) => (
            <tr key={item.Symbol}>
              <td>{item.Symbol}</td>
              <td>{item.Bid}</td>
              <td>{item.Ask}</td>
              <td>{item.DailyChange}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        pageSize={pageSize}
        totalItems={data.length}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

function Pagination({ currentPage, pageSize, totalItems, onPageChange }) {
  const totalPages = Math.ceil(totalItems / pageSize);
  const maxPages = 10;
  const startPage = Math.max(1, currentPage - Math.floor(maxPages / 2));
  const endPage = Math.min(totalPages, startPage + maxPages - 1);
  const pages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  return (
<nav>
      <ul className="pagination">
        <li className={currentPage === 1 ? 'page-item disabled' : 'page-item'}>
          <a className="page-link" onClick={() => onPageChange(currentPage - 1)}>Previous</a>
        </li>
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a
              className="page-link"
              onClick={() => onPageChange(page)}
              href="#"
            >
              {page}
            </a>
          </li>
        ))}
        <li className={currentPage === totalPages ? 'page-item disabled' : 'page-item'}>
          <a className="page-link" onClick={() => onPageChange(currentPage + 1)}>Next</a>
        </li>
      </ul>
    </nav>
  );
}

export default Instrument;