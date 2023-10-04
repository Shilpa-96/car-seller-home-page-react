import React, { useState } from "react";
import "./header.css";
import { BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { dataActions } from "../../store/dataSlice";

function Header() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    let q = e.target.value.toLowerCase();
    setQuery(e.target.value);
    dispatch(dataActions.searchedData(q));
  };

  return (
    <section>
      <div className="header-container">
        <div className="search">
          <input
            type="text"
            placeholder="search.."
            value={query}
            onChange={handleChange}
          />
          <BsSearch className="search-icon" />
        </div>
        <div className="relevance">
          <select name="relevance" id="relevance">
            <option value="relevance">Relevance</option>
            <option value="relevance1">Relevance 1</option>
            <option value="relevance2">Relevance 2</option>
            <option value="relevance3">Relevance 3</option>
          </select>
        </div>
        <div className="brands">
          <select name="brands" id="brands">
            <option value="allbrands">All brands</option>
            <option value="SUV">SUV</option>
            <option value="BMW">BMW</option>
            <option value="LAMB">LAMB</option>
          </select>
        </div>
      </div>
    </section>
  );
}

export default Header;
