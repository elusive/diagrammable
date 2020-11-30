import {Button} from '../../components/index';
import {CardTitle} from '../../components/styled';
import {SelectionCard} from './styled';

const Select = (props) => {

    return (
        <SelectionCard>
            <CardTitle>Diagram Selector</CardTitle>
            <p>Select the type of diagram you wish to create:</p>
            <p>
               <Button text="Flowchart" /> 
            </p>
        </SelectionCard>
    );
};

export default Select;

