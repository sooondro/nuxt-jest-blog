<template>
  <div>
    <NewPost v-if="isAuthenticated" />
    <p class="text-center" v-else>
      You must be logged in to create a new post!
      <b-button type="info" to="/auth">Login</b-button>
    </p>
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
export default {
  computed: {
    isAuthenticated() {
      return this.$store.getters["auth/isAuthenticated"];
    },
    loadedPosts() {
      return this.$store.getters["posts/loadedPosts"];
    },
  },
};
</script>