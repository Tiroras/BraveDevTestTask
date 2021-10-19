import {makeAutoObservable} from 'mobx';
import {UserType} from '../utils/types';

class Users {
  users: UserType[] = [];
  currentPage = 1;
  pages = 1;

  constructor() {
    makeAutoObservable(this);
  }

  setUsers(newUsers: UserType[]) {
    this.users = newUsers;
  }

  addUsers(newUsers: UserType[]) {
    this.users.push(...newUsers);
  }

  setCurrentPage(newPage) {
    this.currentPage = newPage;
  }

  setPages(pages) {
    this.pages = pages;
  }
}

export const users = new Users();
