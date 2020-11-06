//import react from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Header from './components/header';
import Select from './components/diagram-selector';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/select" component={Select} />
        <Redirect from="*" to="/" /> 
      </Switch>
    </>
  );
}

export default App;
