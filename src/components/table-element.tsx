import React from 'react';
import styled from 'styled-components';

const Gender = styled.td`
  text-align: center;
`;

const Status = styled.td`
  text-align: center;
`;

interface IProps {
  id: number
  name: string
  email: string
  gender: 'male' | 'female'
  status: 'active' | 'inactive'
}

export const TableElement: React.FC<IProps> = (props) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.email}</td>
      <Gender>{props.gender}</Gender>
      <Status>{props.status}</Status>
    </tr>
  );
};
