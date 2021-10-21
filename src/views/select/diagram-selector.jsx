import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { SelectionTabPanel } from './selection-tab-panel';


function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export const DiagramSelector = (props) => {

    const [value, setValue] = React.useState(0);

    const handleTabChanged = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <>
            <Tabs value={value} onChange={handleTabChanged} 
                textColor="secondary" indicatorColor="secondary"
                aria-label="Diagram Type Selection">
                <Tab label="Flowchart" {...a11yProps(0)} />
                <Tab label="Sequence Diagram" {...a11yProps(1)} />
                <Tab label="Class Diagram" {...a11yProps(2)} />
                <Tab label="Entity Relationship" {...a11yProps(3)} />
            </Tabs>

            <SelectionTabPanel index={0} value={value}>
                Example flowchart and source goes here...
            </SelectionTabPanel>

            <SelectionTabPanel index={1} value={value}>
                Example sequence diagram goes here...
            </SelectionTabPanel>

            <SelectionTabPanel index={2} value={value}>
                Example class diagram goes here...
            </SelectionTabPanel>

            <SelectionTabPanel index={3} value={value}>
                Example entity relationship chart goes here...
            </SelectionTabPanel>
        </>
    );
};

