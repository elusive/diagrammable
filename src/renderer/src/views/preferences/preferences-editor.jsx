import React from 'react'

import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'

import { Controlled as ControlledEditor } from 'react-codemirror2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons'
import { EditorContainer, EditCardDisplayName } from './styled'

const PreferencesEditor = (props) => {
    const { value, onChange } = props
    const [open, setOpen] = React.useState(true)

    const handleChange = (editor, data, value) => {
        onChange(value)
    }

    return (
        <EditorContainer className={`editor-container ${open ? '' : 'collapsed'}`}>
            <EditCardDisplayName>
                Config (for Mermaid)
                <button
                    type="button"
                    className="expand-collapse-btn"
                    onClick={() => setOpen((prevOpen) => !prevOpen)}
                >
                    <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
                </button>
            </EditCardDisplayName>
            <ControlledEditor
                onBeforeChange={handleChange}
                value={value}
                className="code-mirror-wrapper"
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: 'json',
                    theme: 'material',
                    lineNumbers: true,
                }}
            />
        </EditorContainer>
    )
}

export default PreferencesEditor
