import React from "react";
import "./footer.css";
import { useDispatch, useSelector } from "react-redux";

import { dataActions } from "../../store/dataSlice";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

export default function Footer() {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.data.currentPage);
  const dataLength = useSelector((state) => state.data.data).length;
  const recordsPerPage = useSelector((state) => state.data.recordsPerPage);
  const npages = Math.ceil(dataLength / recordsPerPage);
  const pagesArray = [...Array(npages + 1).keys()].slice(1);
  // console.log(pagesArray);

  const changePage = (n) => {
    dispatch(dataActions.updatePage(n));
  };

  return (
    <div className="footer-container">
      <div className="items-no">
        {recordsPerPage * currentPage} from {npages * recordsPerPage}
      </div>
      <div className="pagination">
        <ul>
          <li className="previoues">
            <button disabled={currentPage === 1 ? true : false}>
              <GrFormPrevious onClick={() => changePage(currentPage - 1)} />
            </button>
          </li>
          {pagesArray.map((n, i) => (
            <li
              className={`page-no ${currentPage === n ? "active" : ""}`}
              key={i}
              onClick={() => changePage(n)}
            >
              {n}
            </li>
          ))}

          <li className="previoues">
            <button disabled={currentPage === npages ? true : false}>
              <GrFormNext onClick={() => changePage(currentPage + 1)} />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
