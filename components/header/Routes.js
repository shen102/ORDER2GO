import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      {/* Your routes and components */}
      <Switch>
        {/* Define your routes here */}
        <Route path="/about" component={Services} />
        {/* Other routes */}
      </Switch>
    </Router>
  );
}

export default App;