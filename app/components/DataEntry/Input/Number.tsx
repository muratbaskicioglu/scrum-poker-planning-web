import * as React from 'react';

import * as S from './Number.style';

type InputNumberProps = {};

const InputNumber: React.FunctionComponent<
  InputNumberProps & React.InputHTMLAttributes<any>
> = props => {
  return <S.InputNumber type="number" {...props} />;
};

export default InputNumber;
