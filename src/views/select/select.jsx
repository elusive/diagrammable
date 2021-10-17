import {Button} from '../../components/index';
import {DiagramSelector} from './diagram-selector';
import {CardTitle} from '../../components/styled';
import {SelectionCard} from './styled';

const Select = (props) => {

    return (
        <SelectionCard>

            <CardTitle>Diagram Selector</CardTitle>
                        
            <DiagramSelector />
            
        </SelectionCard>
    );
};

export default Select;

