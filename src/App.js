//import react from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as components from './components/index';
import { GlobalContextProvider } from './context/GlobalContext';

const Header = components.Header;

function App() {
  return (
    <GlobalContextProvider>
      <Header />
      <Switch>
        <Route path="/select" component={components.Select} />
        <Route path="/edit" component={components.Edit} />
        <Route path="/guide" component={components.Guide} />
        <Redirect from="*" to="/" /> 
      </Switch>
    </GlobalContextProvider>
  );
}

export default App;
