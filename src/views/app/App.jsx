import { Redirect, Route, Switch } from 'react-router-dom';
import * as views from '../index';
import { Header } from '../../components/index';
import { GlobalContextProvider } from '../../context/GlobalContext';

function App() {
  return (
    <GlobalContextProvider>
      <Header />
      <Switch>
        <Route path="/select" component={views.Select} />
        <Route path="/edit" component={views.Edit} />
        <Route path="/guide" component={views.Guide} />
        <Redirect from="*" to="/" /> 
      </Switch>
    </GlobalContextProvider>
  );
}

export default App;
