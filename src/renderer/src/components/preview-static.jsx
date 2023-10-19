import { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import mermaid from 'mermaid'
import { GlobalContext } from '../context/GlobalContext'
import Constants from '../constants'

import diagrams from '../context/diagrams'

const PreviewStatic = (props) => {
    const { type } = props
    const { config } = useContext(GlobalContext)

    let diagram = diagrams.find((d) => d.type === type)

    useEffect(() => {
        const insertSvg = (svg) => {
            let element = document.querySelector(`#${Constants.SvgContainerId}`)
            element.innerHTML = svg
        }
        mermaid.initialize(config)
        mermaid.render(Constants.SvgId, diagram.code.join('\n'), insertSvg)
    }, [diagram, config])

    let svgContainer = Constants.SvgContainerId

    return <div id={svgContainer}></div>
}

PreviewStatic.propTypes = {
    type: PropTypes.string,
}

export default PreviewStatic
