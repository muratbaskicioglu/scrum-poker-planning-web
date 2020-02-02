import * as React from 'react';

import ListItem from './Item';

import * as S from './List.style';

type ListProps = {
  header: string | React.ReactNode;
  footer: string | React.ReactNode;
  children: any;
};

function List({ header, children }: ListProps) {
  const items = children
    ? React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          key: child.key || `${child.type.toString()}${index}`,
          ...child.props,
        }),
      ).filter(({ type }) => typeof type === typeof ListItem)
    : [];

  return (
    <S.List>
      {header && <S.ListHeader>{header}</S.ListHeader>}
      {items}
    </S.List>
  );
}

List.Item = ListItem;

export default List;
