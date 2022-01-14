
import styled from 'styled-components';
import {motion} from 'framer-motion';


/*
 * Styled components for the edit view.
 */

export const EditorContainer = styled(motion.div)`
    display: flex;
    align-content: justify;
    width: auto;
    height: auto;
    background: var(--back-edit);
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
    max-width: 950px;
    height: auto;
    min-height: 85vh;
    margin: 20px;
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
    margin: 20px;
    width: auto;
    height: auto;
    min-height: 85vh;
    max-width: 950px;
    min-width: 750px;
    background: var(--back-edit);
    height: 60vh;
    box-shadow: 8px 8px 4px grey;
    animate: {{ scale: [1,1,2,2,3,2,1,1]}};
    transition: { duration: 20 };
    & > p {
        margin: 8px 12px;
    };
`;

