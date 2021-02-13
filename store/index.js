export const state = () => ({});

export const mutations = {};

export const actions = {
  async nuxtServerInit(vuexContext, context) {
    try {
      const res = await context.app.$axios.$get(
        "https://nuxt-jest-blog-default-rtdb.europe-west1.firebasedatabase.app/posts.json"
      );
      console.log(res);
      const postsArray = [];
      for (const key in res) {
        postsArray.push({ ...res[key], id: key });
        vuexContext.commit("posts/setPosts", postsArray);
      }
    } catch (error) {
      console.log(error);
    }
  }
};

export const getters = {};
