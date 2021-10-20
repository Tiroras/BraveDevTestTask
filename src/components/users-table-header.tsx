import React from 'react';
import styled from 'styled-components';
import {colors} from '../themes/colors';

const THead = styled.thead`
  background: ${colors.darkGrey};
  color: ${colors.white};
`;

const Cell = styled.th`
  padding: 10px 20px;
`;

export const UsersTableHeader = () => {
  return (
    <THead>
      <tr>
        <Cell>Name</Cell>
        <Cell>Email</Cell>
        <Cell>Gender</Cell>
        <Cell>Status</Cell>
      </tr>
    </THead>
  );
};
