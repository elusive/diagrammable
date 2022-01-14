import React, { useEffect } from 'react';
import mermaid from 'mermaid';
import IconButton from '@mui/material/IconButton';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

import {
  PreviewControlsDirectionals,
  PreviewControlsDiv
} from './styled';


const DiagramPreview = (props) => {
    const { 
        code,
        type,
        config,
        displayName,
        onChange
    } = props;
    
    const containerId = 'svgContainer';
    const svgId = 'graph-div';  
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


    // zoom functionality  
    const zoom = (direction) => {
      const svg = document.getElementById(svgId);
      const { scale, x, y } = getTransformParameters(svg);
      let dScale = 0.1;
      if (direction == "out") dScale *= -1;
      if (scale == 0.1 && direction == "out") dScale = 0;
      svg.style.transform = getTransformString(scale + dScale, x, y);
    };

    const getTransformParameters = (element) => {
      const transform = element.style.transform;
      let scale = 1,
        x = 0,
        y = 0;
      if (transform.includes("scale"))
        scale = parseFloat(transform.slice(transform.indexOf("scale") + 6));
      if (transform.includes("translateX"))
        x = parseInt(transform.slice(transform.indexOf("translateX") + 11));
      if (transform.includes("translateY"))
        y = parseInt(transform.slice(transform.indexOf("translateY") + 11));
      return { scale, x, y };
    };

    const getTransformString = (scale, x, y) => "scale(" + scale + 
        ") translateX(" + x + "%) translateY(" + y + "%)";

    const pan = (direction) => {
      const svg = document.getElementById(svgId);
      const { scale, x, y } = getTransformParameters(svg);
      let dx = 0,
        dy = 0;
      switch (direction) {
        case "left":
          dx = -3;
          break;
        case "right":
          dx = 3;
          break;
        case "up":
          dy = -3;
          break;
        case "down":
          dy = 3;
          break;
      }
      svg.style.transform = getTransformString(scale, x + dx, y + dy);
    };



    // return html elements for UI
    return (
        <div className="preview-container">
             <PreviewControlsDiv>
                <IconButton color="primary" aria-label="Zoom In" component="span"
                  onClick={() => zoom("in")}>
                  <ZoomInIcon sx={{fontSize:40}} />
                </IconButton>
                <IconButton color="primary" aria-label="Zoom Out" component="span"
                  onClick={() => zoom("out")}>
                    <ZoomOutIcon sx={{fontSize:40}} />
                </IconButton>
                 <IconButton color="primary" aria-label="Pan Left" component="span"
                    onClick={() => pan("left")}>
                    <KeyboardArrowLeft /> 
                 </IconButton>
                 <PreviewControlsDirectionals>
                    <IconButton color="primary" aria-label="Pan Up" component="span"
                      onClick={() => pan("up")}>
                        <KeyboardArrowUp /> 
                    </IconButton>
                     <IconButton color="primary" aria-label="Pan Down" component="span"
                      onClick={() => pan("down")}>
                        <KeyboardArrowDown sx={{fontSize:20}} /> 
                    </IconButton>
                 </PreviewControlsDirectionals>
                  <IconButton color="primary" aria-label="Pan Right" component="span"
                     onClick={() => pan("right")}>
                        <KeyboardArrowRight /> 
                  </IconButton>
            </PreviewControlsDiv>
          <div>
           <div id="svgContainer"></div>
          </div>
        </div>
    );
}

export default DiagramPreview;

