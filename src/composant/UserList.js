// UserList.js

import React from 'react';

const UserList = ({ users, onViewDetails }) => {
  return (
    <div className="user-list">
      {users.map(user => (
        <div key={user.id} className="user-card">
          <div className="user-avatar">
            <img src={user.avatar_url} alt={`${user.login} avatar`} />
          </div>
          <h3>{user.login}</h3>
          <p className="user-details">{user.bio}</p>
          <button onClick={() => onViewDetails(user.login)}>View Details</button>
        </div>
      ))}
    </div>
  );
};

export default UserList;
