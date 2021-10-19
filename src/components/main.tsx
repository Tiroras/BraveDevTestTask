import React, {useEffect, useState} from 'react';
import {TableElement} from './table-element';
import {users} from './../store/users';
import {UserType} from './../utils/types';
import {getUsers} from '../api/api';
import styled from 'styled-components';
import {observer} from 'mobx-react-lite';
import {colors} from '../utils/colors';
import {LoadingIndicator} from './loading-indicator';

const Wrapper = styled.div`
  max-height: 99vh;
  overflow: scroll;
  overflow-x: hidden;
`;

const Table = styled.table`
  margin: auto;
  font-size: 24px;
  background: black;

  th, td{
    padding: 10px 20px;
  }
`;

const THead = styled.thead`
  background: ${colors.black};
  color: white;
`;

const TBody = styled.tbody`
  background: white;
`;

export const Main = observer(() => {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getUsers(users.currentPage).then((res) => {
      users.addUsers(res.data);
      users.setPages(res.meta.pagination.pages);
      setLoading(false);
    });
  }, [users.currentPage]);

  const handlerScroll = (e) => {
    const target = e.target;
    if ((target.scrollHeight - target.scrollTop === target.clientHeight) &&
    (users.currentPage !== users.pages)) {
      users.setCurrentPage(users.currentPage + 1);
    }
  };

  return (
    <>
      <Wrapper onScroll={handlerScroll}>
        <Table>
          <THead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Status</th>
            </tr>
          </THead>
          <TBody>
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
          </TBody>
        </Table>
      </Wrapper>
      {isLoading && <LoadingIndicator />}
    </>
  );
});
