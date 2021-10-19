import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {getPostsByUser} from '../api/api';

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
  const [postsNumber, setPostsNumber] = useState(0);

  useEffect(() => {
    getPostsByUser(props.id).then((res) => {
      setPostsNumber(res.meta.pagination.total);
    });
  }, []);

  // const handlerMouseEnter = () => {
  //   getPostsByUser(props.id).then((res) => {
  //     setPostsNumber(res.meta.pagination.total);
  //   });
  // };

  return (
    <tr>
      <td>{props.name}</td>
      <td
        title={postsNumber.toString()}
      >{props.email}</td>
      <Gender>{props.gender}</Gender>
      <Status>{props.status}</Status>
    </tr>
  );
};
