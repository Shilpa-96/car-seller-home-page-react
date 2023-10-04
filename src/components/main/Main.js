import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import "./main.css";
import { useDispatch, useSelector } from "react-redux";

export default function Main({ ProductCard }) {
  const navigate = useNavigate();
  const currentPage = useSelector((state) => state.data.currentPage);
  const recordsPerPage = useSelector((state) => state.data.recordsPerPage);
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const data = useSelector((state) => state.data.data).slice(
    firstIndex,
    lastIndex
  );
  useEffect(() => {
    navigate(`/page/${currentPage}`);
  }, [currentPage]);

  return (
    <div className="main-container">
      <div className="product-card-container">
        {data.map((caritem, index) => {
          return <ProductCard caritem={caritem} key={index} />;
        })}
      </div>
    </div>
  );
}
