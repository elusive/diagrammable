import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import mermaid from 'mermaid';

const DiagramPreview = (props) => {
    const { 
        code,
        type,
        config,
        displayName,
        onChange
    } = props;
    
    const containerId = 'svgContainer';
    let element;
    const insertSvg = (svg) => { 
        element = document.querySelector("#svgContainer");
        element.innerHTML = svg; 
    };
    
    useEffect(() => {
        try {
            let _code = code;
            _code = _code.replace(/</g, '&lt;');
            _code = _code.replace(/>/g, '&gt;');
            mermaid.initialize(config);
            mermaid.render("graph-div", code, insertSvg);
        }
        catch(e) {
            console.log(`View fail: ${e.message}`);
        }
    }, [code, config]);
    
    return (
        <PreviewCard>
            <CardTitle>Preview Diagram</CardTitle>
            <div id="svgContainer">
            svg container</div>
        </PreviewCard>
    );
}

export default DiagramPreview;

const CardTitle = styled.h4`
    margin: 0;
    padding: 8px;
    background: var(--second);
    color: var(--back);
`;

const PreviewCard = styled(motion.div)`
    border: 1px solid var(--second);
    padding: 0;
    min-width: 550px;
    height: 700px;
    box-shadow: 8px 8px 4px grey;
    animate: {{ scale: [1,1,2,2,3,2,1,1]}};
    transition: { duration: 20 };
    & > p {
        margin: 8px 12px;
    };
`;
