import styled from 'styled-components';

import { Card } from 'components/DataDisplay/Card/Card.style';

const ActiveStory = styled.div`
  display: inline-flex;
  margin: 10px;
  width: 300px;

  ${Card} {
    padding: 15px;
  }
`;

export { ActiveStory };
