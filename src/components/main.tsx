import React from 'react'
import { TableElement } from './table-element'
import { users } from './../store/users'
import { UserType } from './../utils/types'

export const Main = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Имя</th>
          <th>Почта</th>
          <th>Пол</th>
          <th>Статус</th>
        </tr>
      </thead>
      <tbody>
        <TableElement name={'Vlad'} email={'fsf@fsa'} gender={'male'} status={'active'} />
        {users.users.map((user: UserType) => (
          <TableElement 
            key={user.id}
            name={user.name}
            email={user.email}
            gender={user.gender}
            status={user.status}
          />
        ))}
      </tbody>
    </table>
  )
}
