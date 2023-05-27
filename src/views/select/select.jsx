import React from 'react';
import { useHistory } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalContext';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import { SelectionTabPanel } from './selection-tab-panel';
import { CodeContainer } from './styled';
import PreviewStatic from '../../components/preview-static';

const diagrams = require('../../context/diagrams.json');

function a11yProps(index) {
    return {
        id: `selection-tab-${index}`,
        'aria-controls': `selection-tabpanel-${index}`,
    };
}

const Select = () => {
    const { setCode } = React.useContext(GlobalContext);
    const [value, setValue] = React.useState(0);
    const theme = useTheme();
    const history = useHistory();

    const handleTabChanged = (_, newValue) => {
        setValue(newValue);
    };
    const handleIndexChanged = (newIndex) => {
        if (undefined === newIndex) return;
        setValue(newIndex);
        console.log(newIndex);
    }
    const handleUseSelectedClick = () => {
        var selected = value;
        if (undefined === selected) return;
        setCode(diagrams[selected].code);
        history.push(`edit`);                
    }

    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                    Select the type of Diagram to Build:
                </Typography>
                <Button variant="contained" color="secondary" onClick={handleUseSelectedClick}>Use Selected</Button>
                <Tabs value={value} onChange={handleTabChanged}
                    textColor="secondary" indicatorColor="secondary"
                    aria-label="Diagram Type Selection">
                    { diagrams.map((d, i) =>
                        (<Tab key={d.id} label={d.name} {...a11yProps(i)} />)) }
                </Tabs>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleIndexChanged}>
                    { diagrams.map((diagram, index) => (
                        <SelectionTabPanel
                            key={index} index={index}
                            value={value}
                            dir={theme.direction}>
                            <CodeContainer>{diagram.code.join('\n')}</CodeContainer>
                            <PreviewStatic type={diagram.type} />
                        </SelectionTabPanel>
                    ))}
                </SwipeableViews>

            </CardContent>
        </Card>
    );
};

export default Select;

