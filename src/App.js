import './App.css';
import React from "react";
import Header from "./components/Header";
import ChatControl from "./components/ChatControl";
import Signin from "./components/SignIn";
import CreateChatRoom from './components/CreateChatRoom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/CreateChatRoom">
          <CreateChatRoom />
        </Route>

        <Route path="/signin">
          <Signin />
        </Route>

        <Route path="/">
          <ChatControl />
        </Route>

      </Switch>
    </Router>
  );
}


export default App;
