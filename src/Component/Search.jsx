import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Search() {
  const [category, setCategory] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  let currentTheme = document.body.getAttribute("data-bs-theme");
  const dropdownRef = useRef(null);
  const categories = useSelector((state) => state.categories);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const input = e.target.value;
    setCategory(input);
    const filtered = categories.filter((item) =>
      item.toLowerCase().startsWith(input.toLowerCase())
    );
    setFilteredSuggestions(filtered);
  };

  const handleSuggestionClick = (suggestion) => {
    setCategory(suggestion);
    setFilteredSuggestions([]);
  };

  const submit = (e) => {
    e.preventDefault();
    if (!category.trim()) {
      alert("Please write something to search.");
      setFilteredSuggestions([]);
      return;
    }
    navigate(`/category/${category}`);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setFilteredSuggestions([]);
    }
  };
  useEffect(() => {}, [currentTheme]);
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [currentTheme]);

  return (
    <div ref={dropdownRef}>
      <form
        className="d-flex w-100 mt-4 justify-content-center col-12"
        role="search"
      >
        <div className="search  col-8">
          <input
            className="form-control me-2"
            type="search"
            onChange={handleChange}
            value={category}
            placeholder="enter category"
            aria-label="Search"
          />
        </div>
        <div className="mx-2">
          <button
            className={`btn btn-outline-success searchBtn`}
            onClick={submit}
            type="submit"
          >
            <i className="bi bi-search"></i>
          </button>
        </div>
      </form>
      {filteredSuggestions.length > 0 && (
        <ul
          className={`dropdown-list ${currentTheme === "light" ? "light" : ""}`}
        >
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              className="suggestion"
              onClick={() => {
                handleSuggestionClick(suggestion);
              }}
            >
              <i className="bi bi-graph-up-arrow"></i> {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
