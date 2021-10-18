import { Redirect, Route, Switch } from 'react-router-dom';
import * as views from '../index';
import { Header } from '../../components/index';
import SideMenu from './SideMenu';
import { GlobalContextProvider } from '../../context/GlobalContext';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#9e9e9e',
    },
    secondary: {
      main: '#42A5F5',
    },
  },
});

function App() {
  return (
    <GlobalContextProvider>
      <ThemeProvider theme={theme}>
        <SideMenu>
          <Header />
          <Switch>
            <Route path="/select" component={views.Select} />
            <Route path="/edit" component={views.Edit} />
            <Route path="/guide" component={views.Guide} />
            <Redirect from="*" to="/" /> 
          </Switch>
        </SideMenu>
      </ThemeProvider>
    </GlobalContextProvider>
  );
}

export default App;
