import React, { useContext, useEffect } from 'react';
import mermaid from 'mermaid';
import { GlobalContext } from '../context/GlobalContext';
import Constants from '../constants';

import diagrams from '../context/diagrams.js';

const PreviewStatic = (props) => {
    const { type } = props;
    const {config} = useContext(GlobalContext); 
    
    let diagram = diagrams.find(d => d.type === type);
    
    useEffect(() => {
        const insertSvg = (svg) => { 
            let element = document.querySelector(`#${Constants.SvgContainerId}`);
            element.innerHTML = svg; 
        };
        mermaid.initialize(config);
        mermaid.render(Constants.SvgId, diagram.code.join('\n'), insertSvg);
    }, [diagram, config]);

    let svgContainer = Constants.SvgContainerId;

    return (
        <div id={svgContainer}></div>
    );
}

export default PreviewStatic;

