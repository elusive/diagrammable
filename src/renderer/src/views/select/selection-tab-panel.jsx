import Box from '@mui/material/Box'
import PropTypes from 'prop-types'

export function SelectionTabPanel(props) {
    const { children, value, index, ...other } = props

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`selection-tab-panel-${index}`}
            aria-labelledby={`selection-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <div> {children} </div>
                </Box>
            )}
        </div>
    )
}

SelectionTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
}
