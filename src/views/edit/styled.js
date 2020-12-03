
import styled from 'styled-components';
import {motion} from 'framer-motion';


/*
 * Styled components for the edit view.
 */

export const EditorContainer = styled(motion.div)`
    min-width: 500px;
    height: 700px;
    background: var(--back-light);
`;

export const EditCardTitle = styled.h4`
    margin: 0;
    padding: 8px;
    background: var(--prime);
    color: var(--back);
    display: flex;
    justify-content: space-between;
    color: white;
    padding: 0.5rem 0.5rem 0.5rem 1rem;
`;

export const EditCardDisplayName = styled.h5`
    margin: 0;
    padding: 0;
    text-align: right;
    margin-right: 8px; 
    color: var(--text);
`;

export const EditingCard = styled(motion.div)`
    flex: auto;
    max-width: 600px;
    height: 60vh;
    margin-right: 20px;
    border: 1px solid var(--prime);
    padding: 0;
    box-shadow: 8px 8px 4px grey;
    animate: {{ scale: [1,1,2,2,3,2,1,1]}};
    transition: { duration: 20 };
    & > p {
        margin: 8px 12px;
    };
`;

export const PreviewCardTitle = styled.h4`
    margin: 0;
    padding: 8px;
    background: var(--prime);
    color: var(--back);
    display: flex;
    justify-content: space-between;
    color: white;
    padding: 0.5rem 0.5rem 0.5rem 1rem;
`;

export const PreviewCard = styled(motion.div)`
    border: 1px solid var(--prime);
    padding: 0;
    min-width: 550px;
    background: var(--back-light);
    height: 60vh;
    box-shadow: 8px 8px 4px grey;
    animate: {{ scale: [1,1,2,2,3,2,1,1]}};
    transition: { duration: 20 };
    & > p {
        margin: 8px 12px;
    };
`;

