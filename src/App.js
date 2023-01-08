import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Settings from './pages/Settings';
import Ranking from './pages/Ranking';
import FeedBack from './pages/FeedBack';
import Game from './pages/Game';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/settings" component={ Settings } />
        <Route path="/ranking" component={ Ranking } />
        <Route path="/feedback" component={ FeedBack } />
        <Route path="/game" component={ Game } />
      </Switch>
    </div>
  );
}
