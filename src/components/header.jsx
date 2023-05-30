import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HelpIcon from '@mui/icons-material/Help';
import SideMenu from '../views/app/SideMenu';
import React from 'react';
import { Link } from 'react-router-dom';

// header component for top of each page
const Header = (props) => {
    return (
        <React.Fragment>
            <Box sx={{ flexGrow: 1, mt:0 }}>
                <AppBar position="static">
                    <Toolbar>
                    <SideMenu anchor="left" />
                    <Typography variant="h4" component="span">
                        Diagrammable
                    </Typography>
                        <Typography component="span" sx={{ flexGrow: 1, ml: 1, textAlign: 'right' }}>
                            declarative diagrams using MermaidJs</Typography>
                        <Button component={Link} to="/guide" color="inherit" sx={{ textAlign: 'right'}}>
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
const Title = styled.h2`
    padding: 0px;
    color: var(--heading);
`;

const SubTitle = styled.p`
    color: var(--prime);
    margin: 12px 6px;
`;
*/
