<template>
  <div>
    <NewPost />
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      loadedPosts: [
        {
          id: "1",
          author: "sandro",
          date: Date.now(),
          description: "ovo je prvi post",
          imageURL:
            "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/feynarun/php6pAiTS.jpeg",
        },
        {
          id: "2",
          author: "sandro",
          date: Date.now(),
          description: "ovo je drugi post",
          imageURL:
            "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/feynarun/php6pAiTS.jpeg",
        },
      ],
    };
  }
};
</script>