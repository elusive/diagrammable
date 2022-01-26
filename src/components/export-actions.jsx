import React, { useEffect, useState } from 'react';
import { toBase64, fromBase64 } from 'js-base64';
import moment from 'moment';

import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import SaveAsIcon from '@mui/icons-material/Save';

import Constants from '../constants';
import { CardTitle, ExportCard } from './styled';


const ExportsContainer = (props) => {
    let { code, config, displayName } = props;   
    let [enteredImageSize, setEnteredImageSize] = useState(0);
    let [selectedImageSizer, setSelectedImageSizer] = useState('auto');
    let rendererUrl = Constants.MermaindInkUrl;
    let inkState = { "code": code, "mermaid": config };

    useEffect(() => {
        let renderCode = toBase64(JSON.stringify(inkState), true);
        rendererUrl += renderCode;
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
        if (selectedImageSizer === 'width') {
            const ratio = box.height / box.width;
            canvas.width = enteredImageSize;
            canvas.height = enteredImageSize * ratio;
        } else if (selectedImageSizer === 'height') {
            const ratio = box.height / box.width;
            canvas.width = enteredImageSize * ratio;
            canvas.height = enteredImageSize;
        }

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
                /*
                const { canvas } = context;
			    context.drawImage(image, 0, 0, canvas.width, canvas.height);
                canvas.toBlob((blob) => {
                    try {
                        document.body.click(); // document must have focus to use clipboard api
                        navigator.clipboard.write([
                            new window.ClipboardItem({
                                [blob.type]: blob
                            })
                        ]);
                        console.log('Image copied.');
                    } 
                    catch (error) {
                        console.error(error);
                    }
                    */  
            let img = document.createElement("img");
            document.body.appendChild(img);
            img.onload = () => {
                let r = document.createRange();
                r.setStartBefore(img);
                r.setEndAfter(img);
                r.selectNode(img);
                let sel = window.getSelection();
                sel.addRange(r);
                document.execCommand('Copy');
                document.body.removeChild(img);
            };
            img.src = rendererUrl; 
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



    return (
        <React.Fragment>
            <div id="exportActions">
                <CardTitle>Export Diagram</CardTitle>
                <ExportCard>
                    <div id="export-buttons">
                {
                    isClipboardSupported() &&
                    <Button id="copy-png-button" 
                        onClick={(e) => onCopyToClipboardClick(e) }>
                        Copy to Clipboard
                    </Button>
                }
                    <Button id="export-png-button" onClick={(e) => onDownloadPngClick(e) }>
                        <SaveAsIcon/>
                    </Button>
                    </div>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">PNG Size</FormLabel>
                        <RadioGroup
                            row
                            aria-label="PNG Size"
                            defaultValue="auto"
                            name="selectedImageSizer"
                            value={setSelectedImageSizer}
                            onChange={(e)=>setSelectedImageSizer(e.target.value)}>
                            <FormControlLabel checked={selectedImageSizer === 'auto'} value="auto" control={<Radio/>} label="Auto" />
                            <FormControlLabel checked={selectedImageSizer === 'width'} value="width" control={<Radio/>} label="Width" />
                            <FormControlLabel checked={selectedImageSizer === 'height'} value="height" control={<Radio/>} label="Height" />
                        </RadioGroup>
                    </FormControl>
                            
                    { 
                        (selectedImageSizer !== 'auto') &&
                            <input
                                id="height"
                                className="input"
                                type="number"
                                min="3"
                                max="10000"
                                value={enteredImageSize}
                                onChange={(e)=>setSelectedImageSizer(e.target.value)}  />
                    }
                </ExportCard>
            </div>
        </React.Fragment>
    );
};

export default ExportsContainer;
