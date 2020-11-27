import React, {useContext } from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';

import DiagramEditor from './diagram-editor';
import { GlobalContext } from '../context/GlobalContext';
import DiagramPreview from './diagram-preview';

const Edit = () => {
    const { code, type, config, setCode } = useContext(GlobalContext);
    const formatCode = (text) => {
        var lines = text.split('\n');
        setCode(lines);
    }
    return (
        <>
            <EditingCard>
                <CardTitle>Edit Diagram</CardTitle>
                <DiagramEditor
                    language="javascript"  // TODO: change to mermaid
                    value={code.join('\n')}
                    type={type}
                    displayName={"display name"}
                    onChange={formatCode}
                />
                <DiagramPreview 
                    code={code.join('\n')} 
                    type={type}
                    config={config}
                    displayName={type.toString()}
                />
            </EditingCard>
        </>
    );
}

export default Edit;


const CardTitle = styled.h4`
    margin: 0;
    padding: 8px;
    background: var(--second);
    color: var(--back);
`;

const EditingCard = styled(motion.div)`
    border: 1px solid var(--second);
    padding: 0;
    box-shadow: 8px 8px 4px grey;
    animate: {{ scale: [1,1,2,2,3,2,1,1]}};
    transition: { duration: 20 };
    & > p {
        margin: 8px 12px;
    };
`;
