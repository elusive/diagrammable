import React, { useContext } from 'react'
import DiagramEditor from './diagram-editor'
import DiagramPreview from './diagram-preview'
import { GridLayout } from '../../components/index'
import { GlobalContext } from '../../context/GlobalContext'
import ExportsContainer from '../../components/export-actions'
import { EditingCard, EditCardTitle, PreviewCard, PreviewCardTitle } from './styled'

const Edit = () => {
    const { code, type, config, setCode } = useContext(GlobalContext)
    const formatCode = (text) => {
        var lines = text.split('\n')
        setCode(lines)
    }
    return (
        <React.Fragment>
            <GridLayout className="grid-container" colums="1fr 2fr" gap={6}>
                <EditingCard>
                    <EditCardTitle>Edit Diagram</EditCardTitle>
                    <DiagramEditor
                        language="mermaid"
                        value={code.join('\n')}
                        type={type}
                        displayName={'display name'}
                        onChange={formatCode}
                    />
                </EditingCard>
                <PreviewCard>
                    <PreviewCardTitle>Preview Diagram</PreviewCardTitle>
                    <ExportsContainer
                        code={code}
                        config={config}
                        type={type}
                        displayName={'display name'}
                    />
                    <DiagramPreview
                        code={code.join('\n')}
                        type={type}
                        config={config}
                        displayName={type.toString()}
                    />
                </PreviewCard>
            </GridLayout>
        </React.Fragment>
    )
}

export default Edit
