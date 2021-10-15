import React from 'react'
import {TableElement} from "./table-element";

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
        <TableElement name={"Vlad"} email={"fsf@fsa"} gender={"male"} status={"active"} />
      </tbody>
    </table>
  )
}