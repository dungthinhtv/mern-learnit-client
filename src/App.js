import React from 'react';
import './App.css';

import AuthContextProvider from './contexts/AuthContext';
import PostContextProvider from './contexts/PostContext';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/layout/Landing';
import ProtectedRoute from './components/routing/ProtectedRoute';
import Dashboard from './views/Dashboard';
import About from './views/About';
import Auth from './views/Auth';

export default function App() {
  return (
    <AuthContextProvider>
      <PostContextProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route
              exact
              path="/login"
              render={(props) => <Auth {...props} authRoute="login" />}
            />
            <Route
              exact
              path="/register"
              render={(props) => <Auth {...props} authRoute="register" />}
            />
            <ProtectedRoute exact path="/dashboard" component={Dashboard} />
            <ProtectedRoute exact path="/about" component={About} />
          </Switch>
        </Router>
      </PostContextProvider>
    </AuthContextProvider>
  );
}
