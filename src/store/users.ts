import { makeAutoObservable } from 'mobx'
import { UserType } from '../utils/types'

class Users {
  users: UserType[] = []

  constructor() {
    makeAutoObservable(this)
  }

  setUsers(newUsers: UserType[]){
    this.users = newUsers
  }
  
  addUsers(newUsers: UserType[]){
    this.users = [...this.users].concat(newUsers)
  }
}

export const users = new Users()