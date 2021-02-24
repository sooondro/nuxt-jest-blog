<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
      <b-navbar-brand to="/">Chessgram</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item id="authButton" v-if="!isAuthenticated" to="/auth"
            >Login/Sign Up</b-nav-item
          >
          <b-nav-item-dropdown v-else right>
            <template #button-content>
              <em>{{ userEmail }}</em>
            </template>
            <b-dropdown-item :to="accountLink">Profile</b-dropdown-item>
            <b-dropdown-item id="logoutButton" @click="onLogout">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      isAuthenticated: "auth/isAuthenticated",
      userEmail: "auth/userEmail",
      userId: "auth/userId",
    }),
    accountLink() {
      return "/account/" + this.userId;
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
