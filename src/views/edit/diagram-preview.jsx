import React, { useEffect } from 'react';
import mermaid from 'mermaid';
import Constants from '../../constants';


const DiagramPreview = (props) => {

    const {
        code,
        config,
    } = props;


    useEffect(() => {
        const insertSvg = (svg) => {
            let element = document.querySelector("#preview-container");
            element.innerHTML = svg;
        };
        try {
            mermaid.initialize(config);
            mermaid.render("graph-div", code, insertSvg);
        }
        catch(e) {
            console.log(`View fail: ${e.message}`);
        }
    }, [code, config]);




    // return html elements for UI
    return (
        <div id="preview-container" className="preview-container">
        </div>
    );
}



export default DiagramPreview;

