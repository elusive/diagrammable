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
    element = document.querySelector("#svgContainer");
    element.innerHTML = svg;
  };

  useEffect(() => {
    try {
      mermaid.initialize(config);
      mermaid.render("graph-div", code, insertSvg);
    }
    catch (e) {
      console.log(`View fail: ${e.message}`);
    }
  }, [code, config, insertSvg]);


  let svgContainer = Constants.SvgContainerId;


  // return html elements for UI
  return (
    <div className="preview-container">
      <div id={svgContainer}></div>
    </div>
  );
}

export default DiagramPreview;

