import React from 'react';

var Iframe = () => { 
    return(         
      <div>          
        <iframe title="{this.props.title}" src="{this.props.src}" height={this.props.height} width={this.props.width}/>         
      </div>
    )
}


const Guide = () => {
   return (
        <div id="guide">
            <Iframe title="guideFrame" src="https://mermaid.js.org/intro/n00b-syntaxReference.html" height="1000" width="1000" /> 
        </div>
   )
}

export default Guide;
