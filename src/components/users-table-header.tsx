import React from 'react';
import styled from 'styled-components';
import {colors} from '../themes/colors';

const THead = styled.thead`
  background: ${colors.darkGrey};
  color: ${colors.white};
`;

export const UsersTableHeader = () => {
  return (
    <THead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Gender</th>
        <th>Status</th>
      </tr>
    </THead>
  );
};
