import React from 'react';
import { Link } from "react-router-dom";

function Pagination({recPerPage, totalRec, paginate}) {
  const pageNumber = [];

  for(let i=1; i<=Math.ceil(totalRec / recPerPage); i++) {
      pageNumber.push(i);
  }
  
  return (
    <nav>
        <ul className="pagination justify-content-center">
            {pageNumber.map(number => (
                <li key={number} className="page-item">
                    <Link onClick={()=>paginate(number)} 
                       to="/"
                       className="page-link text-dark p-3">
                        {number}
                    </Link>
                </li>
            ))}
        </ul>
    </nav>
  );
}

export default Pagination;