//import react from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import Button from './button';

const Select = (props) => {

    return (
        <SelectionCard>
            <CardTitle>Diagram Selector</CardTitle>
            <p>Select the type of diagram you wish to create:</p>
            <p>
               <Button text="Flowchart" /> 
            </p>
        </SelectionCard>
    );
};

export default Select;

const CardTitle = styled.h4`
    margin: 0;
    padding: 8px;
    background: var(--flash);
    color: var(--back);
`;

const SelectionCard = styled(motion.div)`
    border: 1px solid var(--second);
    padding: 0;
    width: 1200px;
    box-shadow: 8px 8px 4px grey;
    animate: {{ scale: [1,1,2,2,3,2,1,1]}};
`;
