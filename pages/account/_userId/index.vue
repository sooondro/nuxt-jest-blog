<template>
    <b-container fluid="md">
        <AccountOverview class="mb-3"/>
        <PostGrid :posts="posts"/>
    </b-container>
</template>

<script>
export default {
    
  data() {
    return {
      posts: [
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
        {
          id: "3",
          author: "sandro",
          date: Date.now(),
          description: "ovo je prvi post",
          imageURL:
            "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/feynarun/php6pAiTS.jpeg",
        },
        {
          id: "4",
          author: "sandro",
          date: Date.now(),
          description: "ovo je drugi post",
          imageURL:
            "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/feynarun/php6pAiTS.jpeg",
        },
      ],
    };
  },
}
</script>