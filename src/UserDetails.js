// UserDetails.js

import React from 'react';

const UserDetails = ({ user, onBackClick }) => {
  return (
    <div className="user-details">
      <h2>{user.name}'s Details</h2>
      <img src={`https://via.placeholder.com/150?text=${user.name}`} alt={`Avatar for ${user.name}`} />
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      {/* Add more details as needed */}
      <a href="#" onClick={onBackClick}>Back to Home</a>
    </div>
  );
};

export default UserDetails;
