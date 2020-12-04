import styled, { keyframes } from 'styled-components';
import spring, { toString } from 'css-spring';

const springRight = toString(spring(
  { marginLeft: '32px' }, { marginLeft: '240px' }, { preset: 'gentle' }
));


export const Main = styled.main`
  position: relative;
  overflow: hidden;
  padding: 0 20px;
  animation: ${keyframes`${springRight}`} 0.5s linear;
  margin-left: ${props => (props.expanded ? 240 : 32)}px;
`;

