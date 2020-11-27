import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons';

const DiagramEditor = (props) => {
    const {
        language,
        value,
        displayName,
        onChange
    } = props;
    const [open, setOpen] = React.useState(true);

    const handleChange = (editor, data, value) => {
        onChange(value);
    }
    console.log(value);
    return (
        <EditorContainer className={`editor-container ${open ? '' : 'collapsed'}`}>
            <div className="editor-title">{displayName}
                <button type="button"
                    className="expand-collapse-btn"
                    onClick={() => setOpen(prevOpen => !prevOpen)}>
                    <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
                </button>
            </div>
            <ControlledEditor
                onBeforeChange={handleChange}
                value={value}
                className="code-mirror-wrapper"
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    theme: 'material',
                    lineNumbers: true
                }}
            />            
        </EditorContainer> 
    );
};

export default DiagramEditor

const EditorContainer = styled(motion.div)`
    min-width: 500px;
    height: 700px;
`
