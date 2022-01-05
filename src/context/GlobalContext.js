import React, { createContext, useEffect, useReducer } from 'react';
import { AppReducer } from './AppReducer';
import { DiagramType, ActionType} from './enumerations';

const examples = require('./diagrams.json');

// diagram types definition
//
const flowChartExampleCode = examples.find(d => d.type === 'flow_chart');
const initialState = {
    code: flowChartExampleCode.code,
    type: DiagramType.FLOW_CHART,
    config: {
        theme: 'default',
        securityLevel: 'loose',
        flowchart: {
            'htmlLabels': true
         }
    },
    open: true,
}

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
    useEffect(() => {
        localStorage.setItem("code", JSON.stringify(state.code));
        localStorage.setItem("config", JSON.stringify(state.config));
        localStorage.setItem("type", state.DiagramType);
    });

    const setCode = (newCode) => {
        dispatch({
            type: ActionType.UPDATE_CODE,
            payload: newCode,
        });
    };

    const setConfig = (newConfig) => {
        dispatch({
            type: ActionType.UPDATE_CONFIG,
            payload: newConfig
        });
    };

    const setType = (newType) => {
       dispatch({
           type: ActionType.UPDATE_TYPE,
           payload: newType
       });
    };

    const loadExample = (newType) => {
       dispatch({
           type: ActionType.LOAD_EXAMPLE,
           payload: newType,
       }); 
    }

    console.log(`state.code = ${state.code}`);
    return (
        <GlobalContext.Provider
            value={{
                code: state.code,
                config: state.config,
                type: state.type,
                setCode,
                setConfig,
                setType,
                loadExample,
            }}>
            {children}
        </GlobalContext.Provider>  
    );
};
