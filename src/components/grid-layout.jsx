import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';

const GridLayout = (props) => {
    const {
        children,
        className
    } = props;


    return (
        <GridContainer className={className}>
            {children}
        </GridContainer>
    );
};

export default GridLayout;


const GridContainer = styled(motion.div)`
    display: flex;
    flex-direction: row;
    @media(max-width: 1024px) {
        flex-direction: column;
    }
`;
