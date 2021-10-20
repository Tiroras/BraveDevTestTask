import {makeAutoObservable} from 'mobx';
import {getUsers} from '../api/api';
import {UserType} from '../types';

class Users {
  users: UserType[] = [];
  isLoading = false;
  error;

  constructor() {
    makeAutoObservable(this);
  }

  toggleLoading() {
    this.isLoading = this.isLoading ? false : true;
  }

  addUsers(users) {
    this.users.push(...users);
  }

  setError(error) {
    this.error = error;
  }

  loadMore(page) {
    this.toggleLoading();
    getUsers(page).then((res) => {
      this.addUsers(res.data);
      this.toggleLoading();
    }).catch((err) => this.setError(err));
  }
}

export const users = new Users();
