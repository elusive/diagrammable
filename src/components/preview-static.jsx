import React, { useContext, useEffect } from 'react';
import mermaid from 'mermaid';
import { GlobalContext } from '../context/GlobalContext';
import Constants from '../constants';

const diagrams = require('../context/diagrams.json');

const PreviewStatic = (props) => {
    const { type } = props;
    const {config} = useContext(GlobalContext); 
    
    let element;
    const insertSvg = (svg) => { 
        element = document.querySelector(`#${Constants.SvgContainerId}`);
        element.innerHTML = svg; 
    };
   

    let diagram = diagrams.find(d => d.type === type);
    
    useEffect(() => {
            mermaid.initialize(config);
            mermaid.render(Constants.SvgId, diagram.code.join('\n'), insertSvg);
    }, [diagram, mermaid]);

    let svgContainer = Constants.SvgContainerId;

    return (
        <div id={svgContainer}></div>
    );
}

export default PreviewStatic;

