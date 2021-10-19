import {makeAutoObservable} from 'mobx';


class UserPosts {
  posts = []
  constructor() {
    makeAutoObservable(this);
  }

  setPosts(posts) {
    this.posts = posts;
  }
}

export const userPosts = new UserPosts();
