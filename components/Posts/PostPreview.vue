<template>
  <b-card
    @click="openPost"
    :title="author"
    :img-src="imageURL"
    img-alt="Image"
    img-top
    class="mb-4 mx-auto col-8 col-md-7 col-lg-6 col-xl-5"
  >
    <b-card-text>
      {{ description }}
      <br />
    </b-card-text>

    <b-button href="#" variant="primary">Open post</b-button>
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
    }
  },
  methods: {
    openPost() {
      this.$router.push(`/post/${this.id}`);
    },
  },
};
</script>
