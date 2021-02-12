<template>
  <div>
    <PostPreview
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :author="post.author"
      :date="post.date"
      :description="post.description"
      :imageURL="post.imageURL"
    />
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    }
  }
};
</script>