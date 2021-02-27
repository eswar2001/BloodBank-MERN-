import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom'
import { Register } from './Register'
import { ShowData } from './showdetails'
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <ShowData />
          </Route>
          <Route path="/signup">
            <Register />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
