import React, { useEffect } from 'react';
import mermaid from 'mermaid';
import Constants from '../../constants';


const DiagramPreview = (props) => {
    const {
        code,
        config,
    } = props;

    let svgContainer = Constants.SvgContainerId;

    useEffect(() => {
        let element;
        const insertSvg = (svg) => {
            element = document.querySelector(`#${Constants.SvgContainerId}`);
            element.innerHTML = svg;
        };

        try {
            mermaid.initialize(config);
            mermaid.render(Constants.SvgId, code, insertSvg);
        }
        catch(e) {
            console.log(`View fail: ${e.message}`);
        }
    }, [code, config]);



    // return html elements for UI
    return (
        <div className="preview-container">
          <div id={svgContainer}></div>
        </div>
    );
}

export default DiagramPreview;

