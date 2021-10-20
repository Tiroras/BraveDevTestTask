import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {getPostsByUser} from '../api/api';
import {colors} from '../themes/colors';
import {UserType} from '../types';

const Wrapper = styled.tr`
  :hover{
    background: ${colors.grey};
  }
`;

const Cell = styled.td`
  padding: 10px 20px;
`;

const Name = styled(Cell)`
  width: 20%;
  max-width: 20%;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
`;

const Email = styled(Cell)`
  width: 60%;
`;

const CenterCell = styled(Cell)`
  text-align: center;
`;

export const TableElement: React.FC<UserType> = (props) => {
  const [postsNumber, setPostsNumber] = useState(0);

  useEffect(() => {
    getPostsByUser(props.id).then((res) => {
      setPostsNumber(res.meta.pagination.total);
    });
  }, []);

  return (
    <Wrapper>
      <Name>{props.name}</Name>
      <Email title={postsNumber.toString()}>{props.email}</Email>
      <CenterCell>{props.gender}</CenterCell>
      <CenterCell>{props.status}</CenterCell>
    </Wrapper>
  );
};
