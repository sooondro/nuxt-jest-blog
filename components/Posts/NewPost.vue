<template>
  <div class="mb-5 mx-auto col-8 col-md-7 col-lg-6 col-xl-5">
    <div class="mt-3 text-center">
      <b-button @click="toggleForm" variant="secondary">{{ buttonText}}</b-button>
    </div>
    <b-form v-if="show" @submit.prevent="onSubmit">
      <b-form-group
        id="input-group-1"
        label="Image URL:"
        label-for="input-1"
        description=".jpeg or .jpg format"
      >
        <b-form-input
          id="input-1"
          v-model="post.imageURL"
          type="url"
          placeholder="Enter image URL"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Post description:"
        label-for="input-2"
      >
        <b-form-textarea
          id="input-2"
          v-model="post.description"
          placeholder="Write desription text"
          required
        ></b-form-textarea>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      post: {
        description: "",
        imageURL: "",
      },
    };
  },
  methods: {
    toggleForm() {
      this.show = !this.show;
    },
  },
  computed: {
    buttonText() {
      return this.show ? "Cancel" : "Add new post";
    }
  }
};
</script>