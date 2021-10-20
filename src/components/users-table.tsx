import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {observer} from 'mobx-react-lite';

import {users} from '../store/users';
import {colors} from '../themes/colors';
import {LoadingIndicator} from './loading-indicator';
import {UsersTableHeader} from './users-table-header';
import {UsersTableContent} from './users-table-content';

const Wrapper = styled.div`
  max-height:100vh;
  overflow-x: hidden;
`;

const Table = styled.table`
  margin: auto;
  font-size: 24px;
  background: ${colors.darkGrey};
  max-width: 1024px;
  width: 100%;
`;

export const UsersTable = observer(() => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    users.loadMore(currentPage);
  }, [currentPage]);

  const handlerScroll = (e) => {
    const target = e.target;
    const isTableEnd = ((target.scrollHeight - target.scrollTop) ===
    target.clientHeight);

    if (isTableEnd) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <Wrapper onScroll={handlerScroll} >
        <Table >
          <UsersTableHeader />
          <UsersTableContent />
        </Table>
      </Wrapper>
      {users.error && users.error.message}
      {users.isLoading && <LoadingIndicator />}
    </>
  );
});
