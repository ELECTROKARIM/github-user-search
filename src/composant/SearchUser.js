// SearchUsers.js

import React, { useState } from 'react';

const SearchUsers = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search GitHub users..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchUsers;


// App.js


