
import {DiagramSelector} from './diagram-selector';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Select = (props) => {

    return (
        <Card>

            <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                    Select the type of Diagram to Build:
                </Typography>

                <DiagramSelector />

            </CardContent>
                        
            
        </Card>
    );
};

export default Select;

