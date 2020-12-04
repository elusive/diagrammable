//import react from 'react';
import styled from 'styled-components';
import MenuBar from './menubar';

// header component for top of each page
const Header = (props) => {
    return (
        <>
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
