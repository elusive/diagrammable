//import react from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as components from './components/index';

const Header = components.Header;

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/select" component={components.Select} />
        <Route path="/editor" component={components.Editor} />
        <Route path="/guide" component={components.Guide} />
        <Redirect from="*" to="/" /> 
      </Switch>
    </>
  );
}

export default App;
