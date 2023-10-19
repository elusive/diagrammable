import PropTypes from 'prop-types'
import styled from 'styled-components'

const GridLayout = (props) => {
    const { children, className } = props

    return <GridContainer className={className}>{children}</GridContainer>
}

GridLayout.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string
}

export default GridLayout

const GridContainer = styled.div`
    display: flex;
    flex-direction: row;
    @media (max-width: 1024px) {
        flex-direction: column;
    }
`
