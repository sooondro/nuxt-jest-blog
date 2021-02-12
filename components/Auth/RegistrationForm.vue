<template>
  <b-container>
    <b-form @submit.prevent="onSubmit">
      <b-form-group
        label="Email address:"
        label-for="email"
        description="Enter your email adress."
      >
        <b-form-input
          id="email"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Your Password:" label-for="password">
        <b-form-input
          id="password"
          v-model="form.password"
          type="password"
          placeholder="Enter password"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Your Password:" label-for="repeatedPassword">
        <b-form-input
          id="repeatedPassword"
          v-model="form.repeatedPassword"
          type="password"
          placeholder="Repeat your password"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
          email: '',
          password: '',
          repeatedPassword: '',
      }
    };
  },
  methods: {
    onSubmit() {
      alert(JSON.stringify(this.form));
    },
  },
};
</script>