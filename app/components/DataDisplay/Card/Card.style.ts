import styled from 'styled-components';

const Card = styled.div`
  display: inline-block;
  position: relative;
  padding: 10px;
  margin: 10px;
  width: 100%;
  border: 1px solid;
`;

const CardTitle = styled.span`
  z-index: 1;
  position: absolute;
  top: -10px;
  left: 10%;
  background: white;
`;

export { Card, CardTitle };
