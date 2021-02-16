export default {
  loadedPosts(state) {
    return state.loadedPosts;
  },
  userPosts: (state) => id => {
    return state.loadedPosts.filter(post => post.userId === id);
  }
};
