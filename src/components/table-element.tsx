import React from 'react'

interface IProps {
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
      <td>{props.gender}</td>
      <td>{props.status}</td>
    </tr>
  )
}