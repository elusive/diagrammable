import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';


export function SelectionTabPanel(props) {

    const {children, value, index, ...other } = props;

    return (
        <div
            role="editor"
            hidden={value !== index}
            id={`selection-tab-panel-${index}`}
            aria-labelledby={`selection-tab-${index}`}
            {...other}>
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

SelectionTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  


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
