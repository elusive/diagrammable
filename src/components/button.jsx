//import react from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';

const Button = (props) => {
    return (
        <AnimatedButton>{props.text}</AnimatedButton>
    );
}

export default Button;

const AnimatedButton = styled(motion.button)`
    margin: 8px;
    padding: 22px;
    animate: {{ scale: 2 }};
    border-radius: 12px; 
`;
