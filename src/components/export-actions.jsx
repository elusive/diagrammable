import React, { useContext, useEffect } from 'react';
import { toBase64 } from 'js-base64';
import moment from 'moment';

import Button from '@mui/material/Button';
import SaveAsIcon from '@mui/icons-material/Save';
import CopyIcon from '@mui/icons-material/ContentCopy';

import Constants from '../constants';
import { GlobalContext } from '../context/GlobalContext';
import { ExportCard } from './styled';
import { ChevronLeftIcon, ChevronRightIcon, ChevronDownIcon, ChevronUpIcon } from '@primer/octicons-react';
import { ZoomInIcon, ZoomOutIcon, SyncIcon } from '@primer/octicons-react';

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

    const graphicsContext = canvas.getContext('2d');
    graphicsContext.fillStyle = 'transparent';
    graphicsContext.fillRect(0, 0, canvas.width, canvas.height);

    const image = new Image();
    const base64Data = getBase64SVG(svg, canvas.width, canvas.height);
    image.onload = exporter(graphicsContext, image);
    image.src = `${Constants.DataUrlPrefix}${base64Data}`;

    evt.stopPropagation();
    evt.preventDefault();
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
  }

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
                onClick={(e) => onCopyToClipboardClick(e)}>
                Copy Code&nbsp; <CopyIcon />
              </Button>
            }
            <Button id="export-png-button" onClick={(e) => onDownloadPngClick(e)}>
              Save Image&nbsp;<SaveAsIcon />
            </Button>
          </div>
          <div className="control-panel">
            <button className="btn button zoom-in" aria-label="Zoom In" onClick={() => zoom("in")}><ZoomInIcon /></button>
            <button className="btn button zoom-out" aria-label="Zoom Out" onClick={() => zoom("out")}><ZoomOutIcon /></button>
            <button className="btn button reset" aria-label="Reset" onClick={() => zoom("reset")}><SyncIcon /></button>
            <button className="btn button pan-up" aria-label="Pan Up" onClick={() => pan("up")}><ChevronUpIcon /></button>
            <button className="btn button pan-down" aria-label="Pan Down" onClick={() => pan("down")}><ChevronDownIcon /></button>
            <button className="btn button pan-left" aria-label="Pan Left" onClick={() => pan("left")}><ChevronLeftIcon /></button>
            <button className="btn button pan-right" aria-label="Pan Right" onClick={() => pan("right")}><ChevronRightIcon /></button>
          </div>

        </ExportCard>
      </div>
    </React.Fragment>
  );
};

export default ExportsContainer;
