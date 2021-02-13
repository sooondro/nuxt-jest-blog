<template>
  <b-card
    :title="author"
    :img-src="imageURL"
    img-alt="Image"
    img-top
    class="mb-4 mx-auto col-8 col-md-7 col-lg-6 col-xl-5"
  >
    <b-card-text>
      {{ description }}
      <br />
      <small>{{ date }}</small>
    </b-card-text>

    <b-button variant="primary">Edit Post</b-button>
  </b-card>
</template>

<script>
export default {
  async asyncData(context) {
    try {
      const post = await context.app.$axios.$get(
        "/posts/" + context.params.postId + ".json"
      );
      return { ...post };
    } catch (error) {
      console.log(error);
    }
  },
};
</script>