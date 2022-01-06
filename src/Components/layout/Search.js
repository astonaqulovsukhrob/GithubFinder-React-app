import React, { useState } from "react";

function Search({ serchUsers, clearUser, userLength, showAlert }) {
  const [text, setText] = useState("");

  const handleChenge = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      showAlert("Please enter something", "danger");
    } else {
      serchUsers(text);
      setText("");
    }
  };


  return (
    <>
      <form onSubmit={handleSubmit} className="d-block w-50 m-auto">
        <div className="my-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Search Github Users
          </label>
          <input
            type="text"
            className="form-control"
            id="userName"
            onChange={handleChenge}
            value={text}
          />
        </div>

        <button className="btn btn-primary d-block w-100">Search</button>
      </form>
      {userLength && (
        <button
          onClick={clearUser}
          className="btn btn-danger w-50 m-auto mt-2 d-block"
        >
          Clear
        </button>
      )}
    </>
  );
}

export default Search;
