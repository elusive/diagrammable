
import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SideMenu from '../views/app/SideMenu';
import React from 'react';

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
                    <Typography variant="h6" component="span" sx={{ flexGrow: 1, ml: 1 }}> by The RND Group</Typography>
                    <Button color="inherit" sx={{ textAlign: 'right'}}>Help</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <Typography variant="subtitle1" component="div" sx={{ margin: 1.5, flexGrow: 1, textAlign: 'right' }}>Easily create and store diagrams without worrying about keeping 
               track of the original files for later editing.</Typography>
        </React.Fragment>
    );
}

export default Header;

const Title = styled.h2`
    padding: 0px;
    color: var(--heading);
`;

const SubTitle = styled.p`
    color: var(--prime);
    margin: 12px 6px;
`;
