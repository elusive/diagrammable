//import react from 'react';
import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

// header component for top of each page
const Header = (props) => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <Button color="inherit">Help</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <Title>RND Diagrams</Title>
            <SubTitle>Easily create and store diagrams without worrying about keeping 
               track of the original files for later editing.</SubTitle>
        </>
    );
}

export default Header;

const Title = styled.h2`
    padding: 0px;
    color: var(--heading);
`;

const SubTitle = styled.p`
    color: var(--prime);
`;
