
import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HelpIcon from '@mui/icons-material/Help';
import SideMenu from '../views/app/SideMenu';
import React from 'react';

// header component for top of each page
const Header = (props) => {
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1, mt: 0 }}>
        <AppBar position="static">
          <Toolbar>
            <SideMenu anchor="left" />
            <Typography variant="h4" component="span">
              Diagrammable
            </Typography>
            <Typography component="span" sx={{ flexGrow: 1, ml: 1, textAlign: 'right' }}>
              declarative diagrams using MermaidJs</Typography>
            <Button color="inherit" sx={{ textAlign: 'right' }}>
              <HelpIcon />
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
}

export default Header;

/*
 These styles components have been replaced
 with the material Typography elements as seen. 
 
 const Title = styled.h2`
    padding: 0px;
    color: var(--heading);
`;

const SubTitle = styled.p`
    color: var(--prime);
    margin: 12px 6px;
`; 
*/
