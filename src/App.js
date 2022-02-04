import React from "react";
import Header from "./Header";
import TinderCards from "./TinderCards";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SwipeButtons from "./SwipeButtons";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";
import LoginScreen from "./LoginScreen";

function App() {
  const user = true;
  return (
    <div className="App">
      {user ? (
          <Router>
            <Switch>
              <Route path="/chat/:person">
                <Header backButton="/chat" />
                <ChatScreen/>
              </Route>
              <Route path="/chat">
                <Header backButton="/" />
                <Chats />
              </Route>
              <Route path="/home">
                <Header />
                <TinderCards />
                <SwipeButtons />
              </Route>
              <Route path="/">
                <LoginScreen />
              </Route>
            </Switch>
          </Router>
      ) : (
        <LoginScreen />
      )}
    </div>
  );
}

export default App;
