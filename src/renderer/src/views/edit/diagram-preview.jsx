import { useEffect } from 'react'
import PropTypes from 'prop-types'
import mermaid from 'mermaid'

const DiagramPreview = (props) => {
    const { code, config } = props

    useEffect(() => {
        const insertSvg = (svg) => {
            let element = document.querySelector('#preview-container');
            element.innerHTML = svg;
        };
        try {
            mermaid.initialize(config)
            mermaid.render('graph-div', code, insertSvg)
        } catch (e) {
            console.log(`View fail: ${e.message}`)
        }
    }, [code, config])

    // return html elements for UI
    return <div id="preview-container" className="preview-container"></div>;
}

DiagramPreview.propTypes = {
    code: PropTypes.string,
    config: PropTypes.object,
}

export default DiagramPreview
