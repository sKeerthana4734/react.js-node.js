import React from 'react';

import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';
import Login from './components/Login';
import Signup from './components/Signup';
import Otp from './components/Otp';
import Front from './components/Front';

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <Route path="/" exact component={Front} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/signup/otp" component={Otp} />
            <Route path="/join" exact component={Join} />
            <Route path="/chat" component={Chat} />
        </Router>
    );
}

export default App;
