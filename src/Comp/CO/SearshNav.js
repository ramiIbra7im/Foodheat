import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // لو بتستخدم Font Awesome

function SearchBar() {
  const [showInput, setShowInput] = useState(false);

  const toggleInput = (e) => {
    e.preventDefault();
    setShowInput((prev) => !prev);
  };

  return (
    <form className="d-flex align-items-center " role="search" onSubmit={toggleInput}>
      <div className={`search-input-container ${showInput ? 'show' : ''}`}>
        <input
          type="search"
          className="form-control me-2"
          placeholder="Search"
          aria-label="Search"
        />
      </div>
      <button className="btn btn-search border-0 " type="submit">
        <i className="fas fa-search fw-bold"></i>
      </button>
    </form>
  );
}

export default SearchBar;
