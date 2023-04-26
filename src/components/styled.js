
import {motion} from 'framer-motion';
import styled from 'styled-components';

export const CardTitle = styled.h4`
    margin: 0;
    padding: 8px;
    background: var(--prime);
    color: var(--back-light);
`;

export const ExportCard = styled.div`
    display: flex;
    flex-direction:row-reverse;
    padding: 0;
    margin: 0;
    width: auto;
    align-content: flex-end;
    z-index:99;
    background: transparent;
    color: var(--prime);
`;

export const PreviewControlsDiv = styled(motion.div)`
    display: flex;
    flex-direction:row;
    padding: 0;
    margin: 0;
    width: auto;
    align-self: flex-start;
    align-content: 
    border: 1px solid var(--prime);
    z-index:99;
`;

export const PreviewControlsDirectionals = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-content: center;
    font-size: 20pt;
    padding: 0;
`

export const PreviewControlsGrid = styled(motion.div)`
    position: absolute;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.2em;

    button {
        padding: 5px 7px;
    }

    .zoom-in {
        grid-column: 3;
        grid-row: 1;
    }

    .zoom-out {
        grid-column: 3;
        grid-row: 3;
    }

    .reset {
        grid-column: 2;
        grid-row: 2;
    }

    .up {
        grid-column: 2;
        grid-row: 1;
    }

    .down {
        grid-column: 2;
        grid-row: 3;
    }

    .left {
        grid-column: 1;
        grid-row: 2;
    }

    .right {
        grid-column: 3;
        grid-row: 2;
    }


`
