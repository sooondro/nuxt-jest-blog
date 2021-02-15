<template>
  <b-card
    :title="post.author"
    :img-src="post.imageURL"
    img-alt="Image"
    img-top
    class="mb-4 mx-auto col-8 col-md-7 col-lg-6 col-xl-5"
  >
    <div v-if="!show">
      {{ post.description }}
    </div>
    <div v-else>
      <b-form-group
        id="description"
        label="Edit post description:"
        label-for="input"
      >
        <b-form-textarea
          id="input"
          v-model="editedDescription"
          :placeholder="post.description"
          required
        ></b-form-textarea>
      </b-form-group>
    </div>
    <div>
      <small>{{ post.date | date }}</small>
    </div>
    <hr />

    <b-button v-if="isOwner" variant="primary" @click="toggleForm">{{
      buttonText
    }}</b-button>
    <b-button v-if="show" @click="onSubmit" variant="outline-success"
      >Submit changes</b-button
    >
  </b-card>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      editedDescription: "",
    };
  },
  async asyncData(context) {
    try {
      const post = await context.app.$axios.$get(
        "/posts/" + context.params.postId + ".json"
      );
      return { post };
    } catch (error) {
      console.log(error);
    }
  },
  computed: {
    isOwner() {
      return (
        this.$store.getters["auth/isAuthenticated"] &&
        this.$store.getters["auth/userId"] == this.post.userId
      );
    },
    buttonText() {
      return this.show ? "Cancel" : "Edit post";
    },
  },
  methods: {
    toggleForm() {
      this.show = !this.show;
    },
    onSubmit() {
      this.$store.dispatch("posts/editPost", {
        ...this.post,
        description: this.editedDescription,
        id: this.$route.params.postId,
      });
      this.post.description = this.editedDescription;
      this.editedDescription = "";
      this.show = !this.show;
    },
  },
};
</script>