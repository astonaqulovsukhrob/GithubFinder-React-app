import React from "react";
import UserItems from "./UserItems";

const Users = ({ users, loading }) => {
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center spinner">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );  
  } else {
    return (
      <div className="grid">
        {users.map((user) => {
          return <UserItems key={user.id} user={user} />;
        })}
      </div>
    );
  }
};

export default Users;
