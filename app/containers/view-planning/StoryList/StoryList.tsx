import * as React from 'react';

import Table from 'components/DataDisplay/Table';

import * as S from './StoryList.style';

const columns = [
  {
    key: 'story',
    label: 'Story',
  },
  {
    key: 'storyPoint',
    label: 'Story Point',
  },
  {
    key: 'status',
    label: 'Status',
  },
];

const data = [
  {
    story: 'Story 1',
    storyPoint: 5,
    status: 'Active',
  },
  {
    story: 'Story 2',
    storyPoint: 5,
    status: 'Active',
  },
];

function StoryList(props) {
  return (
    <S.StoryList>
      <Table columns={columns} data={data} />
    </S.StoryList>
  );
}

export default StoryList;
