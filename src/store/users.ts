import {makeAutoObservable} from 'mobx';
import {getUsers} from '../api/api';
import {UserType} from '../types';

class Users {
  users: UserType[] = [];
  pages = 1;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  toggleLoading() {
    this.isLoading = this.isLoading ? false : true;
  }

  setPages(pages: number) {
    this.pages = pages;
  }

  addUsers(users) {
    this.users.push(...users);
  }

  loadMore(page) {
    this.toggleLoading();
    getUsers(page).then((res) => {
      this.setPages(res.meta.pagination.pages);
      this.addUsers(res.data);
      this.toggleLoading();
    });
  }
}

export const users = new Users();
