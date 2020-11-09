import styled from 'styled-components';
import {motion} from 'framer-motion';


let isSelectActive = window.location.pathname.includes("select");
let isEditorActive = window.location.pathname.includes("editor");
let isGuideActive = window.location.pathname.includes("guide");

export default (props) => {
    return (
        <MenuList>
            <MenuItem active={isSelectActive}><a href="/select">Select</a></MenuItem>
            <MenuItem active={isEditorActive}><a href="/editor">Editor</a></MenuItem>
            <MenuItem active={isGuideActive}><a href="/guide">Guide</a></MenuItem>
        </MenuList>
    );
}


const MenuList = styled(motion.ul)`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: var(--prime);
`;

const MenuItem = styled(motion.li)`
    float: left;
    &:hover { background-color: #111; }
    & > a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        background-color: ${ props => props.active == true ? 'var(--prime-dark)' : 'var(--prime)' };
    }
`;
