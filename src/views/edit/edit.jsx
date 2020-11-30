import React, {useContext } from 'react';
import DiagramEditor from './diagram-editor';
import DiagramPreview from './diagram-preview';
import { GridLayout } from '../../components/index';
import { GlobalContext } from '../../context/GlobalContext';
import {
    EditingCard,
    EditCardTitle,
    PreviewCard,
    PreviewCardTitle
} from './styled';

const Edit = () => {
    const { code, type, config, setCode } = useContext(GlobalContext);
    const formatCode = (text) => {
        var lines = text.split('\n');
        setCode(lines);
    }
    return (
        <GridLayout className="grid-container" colums="1fr 1fr" gap={8}>
            <EditingCard>
                <EditCardTitle>Edit Diagram</EditCardTitle>
                <DiagramEditor
                    language="javascript"  // TODO: change to mermaid
                    value={code.join('\n')}
                    type={type}
                    displayName={"display name"}
                    onChange={formatCode}
                />
            </EditingCard>
            <PreviewCard>
                <PreviewCardTitle>Preview Diagram</PreviewCardTitle>
                <DiagramPreview 
                    code={code.join('\n')} 
                    type={type}
                    config={config}
                    displayName={type.toString()}
                />
            </PreviewCard>
        </GridLayout>
    );
}

export default Edit;

