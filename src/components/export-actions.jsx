import React, { useContext, useEffect } from 'react';
import { toBase64 } from 'js-base64';
import moment from 'moment';

import Button from '@mui/material/Button';

import Constants from '../constants';
import { GlobalContext } from '../context/GlobalContext';
import { ExportCard } from './styled';
import { CopyIcon, ImageIcon } from '@primer/octicons-react';
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
    const ZOOM_MIN = 0.5
    const ZOOM_MAX = 8

    let zoomLevel = 1
    const translate = {x: 0, y: 0}

    const reset = () => {
      zoomLevel = 1
      translate.x = 0
      translate.y = 0
      transformSvg(zoomLevel, translate.x, translate.y)
    }

    const doMove = (vertical, horizonal) => {
      translate.y += vertical
      translate.x += horizonal
      transformSvg(zoomLevel, translate.x, translate.y)
    }

    const doZoom = (value) => {
      zoomLevel += value
      zoomLevel = Math.min(Math.max(ZOOM_MIN, zoomLevel), ZOOM_MAX)
      transformSvg(zoomLevel, translate.x, translate.y)
    }

    const transformSvg = (zoom, x, y) => {
        const svg = document.getElementById(Constants.SvgId);
        svg.style.transform = `translate(${x}px, ${y}px) scale(${zoom})`
    }

  return (
    <React.Fragment>
      <div id="exportActions">
        <ExportCard>
          <div className="control-panel">
            <button className="btn button zoom-in" aria-label="Zoom In" onClick={() => doZoom(0.1)}><ZoomInIcon /></button>
            <button className="btn button zoom-out" aria-label="Zoom Out" onClick={() => doZoom(-0.1)}><ZoomOutIcon /></button>
            <button className="btn button reset" aria-label="Reset" onClick={reset}><SyncIcon /></button>
            <button className="btn button up" aria-label="Pan Up" onClick={() => doMove(-10,0)}><ChevronUpIcon /></button>
            <button className="btn button down" aria-label="Pan Down" onClick={() => doMove(10,0)}><ChevronDownIcon /></button>
            <button className="btn button left" aria-label="Pan Left" onClick={() => doMove(0,-10)}><ChevronLeftIcon /></button>
            <button className="btn button right" aria-label="Pan Right" onClick={() => doMove(0,10)}><ChevronRightIcon /></button>
          </div>

          <div className="export-buttons">
            {
              isClipboardSupported() &&
              <button className="btn button copy" onClick={(e) => onCopyToClipboardClick(e)}><CopyIcon /></button>
            }
            <button className="btn button save" id="export-png-button" onClick={(e) => onDownloadPngClick(e)}><ImageIcon /></button>
          </div>
        </ExportCard>
      </div>
    </React.Fragment>
  );
};

export default ExportsContainer;
