

const enumValue = (name) => Object.freeze({toString: () => name});


// types diagrams supported by the application
export const DiagramType = Object.freeze({
    FLOW_CHART: enumValue('flow_chart'),
    SEQUENCE_DIAGRAM: enumValue('sequence_diagram'),
    CLASS_DIAGRAM: enumValue('class_diagram'),
    GANNT_CHART: enumValue('gannt_chart'),
    STATE_DIAGRAM: enumValue('state_diagram'),
    ENTITY_DIAGRAM: enumValue('entity_diagram'),
    USER_JOURNEY: enumValue('user_journey'),
    PIE_CHART: enumValue('pie_chart'),
});

export const ActionType = Object.freeze({
    UPDATE_CODE: enumValue('UPDATE_CODE'),
    UPDATE_CONFIG: enumValue('UPDATE_CONFIG'),
    LOAD_EXAMPLE: enumValue('LOAD_EXAMPLE'),
});

