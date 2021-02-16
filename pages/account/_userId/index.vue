<template>
  <b-container fluid="md">
    <AccountOverview class="mb-3" />
    <NewPost v-if="isOwner" class="mb-3"/>
    <PostGrid :posts="userPosts" />
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
    };
  },
  computed: {
    userPosts() {
      return this.$store.getters["posts/userPosts"](this.$route.params.userId);
    },
    isOwner() {
      return this.$store.getters['auth/isAuthenticated'] && this.$route.params.userId === this.$store.getters['auth/userId'];
    }
  },
};
</script>