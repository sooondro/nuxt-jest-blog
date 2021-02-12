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
      <small>{{
        new Date(date).toLocaleString("en-GB", { timeZone: "UTC" })
      }}</small>
    </b-card-text>

    <b-button variant="primary">Edit Post</b-button>
  </b-card>
</template>

<script>
export default {
  data() {
    return {
      id: "1",
      author: "sandro",
      date: Date.now(),
      description: "ovo je prvi post",
      imageURL:
        "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/feynarun/php6pAiTS.jpeg",
    };
  },
};
</script>