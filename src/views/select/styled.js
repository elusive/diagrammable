
import styled from 'styled-components';
import {motion} from 'framer-motion';

export const SelectionCard = styled(motion.div)`
    border: 1px solid var(--second);
    padding: 0;
    box-shadow: 8px 8px 4px grey;
    animate: {{ scale: [1,1,2,2,3,2,1,1]}};
    transition: { duration: 20 };
    & > p {
        margin: 8px 12px;
    };
`;
