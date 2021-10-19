import {makeAutoObservable} from 'mobx';


class UserPosts {
  posts = []
  postsNumber = 0;
  constructor() {
    makeAutoObservable(this);
  }

  setPosts(posts) {
    this.posts = posts;
  }

  setPostsNumber(postsNumber) {
    this.postsNumber = postsNumber;
  }
}

export const userPosts = new UserPosts();
