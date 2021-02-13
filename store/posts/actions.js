export default {
  setPosts(vuexContext, posts) {
    vuexContext.commit("setPosts", posts);
  },
  async addPost(vuexContext, post) {
    try {
      const createdPost =         {
        ...post,
        date: new Date(),
        comments: [],
        likes: 0,
        author: "Sandro"
      };
      const res = await this.$axios.post(
        "https://nuxt-jest-blog-default-rtdb.europe-west1.firebasedatabase.app/posts.json",
        createdPost
      );
      console.log(res);
      vuexContext.commit("addPost", { ...createdPost, id: res.data.name });
    } catch (error) {
      console.log(error);
    }
  }
};
