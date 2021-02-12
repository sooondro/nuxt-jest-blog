<template>
  <b-container fluid class="p-4 bg-dark">
    <b-row>
      <b-col
        class="text-center mb-3"
        cols="4"
        v-for="post in posts"
        :key="post.id"
      >
        <b-img
          thumbnail
          fluid
          src="https://picsum.photos/250/250/?image=54"
          alt="Image 1"
        ></b-img>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>