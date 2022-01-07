import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Alert from "./Components/layout/Alert";
import Navbar from "./Components/layout/Navbar";
import Search from "./Components/layout/Search";
import User from "./Components/users/User";
import Users from "./Components/users/Users";

const App = () => {
  // class component
  // state = {
  //   users: [],
  //   user: {},
  //   alert: null,
  //   loading: false,
  // };

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, getRepos] = useState(null);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  // search users api
  const serchUsers = async (text) => {
    setLoading(true);

    // class component
    // this.setState({ loading: true });

    const api = `https://api.github.com/search/users?q=${text}&client_id${process.env.REACT_APP_GITHUB_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
    const results = await fetch(api);
    const data = await results.json();
    setUsers(data.items, setLoading(false));

    // class component
    // this.setState({
    //   users: data.items,
    //   loading: false,
    // });
  };

  // Delete users
  const clearUser = () => {
    setUsers([]);
    setAlert({ massage: "Clear Users", classType: "danger" });
    setTimeout(() => {
      setAlert(null);

      // class component
      // this.setState({
      //   alert: null,
      // });
    }, 3000);
  };

  // ShowAlert
  const showAlert = (massage, classType) => {
    setAlert({ massage: massage, classType: classType });
    // class component
    // this.setState({
    //   alert: { massege: massage, classType: classType },
    // });

    setTimeout(() => {
      setAlert(null);

      // class component
      // this.setState({
      //   alert: null,
      // });
    }, 3000);
  };

  const getUser = async (user) => {
    setLoading(true);
    // class component
    // this.setState({ loading: true });

    const api = `https://api.github.com/users/${user}?client_id${process.env.REACT_APP_GITHUB_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
    const results = await fetch(api);
    const data = await results.json();
    setUser(data, setLoading(false));

    // class component
    // this.setState({
    //   user: data,
    //   loading: false,
    // });
  };

  const userRepos = async (user) => {
    setLoading(true);

    const api = `https://api.github.com/users/${user}/repos?sort=created?client_id${process.env.REACT_APP_GITHUB_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
    const results = await fetch(api);
    const data = await results.json();
    getRepos(data, setLoading(false));
  };

  return (
    <Router>
      <>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Alert alert={alert} />
              <Search
                serchUsers={serchUsers}
                clearUser={clearUser}
                userLength={users.length ? true : false}
                showAlert={showAlert}
              />
              <Users users={users} loading={loading} />
            </Route>
            <Route
              exact
              path="/user/:login"
              render={(props) => (
                <User
                  {...props}
                  getUser={getUser}
                  user={user}
                  userRepos={userRepos}
                  repos={repos}
                />
              )}
            />
          </Switch>
        </div>
      </>
    </Router>
  );
};

export default App;
