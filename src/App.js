import React, { useState } from 'react';
import './App.css'; // Importez le fichier CSS
import SearchUsers from './composant/SearchUser';
import UserList from './composant/UserList';
import { searchUsers, getUserDetails } from './composant/api';; 

const App = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    try {
      const data = await searchUsers(query);
      setUsers(data);
      setError(null);
    } catch (error) {
      setError('An error occurred. Please try again later.');
      setUsers([]);
    }
  };

  const handleViewDetails = async (username) => {
    try {
      const user = await getUserDetails(username);
      console.log('User details:', user); // Affichez les détails de l'utilisateur dans la console par exemple
      // Mettez en œuvre la logique pour afficher les détails de l'utilisateur dans votre application
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  return (
    <div className="App">
      <h1>GitHub User Search</h1>
      <SearchUsers onSearch={handleSearch} />
      {error && <p>{error}</p>}
      <div className="user-box">
        <UserList users={users} onViewDetails={handleViewDetails} />
      </div>
    </div>
  );
};

export default App;

