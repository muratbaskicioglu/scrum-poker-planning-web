import * as React from 'react';

import * as S from './Item.style';

type ListItemProps = {};

const ListItem: React.FC<ListItemProps> = ({ children }) => {
  return <S.ListItem>{children}</S.ListItem>;
};

export default ListItem;
