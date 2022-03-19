import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SelectIcon from '@mui/icons-material/Addchart';
import EditIcon from '@mui/icons-material/DesignServices';
import GuideIcon from '@mui/icons-material/MenuBook';
import SettingsIcon from '@mui/icons-material/Settings';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';


function ListItemLink(props) {
  const { icon, primary, to } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef(function Link(itemProps, ref) {
        return <RouterLink to={to} ref={ref} {...itemProps} role={undefined} />;
      }),
    [to],
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};


export default function SideMenu(props) {
  const [state, setState] = React.useState({
    left: false,
    right: false,
    top: false,
    bottom: false
  });
  const [anchor] = React.useState(props.anchor)
  

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
  
    setState({ ...state, [anchor]: open });
  };
  
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItemLink to="/select" primary="Chart Selector" icon={<SelectIcon />} />
        <ListItemLink to="/edit" primary="Editor" icon={<EditIcon />} />
        <ListItemLink to="/guide" primary="User Guide" icon={<GuideIcon />} />
      </List>
      <Divider />
      <List>
        <ListItemLink to="/settings" primary="Preferences" icon={<SettingsIcon />} />
      </List>
    </Box>
  );

  return (
    <React.Fragment key="sidemenu">
      <Drawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(false)}>
        {list('left')}
      </Drawer>
      <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
        >
            <MenuIcon />
        </IconButton>
    </React.Fragment>
  );

};

