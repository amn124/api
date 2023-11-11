// UserList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserDetails from './UserDetails';
import './UserList.css';

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setListOfUsers(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleBackClick = () => {
    setSelectedUser(null);
  };

  return (
    <div className="user-list-container">
      <h1>User List</h1>
      <div className="user-list">
        {listOfUsers.map((user) => (
          <div
            key={user.id}
            className="user-card"
            onClick={() => handleUserClick(user)}
          >
            <img
              src={`https://source.unsplash.com/150x150/?person`}
              alt={`Avatar for ${user.name}`}
            />
            <p>{user.name}</p>
            <p>Email: {user.email}</p>
          </div>
        ))}
      </div>

      {selectedUser && (
        <UserDetails user={selectedUser} onBackClick={handleBackClick} />
      )}
    </div>
  );
};

export default UserList;





