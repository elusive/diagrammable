//import react from 'react';
import styled from 'styled-components';
import motion from 'framer-motion';

const Button = (props) => {
    return (<AnimatedButton>{props.text}</AnimatedButton>);
}

export default Button;

const AnimatedButton = styled(motion.button)`
    initial: {{ opacity: 0, y: 50, scale: 0.3 }}
    animate: {{ opacity: 1, y: 0, scale: 1 }}
    border-radius: 8px; 
`;
