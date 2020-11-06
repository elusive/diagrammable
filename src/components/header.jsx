//import react from 'react';
import styled from 'styled-components';


const Header = (props) => {
    return (
        <>
            <Title>RND Diagrams</Title>
            <p>Easily create and store diagrams without worrying about keeping 
               track of the original files for later editing.</p>
        </>
    );
}

export default Header;

const Title = styled.h2`
    padding: 20px;
    color: var(--heading);
`;
