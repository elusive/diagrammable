import React from 'react';
import {withRouter} from 'react-router-dom';
import styled, {css, keyframes} from 'styled-components';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import spring, { toString } from 'css-spring';

const springRight = toString(spring(
  { marginLeft: '32px' }, { marginLeft: '202px' }, { preset: 'gentle' }
));

const springRightMixin = css`
  animation: ${keyframes`${springRight}`} 0.5s linear;
`;

export const Main = styled.main`
  position: relative;
  overflow: hidden;
  padding: 0 20px;
  ${props => props.expanded && 'animation: ${keyframes`${springRight}`} 0.5s linear'};
`;

const SideMenu = (props) => {
  const initialState = {
    selected: 'select',
    expanded: false
  };

  const [state, setState] = React.useState(initialState);

  const onSelect = (selected) => {
    setState({...state, selected: selected});
    props.history.push(`/${selected}`);
  };

  const onToggle = (expanded) => {
    setState({...state, expanded: expanded});
  };
  
  return (
    <div>
      <SideNav className="sidenav-rnd" onSelect={onSelect} onToggle={onToggle}>
        <SideNav.Toggle />
        <SideNav.Nav selected={state.selected}>
          <NavItem eventKey="select">
            <NavIcon>
              <i className="fa fa-fw fa-line-chart" style={{ fontsize: '1.75em', verticalAlign: 'middle' }} />
            </NavIcon>
            <NavText style={{ paddingRight: 16 }} title="Select">
                  Select
              </NavText>
          </NavItem>
          <NavItem eventKey="edit">
              <NavIcon>
                  <i className="fa fa-fw fa-edit" style={{ fontSize: '1.75em', verticalAlign: 'middle' }} />
              </NavIcon>
              <NavText style={{ paddingRight: 16 }} title="Edit">
                  Edit
              </NavText>
          </NavItem>
          <NavItem eventKey="guide">
              <NavIcon>
                  <i className="fa fa-fw fa-list-alt" style={{ fontSize: '1.75em', verticalAlign: 'middle' }} />
              </NavIcon>
              <NavText style={{ paddingRight: 16 }} title="Guide">
                  Guide
              </NavText>
          </NavItem>
          <NavItem eventKey="settings">
              <NavIcon>
                  <i className="fa fa-fw fa-cogs" style={{ fontSize: '1.5em', verticalAlign: 'middle' }} />
              </NavIcon>
              <NavText style={{ paddingRight: 16 }} title="Settings">Settings</NavText>
              <NavItem eventKey="settings/export">
                  <NavText title="Export">Export</NavText>
              </NavItem>
              <NavItem eventKey="settings/format">
                  <NavText title="Format">Format</NavText>
              </NavItem>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
      <Main expanded={state.expanded}>
        {props.children}
      </Main>
    </div>
  );
};

export default withRouter(SideMenu);

