import React, { useEffect } from 'react';
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
        <div className="preview-container">
            <div id="svgContainer"></div>
        </div>
    );
}

export default DiagramPreview;

