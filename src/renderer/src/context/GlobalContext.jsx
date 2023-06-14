import { createContext, useEffect, useReducer } from 'react'
import { AppReducer } from './AppReducer'
import { DiagramType, ActionType } from './enumerations'
import PropTypes from 'prop-types'

import diagrams from './diagrams'

// diagram types definition
//

// eslint-disable-next-line no-unused-vars
const flowChartExampleCode = diagrams.find((d) => d.type === 'flow_chart')
const initialState = {
    code: flowChartExampleCode.code,
    config: {
        theme: 'default',
        securityLevel: 'loose',
        flowchart: {
            htmlLabels: true,
        },
    },
    open: true,
    selected: undefined,
    type: DiagramType.FLOW_CHART,
}

export const GlobalContext = createContext(initialState)

export const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    useEffect(() => {
        localStorage.setItem('code', JSON.stringify(state.code))
        localStorage.setItem('config', JSON.stringify(state.config))
        localStorage.setItem('type', state.type)
        localStorage.setItem('selected', state.selected)
    })

    const setCode = (newCode) => {
        dispatch({
            type: ActionType.UPDATE_CODE,
            payload: newCode,
        })
    }

    const setConfig = (newConfig) => {
        dispatch({
            type: ActionType.UPDATE_CONFIG,
            payload: newConfig,
        })
    }

    const setType = (newType) => {
        dispatch({
            type: ActionType.UPDATE_TYPE,
            payload: newType
        })
    }

    const setSelected = (newSelectedIndex) => {
        dispatch({
            type: ActionType.UPDATE_SELECTED,
            payload: newSelectedIndex
        })
    }

    const loadExample = (newType) => {
        dispatch({
            type: ActionType.LOAD_EXAMPLE,
            payload: newType
        })
    }

    console.log(`state.code = ${state.code}`)
    return (
        <GlobalContext.Provider
            value={{
                code: state.code,
                config: state.config,
                type: state.type,
                selected: state.selected,
                setCode,
                setConfig,
                setType,
                loadExample,
                setSelected
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

GlobalContextProvider.propTypes = {
    children: PropTypes.any
}
