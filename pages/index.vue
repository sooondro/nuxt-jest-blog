<template>
  <div>
    <NewPost />
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
export default {
  computed: {
    loadedPosts() {
      return this.$store.getters["posts/loadedPosts"];
    },
  },
};
</script>