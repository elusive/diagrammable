import React, { useContext, useEffect } from 'react';
import mermaid from 'mermaid';
import { GlobalContext } from '../context/GlobalContext';
import Constants from '../constants';

const diagrams = require('../context/diagrams.json');

const PreviewStatic = (props) => {
    const { type } = props;
    const {config} = useContext(GlobalContext); 
    let diagram = diagrams.find(d => d.type === type);
    
    useEffect(() => {
        let element;
        const insertSvg = (svg) => { 
            element = document.querySelector("#svgContainer");
            element.innerHTML = svg; 
        };
        mermaid.initialize(config);
        mermaid.render("graph-div", diagram.code.join('\n'), insertSvg);
    }, [diagram, config]);

    let svgContainer = Constants.SvgContainerId;

    return (
        <div id={svgContainer}></div>
    );
}

export default PreviewStatic;

