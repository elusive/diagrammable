import React, { useEffect } from 'react';
import mermaid from 'mermaid';
import Constants from '../../constants';


const DiagramPreview = (props) => {
    const {
        code,
        config,
    } = props;

    let element;

    const insertSvg = (svg) => {
        element = document.querySelector(`#${Constants.SvgContainerId}`);
        element.innerHTML = svg;
    };

    useEffect(() => {
        try {
            let _code = code;
            _code = _code.replace(/</g, '&lt;');
            _code = _code.replace(/>/g, '&gt;');
            mermaid.initialize(config);
            mermaid.render(Constants.SvgId, code, insertSvg);
        }
        catch(e) {
            console.log(`View fail: ${e.message}`);
        }
    }, [code, mermaid]);


     let svgContainer = Constants.SvgContainerId;


    // return html elements for UI
    return (
        <div className="preview-container">
          <div id={svgContainer}></div>
        </div>
    );
}

export default DiagramPreview;

