import React from "react";
import { Link } from "react-router-dom";

const UserItems = ({ user }) => {
  const { login, avatar_url } = user;
  return (
    <div className="card mt-3 p-3 text-center">
      <div className="card-body ">
        <img
          src={avatar_url}
          alt=""
          style={{ width: "80px", borderRadius: "50%" }}
        />
        <h3>{login}</h3>
        <Link to={`/user/${login}`} className="btn btn-danger">
          More
        </Link>
      </div>
    </div>
  );
};

export default UserItems;
