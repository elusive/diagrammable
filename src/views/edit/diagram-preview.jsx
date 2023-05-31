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
            let element = document.querySelector("#svgContainer");
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
        <div className="preview-container">
          <div id={Constants.SvgContainerId}></div>
        </div>
    );
}

export default DiagramPreview;

