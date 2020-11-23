import { ActionType } from './enumerations';

/*
 * Reducer for global context/state
 * for the application.
 */

export const AppReducer = (state, action) => {
    switch (action.type) {
        case ActionType.UPDATE_CODE:
            return { ...state, code: [...action.payload ] };
        case ActionType.UPDATE_CONFIG:
            return { ...state, config: action.payload };
        case ActionType.UPDATE_TYPE:
            return { ...state, type: action.payload };
        default:
            return state;
    }
};

