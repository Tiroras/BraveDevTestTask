import React, {useEffect} from 'react';
import {TableElement} from './table-element';
import {users} from './../store/users';
import {UserType} from './../utils/types';
import {getUsers} from '../api/api';
import styled from 'styled-components';
import {observer} from 'mobx-react-lite';

const Wrapper = styled.div`
  max-height: 900px;
  overflow: scroll;
`;

const Table = styled.table`
  margin: auto;
  font-size: 24px;
  th{
    border: 1px solid black;
  }
  td{
    border: 1px solid black;
    padding: 10px;
  }
`;

const THead = styled.thead`
  max-height: 100px;
`;

export const Main = observer(() => {
  useEffect(() => {
    getUsers(users.currentPage).then((res) => {
      users.addUsers(res.data);
    });
  }, [users.currentPage]);

  const handlerScroll = (e) => {
    const target = e.target;
    if (target.scrollHeight - target.scrollTop === target.clientHeight) {
      users.setCurrentPage(users.currentPage + 1);
    }
  };

  return (
    <Wrapper onScroll={handlerScroll}>
      <Table>
        <THead>
          <tr>
            <th>Имя</th>
            <th>Почта</th>
            <th>Пол</th>
            <th>Статус</th>
          </tr>
        </THead>
        <tbody>
          {users.users.map((user: UserType) => (
            <TableElement
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              gender={user.gender}
              status={user.status}
            />
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
});
