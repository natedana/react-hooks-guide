import React from 'react';

import { Switch,Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import Landing from './pages/Landing'
import UseState from './pages/UseState'
import UseEffect from './pages/UseEffect'
import UseContext from './pages/UseContext'
import UseCallback from './pages/UseCallback'
import UseRef from './pages/UseRef'
import UseRouter from './pages/UseRouter'
import UseInputValue from './pages/UseInputValue'
import UseApi from './pages/UseApi'
import UseApiData from './pages/UseApiData'

import { TestContext } from './util'

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <TestContext.Provider value={ "some random context" }>
          <Switch>
            <Route exact path="/" component={Landing}/>
            <Route path="/state" component={UseState}/>
            <Route path="/effect" component={UseEffect}/>
            <Route path="/context" component={UseContext}/>
            <Route path="/callback" component={UseCallback}/>
            <Route path="/ref" component={UseRef}/>
            <Route path="/input" component={UseInputValue}/>
            <Route path="/router" component={UseRouter}/>
            <Route path="/api" component={UseApi}/>
            <Route path="/apidata" component={UseApiData}/>
          </Switch>
      </TestContext.Provider>
    </BrowserRouter>
  );
}

export default App;
