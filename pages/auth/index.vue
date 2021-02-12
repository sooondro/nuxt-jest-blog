<template>
  <b-container>
    <p class="text-center">
      {{ authMessage }}<b-button @click="toggleForm" class="ml-3">{{ buttonText }}</b-button>
    </p>
    <LoginForm v-if="show" />
    <RegistrationForm v-else />
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    };
  },
  methods: {
    toggleForm() {
      this.show = !this.show;
    },
  },
  computed: {
    buttonText() {
      return this.show ? "Sign Up" : "Login";
    },
    authMessage() {
      return this.show ? "Don't have an account?" : "Already have an account?";
    },
  },
};
</script>
