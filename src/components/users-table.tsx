import React, {useEffect, useState} from 'react';
import {users} from '../store/users';
import styled from 'styled-components';
import {observer} from 'mobx-react-lite';
import {colors} from '../themes/colors';
import {LoadingIndicator} from './loading-indicator';
import {UsersTableHeader} from './users-table-header';
import {UsersTableContent} from './users-table-content';

const Wrapper = styled.div`
  max-height: 99vh;
  overflow: scroll;
  overflow-x: hidden;
`;

const Table = styled.table`
  margin: auto;
  font-size: 24px;
  background: ${colors.darkGrey};

  th, td{
    padding: 10px 20px;
  }
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
    if (isTableEnd && (currentPage !== users.pages)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <Wrapper onScroll={handlerScroll}>
        <Table>
          <UsersTableHeader />
          <UsersTableContent />
        </Table>
      </Wrapper>
      {users.isLoading && <LoadingIndicator />}
    </>
  );
});
