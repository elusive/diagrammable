import React from 'react';
import { useEffect, useState } from 'react';


const Iframe = (props) => { 
    const iframeId = "iframeContainer";
    const [h, setH] = useState(1000);
    const [w, setW] = useState(1000);

    useEffect(() => {
        let iframeContainerElement = document.querySelector(`#${iframeId}`); 
        setH(window.innerHeight);
        setW(iframeContainerElement.offsetWidth);
    }, []);



    return(         
      <div id={iframeId}>          
        <iframe title={props.title} src={props.url} height={h} width={w}/>         
      </div>
    )
}


const Guide = () => {
   return (
        <div id="guideContainer">
            <Iframe title="guideFrame" url="https://mermaid.js.org/intro/n00b-syntaxReference.html" height="1000" width="1000" /> 
        </div>
   )
}

export default Guide;
