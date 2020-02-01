import * as React from 'react';

import * as S from './style';

type NumberProps = {};

type Props = NumberProps & React.HTMLAttributes<any>;

const NumberInput: React.FunctionComponent<Props> = (props: Props) => {
  return <S.NumberInput type="number" {...props} />;
};
