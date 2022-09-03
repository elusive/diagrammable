import React, { useContext, useEffect, useState } from 'react';
import { toBase64 } from 'js-base64';
import moment from 'moment';

import Button from '@mui/material/Button';
import SaveAsIcon from '@mui/icons-material/Save';
import CopyIcon from '@mui/icons-material/ContentCopy';

import Constants from '../constants';
import { GlobalContext } from '../context/GlobalContext';
import { ExportCard } from './styled';
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


const ExportsContainer = (props) => {
    let { displayName } = props;
    let { code, config } = useContext(GlobalContext);

    /*     MERMAID.INK USAGE
     * This format is used by the https://mermaid.ink webapp
     * and is here so that we can pass the correctly formatted
     * data to the /svg or /img endpoints to get our images.
     */
    let inkState = { "code": code.join('\n'), "mermaid": config };
    useEffect(() => {
        let renderCode = toBase64(JSON.stringify(inkState), true);
        let rendererUrl = Constants.MermaindInkUrl + renderCode;
        console.log(`rendering url: ${rendererUrl}`);
    });


    /* Exporting Functions
     */
    const getBase64SVG = (svg, w, h) => {
        svg.setAttribute('height', `${h}px`);
        svg.setAttribute('width', `${w}px`);
        if (!svg) {
            svg = document.querySelector(`#${Constants.SvgId}`);
        }
        const svgString = svg.outerHTML
            .replace('<br>', '<br/>')
            .replace(/<img([^>]*)>/g, (m, g) => `<img ${g} />`);
        return toBase64(svgString);
    }

    const exportDiagramToImage = (evt, exporter) => {
        const canvas = document.createElement('canvas');
        const svg = document.querySelector(`#${Constants.SvgId}`);
        const box = svg.getBoundingClientRect();
        canvas.width = box.width;
        canvas.height = box.height;
       /* if (selectedImageSizer === 'width') {
            const ratio = box.height / box.width;
            canvas.width = enteredImageSize;
            canvas.height = enteredImageSize * ratio;
        } else if (selectedImageSizer === 'height') {
            const ratio = box.height / box.width;
            canvas.width = enteredImageSize * ratio;
            canvas.height = enteredImageSize;
        }*/

        const graphicsContext = canvas.getContext('2d');
        graphicsContext.fillStyle = 'transparent';
        graphicsContext.fillRect(0,0,canvas.width,canvas.height);

        const image = new Image();
        const base64Data = getBase64SVG(svg, canvas.width, canvas.height);
        image.onload = exporter(graphicsContext, image);
        image.src = `${Constants.DataUrlPrefix}${base64Data}`;

        evt.stopPropagation();
        evt.preventDefault();
    };

    const clipboardExporter = (context, image) => {
        return () => {
            let codeDiv = document.createElement("div");
            document.body.appendChild(codeDiv);
            codeDiv.innerText = code.join('\n');
            var r = document.createRange();
            r.selectNode(codeDiv);
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(r);
            document.execCommand('Copy');
            window.getSelection().removeAllRanges();
            document.body.removeChild(codeDiv);
        };
    };

    const downloadImageExporter = (context, image) => {
        return () => {
            const { canvas } = context;
            context.drawImage(image, 0, 0, canvas.width, canvas.height);
            simulateDownload(
                `${Constants.DownloadPrefix}-${displayName}-${moment().format('YYYYMMDDHHmmss')}.png`,
                canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream')
            );
        };
    };

    const simulateDownload = (download, href) => {
        const a = document.createElement('a');
        a.download = download;
        a.href = href;
        a.click();
        a.remove();
    };

    const isClipboardSupported = () => Object.prototype.hasOwnProperty.call(window, 'ClipboardItem');



    // event handlers
    const onDownloadPngClick = (evt) => {
        exportDiagramToImage(evt, downloadImageExporter);
    };

    const onCopyToClipboardClick = (evt) => {
        exportDiagramToImage(evt, clipboardExporter);
    };

    /*  ZOOM & PAN Functions
     */
    const zoom = (direction) => {
      const svg = document.getElementById(Constants.SvgId);
      const { scale, x, y } = getTransformParameters(svg);
      let dScale = 0.1;
      if (direction === "out") dScale *= -1;
      if (scale === 0.1 && direction === "out") dScale = 0;
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
      const svg = document.getElementById(Constants.SvgId);
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
        default:
            break;
      }
      svg.style.transform = getTransformString(scale, x + dx, y + dy);
    };


    return (
        <React.Fragment>
            <div id="exportActions">
                <ExportCard>
                    <div id="export-buttons">
                    {
                        isClipboardSupported() &&
                        <Button id="copy-png-button"
                            onClick={(e) => onCopyToClipboardClick(e) }>
                            Copy Code&nbsp; <CopyIcon />
                        </Button>
                    }
                        <Button id="export-png-button" onClick={(e) => onDownloadPngClick(e) }>
                            Save Image&nbsp;<SaveAsIcon/>
                        </Button>
                    </div>
              <PreviewControlsDiv>
                  <IconButton style={{ padding: 0 }} color="primary" aria-label="Zoom In" component="span"
                  onClick={() => zoom("in")}>
                  <ZoomInIcon sx={{fontSize:30}} />
                </IconButton>
                <IconButton style={{ padding: 0 }} ccolor="primary" aria-label="Zoom Out" component="span"
                  onClick={() => zoom("out")}>
                    <ZoomOutIcon sx={{fontSize:30}} />
                </IconButton>
                 <IconButton style={{ padding: 0 }} ccolor="primary" aria-label="Pan Left" component="span"
                    onClick={() => pan("left")}>
                    <KeyboardArrowLeft />
                 </IconButton>
                 <PreviewControlsDirectionals>
                     <IconButton style={{ padding: 0, margin: "-4px" }} ccolor="primary" aria-label="Pan Up" component="span"
                      onClick={() => pan("up")}>
                        <KeyboardArrowUp />
                    </IconButton>
                     <IconButton style={{ padding: 0, margin: "-4px" }} ccolor="primary" aria-label="Pan Down" component="span"
                      onClick={() => pan("down")}>
                        <KeyboardArrowDown sx={{fontSize:24}} />
                    </IconButton>
                 </PreviewControlsDirectionals>
                  <IconButton sx={{ padding: 0 }} ccolor="primary" aria-label="Pan Right" component="span"
                     onClick={() => pan("right")}>
                        <KeyboardArrowRight />
                  </IconButton>
            </PreviewControlsDiv>

               </ExportCard>
            </div>
        </React.Fragment>
    );
};

export default ExportsContainer;
