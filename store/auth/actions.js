import Cookie from "js-cookie";

export default {
  async authenticateUser(vuexContext, authData) {
    let authURL =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
      process.env.fbAPIKey;

    if (!authData.isLogin) {
      authURL =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
        process.env.fbAPIKey;
    }

    try {
      const res = await this.$axios.$post(authURL, {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      });

      const expirationDate =
        new Date().getTime() + Number.parseInt(res.expiresIn) * 1000;

      Cookie.set("jwt", res.idToken);
      Cookie.set("expirationDate", expirationDate);
      Cookie.set("userId", res.localId);
      Cookie.set("userEmail", res.email);
      localStorage.setItem("token", res.idToken);
      localStorage.setItem("userId", res.localId);
      localStorage.setItem("userEmail", res.email);
      localStorage.setItem("tokenExpiration", expirationDate);

      vuexContext.commit("setToken", res.idToken);
      vuexContext.commit("setUserId", res.localId);
      vuexContext.commit("setUserEmail", res.email);
    } catch (error) {
      console.log(error);
    }
  },
  initAuth(vuexContext, req) {
    let token, expirationDate, userEmail, userId;
    if (req) {
      if (!req.headers.cookie) {
        return;
      }

      const jwtCookie = req.headers.cookie
        .split(";")
        .find(cookie => cookie.trim().startsWith("jwt="));

      if (!jwtCookie) {
        return;
      }

      token = jwtCookie.split("=")[1];

      expirationDate = req.headers.cookie
        .split(";")
        .find(cookie => cookie.trim().startsWith("expirationDate="))
        .split("=")[1];

      userEmail = req.headers.cookie
        .split(";")
        .find(cookie => cookie.trim().startsWith("userEmail="))
        .split("=")[1];

      userId = req.headers.cookie
        .split(";")
        .find(cookie => cookie.trim().startsWith("userId="))
        .split("=")[1];
    } else {
      token = localStorage.getItem("token");
      expirationDate = localStorage.getItem("tokenExpiration");
      userEmail = localStorage.getItem("userEmail");
      userId = localStorage.getItem("userId");
    }
    if (new Date().getTime() > +expirationDate || !token) {
      vuexContext.dispatch("logoutUser");
      return;
    }

    vuexContext.commit("setToken", token);
    vuexContext.commit("setUserId", userId);
    vuexContext.commit("setUserEmail", userEmail);
  },
  logoutUser(vuexContext) {
    vuexContext.commit("clearToken");
    vuexContext.commit("clearUserEmail");
    vuexContext.commit("clearUserId");

    Cookie.remove("jwt");
    Cookie.remove("expirationDate");
    Cookie.remove("userEmail");
    Cookie.remove("userId");
    if (process.client) {
      localStorage.removeItem("token");
      localStorage.removeItem("tokenExpiration");
      localStorage.removeItem("userId");
      localStorage.removeItem("userEmail");
    }
  }
};
