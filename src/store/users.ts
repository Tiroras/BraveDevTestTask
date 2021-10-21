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

  addUsers(users) {
    this.users.push(...users);
  }

  setError(error) {
    this.error = error;
  }

  loadMore(page) {
    this.isLoading = true;
    getUsers(page).then((res) => {
      this.addUsers(res.data);
      this.isLoading = false;
    }).catch((err) => this.setError(err));
  }
}

export const users = new Users();
