import { createLocalVue, mount } from "@vue/test-utils";
import BootstrapVue from "bootstrap-vue";
import TheHeader from "@/components/Navigation/TheHeader.vue";
import Vuex from "vuex";


const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(Vuex);



describe("TheHeader", () => {
  let getters;
  let wrapper;
  let store;
  
  beforeEach(() => {
    getters = {
      "auth/isAuthenticated": () => true,
      "auth/userEmail": () => "sandro@sandro.com",
      "auth/userId": () => "zJRBXG4HX8dMDbaryVuoHt8O0Yu2"
    };

    store = new Vuex.Store({
      getters
    });

    wrapper = mount(TheHeader, {
      store,
      localVue
    });

  })
  it("Renders", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("Show user email", () => {
    expect(wrapper.find("em").text()).toBe(getters['auth/userEmail']());
  });

});
