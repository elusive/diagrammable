import styled from 'styled-components'
import PropTypes from 'prop-types'

const Button = (props) => {
    return <AnimatedButton>{props.text}</AnimatedButton>
}

Button.propTypes = {
    text: PropTypes.string
}

export default Button

// styled components
const AnimatedButton = styled.button`
    margin: 8px;
    padding: 22px;
    animate: {
         {
            scale: 2;
        }
    }
    border-radius: 12px;
`
