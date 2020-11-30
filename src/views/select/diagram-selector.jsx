//import react from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Select = (props) => {
    return (
        <SelectionCard>
            <CardTitle>Diagram Selector</CardTitle>
            <p>Select the type of diagram you wish to create:</p>
        </SelectionCard>
    );
};

export default Select;

const CardTitle = styled.h4`
    margin: 0;
    padding: 2rem;
    background: var(--flash);
    color: var(--back);
`;

const SelectionCard = styled(motion.div)`
    border: 1px solid var(--second);
    margin: 12px;
    padding: 0;
    width: 800px;
    box-shadow: 8px 8px 4px grey;
    animate: {
         {
            scale: [1, 3, 1];
        }
    }
`;
