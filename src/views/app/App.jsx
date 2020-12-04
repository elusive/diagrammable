import { Redirect, Route, Switch } from 'react-router-dom';
import * as views from '../index';
import { Header } from '../../components/index';
import SideMenu from './SideMenu';
import { GlobalContextProvider } from '../../context/GlobalContext';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

function App() {
  return (
    <GlobalContextProvider>
      <SideMenu>
        <Header />
        <Switch>
          <Route path="/select" component={views.Select} />
          <Route path="/edit" component={views.Edit} />
          <Route path="/guide" component={views.Guide} />
          <Redirect from="*" to="/" /> 
        </Switch>
      </SideMenu>
    </GlobalContextProvider>
  );
}

export default App;
