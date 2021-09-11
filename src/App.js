import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Admin from "./component/Admin/Admin/Admin";
import Home from "./component/Home/Home";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";
import Login from "./component/Login/Login";
import NewsDetails from "./component/BodyContent/NewsDetails/NewsDetails";
import Politics from "./component/BodyContent/Politics/Politics";
import Culture from "./component/BodyContent/Culture/Culture";
import Sports from "./component/BodyContent/Sports/Sports";
import Fashion from "./component/BodyContent/Fashion/Fashion";
import AddAdmin from "./component/Admin/AddAdmin/AddAdmin";

export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/home">
            <Home />
          </Route>

          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>

          <Route path="/NewsDetails/:_id">
            <NewsDetails></NewsDetails>
          </Route>

          <PrivateRoute path="/politics">
            <Politics></Politics>
          </PrivateRoute>
          <Route path="/culture">
            <Culture></Culture>
          </Route>

          <PrivateRoute path="/sports">
            <Sports></Sports>
          </PrivateRoute>

          <Route path="/fashion">
            <Fashion></Fashion>
          </Route>

          <PrivateRoute path="/addAdmin">
            <AddAdmin></AddAdmin>
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>

          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider >
  );
}

export default App;
