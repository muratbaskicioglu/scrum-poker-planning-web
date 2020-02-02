import * as React from 'react';

import * as S from './Table.style';

type Columns = {
  key: string;
  label: string;
};

type TableProps = {
  columns: Columns[];
  data: object[];
} & React.TableHTMLAttributes<any>;

function Table({ columns, data }: TableProps) {
  return (
    <S.Table>
      <S.TableHead>
        <S.TableRow>
          {columns.map(({ key, label }) => (
            <S.TableHeader key={key}>{label}</S.TableHeader>
          ))}
        </S.TableRow>
      </S.TableHead>
      <S.TableBody>
        {data.map((value, index) => (
          <S.TableRow key={index}>
            {columns.map(({ key }) => (
              <S.TableData key={key}>{value[key] || ''}</S.TableData>
            ))}
          </S.TableRow>
        ))}
      </S.TableBody>
    </S.Table>
  );
}

export default Table;
