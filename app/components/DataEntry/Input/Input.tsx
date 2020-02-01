import * as React from 'react';

import InputNumber from './Number';

import * as S from './Input.style';

type InputProps = {} & React.InputHTMLAttributes<any>;

function Input(props: InputProps) {
  return <S.Input {...props} />;
}

Input.Number = InputNumber;

export default Input;
