<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
      <b-navbar-brand to="/">Chessgram</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/about">About</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item v-if="!isAuthenticated" to="/auth"
            >Login/Sign Up</b-nav-item
          >
          <b-nav-item-dropdown v-else right>
            <template #button-content>
              <em>{{ userEmail }}</em>
            </template>
            <b-dropdown-item :to="accountLink">Profile</b-dropdown-item>
            <b-dropdown-item @click="onLogout">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  computed: {
    isAuthenticated() {
      return this.$store.getters["auth/isAuthenticated"];
    },
    accountLink() {
      return "/account/" + this.$store.getters["auth/userId"];
    },
    userEmail() {
      return this.$store.getters["auth/userEmail"];
    },
  },
  methods: {
    onLogout() {
      this.$store.dispatch("auth/logoutUser");
      this.$router.push("/auth");
    },
  },
};
</script>
