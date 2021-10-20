import React from 'react';
import styled from 'styled-components';
import {users} from '../store/users';
import {colors} from '../themes/colors';
import {TableElement} from './table-element';

const TBody = styled.tbody`
  background: ${colors.white};
`;

export const UsersTableContent = () => {
  return (
    <TBody>
      {users.users.map((user) => (
        <TableElement
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
          gender={user.gender}
          status={user.status}
        />
      ))}
    </TBody>
  );
};
