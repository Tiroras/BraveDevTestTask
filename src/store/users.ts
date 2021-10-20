import {makeAutoObservable} from 'mobx';
import {UserType} from '../types/types';

class Users {
  users: UserType[] = [];
  currentPage = 1;
  pages = 1;

  constructor() {
    makeAutoObservable(this);
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
