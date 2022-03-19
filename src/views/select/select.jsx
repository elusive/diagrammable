import React from 'react'
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

    const [value, setValue] = React.useState(0);

    const theme = useTheme();

    const handleTabChanged = (_, newValue) => {
        setValue(newValue);
    };
    const handleIndexChanged = (newIndex) => {
        setValue(newIndex);
        console.log(newIndex);
    }

    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                    Select the type of Diagram to Build:
                </Typography>
                <Tabs value={value} onChange={handleTabChanged}
                    textColor="secondary" indicatorColor="secondary"
                    aria-label="Diagram Type Selection">
                    { diagrams.map((d, i) =>
                        (<Tab key={d.id} label={d.name} {...a11yProps(i)} />)) }
                </Tabs>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleIndexChanged}
                >
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

