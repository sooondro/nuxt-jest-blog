<template>
  <b-card class="mb-4 mx-auto col-8 col-md-7 col-lg-6 col-xl-5" no-body>
    <b-card-img @click="openPost" :src="imageURL" alt="image" top></b-card-img>
    <b-card-body>
      <b-card-title>
        <nuxt-link class="title" :to="'/account/' + userId">{{
          author
        }}</nuxt-link>
      </b-card-title>
      <b-card-text>
        <div id="description">
          {{ description }}
        </div>
        <br />
        <small>{{ date | date }}</small>
      </b-card-text>

      <b-button href="#" variant="primary">Open post</b-button>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    imageURL: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    date: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  methods: {
    openPost() {
      this.$router.push(`/post/${this.id}`);
    },
  },
};
</script>

<style scoped>
a.title {
  color: black;
}

a.title:hover {
  text-decoration: none;
  color: black;
}
</style>