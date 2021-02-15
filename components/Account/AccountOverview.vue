<template>
  <div>
    <b-card
      :title="username"
      img-src="https://static.thenounproject.com/png/692778-200.png"
      img-alt="User Image"
      img-left
      tag="article"


    >
      <b-card-text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  computed: {
    username() {
      return this.$store.getters['auth/userEmail'];
    },
  },
};
</script>