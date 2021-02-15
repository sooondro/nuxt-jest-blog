export default {
  setPosts(vuexContext, posts) {
    vuexContext.commit("setPosts", posts);
  },
  async addPost(vuexContext, post) {
    try {
      const createdPost = {
        ...post,
        date: new Date(),
        comments: [],
        likes: 0,
        author: vuexContext.rootGetters["auth/userEmail"],
        userId: vuexContext.rootGetters["auth/userId"]
      };
      const res = await this.$axios.$post(
        "/posts.json?auth=" + vuexContext.rootGetters["auth/token"],
        createdPost
      );
      vuexContext.commit("addPost", {
        ...createdPost,
        id: res.name,
        date: createdPost.date.toString()
      });
    } catch (error) {
      console.log(error);
    }
  },
  async editPost(vuexContext, post) {
    try {
      const res = await this.$axios.$put(
        "/posts/" +
          post.id +
          ".json?auth=" +
          vuexContext.rootGetters["auth/token"],
        post
      );
    } catch (error) {
      console.log(error);
    }
  }
};
