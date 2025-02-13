import styled from 'styled-components';
import { size } from 'polished';

const Container = styled.div`
  ${size('21em')}
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 20px;
  -webkit-box-shadow: -4px 9px 83px -23px rgba(0,0,0,0.75);
  -moz-box-shadow: -4px 9px 83px -23px rgba(0,0,0,0.75);
  box-shadow: -4px 9px 83px -23px rgba(0,0,0,0.75);
  margin: 1em;
  padding: 1em;
  padding-left: 2em;
  background-color: #F6F5F5;
`

export default Container;