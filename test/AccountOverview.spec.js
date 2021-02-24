import { createLocalVue, mount } from "@vue/test-utils";
import BootstrapVue from "bootstrap-vue";
import AccountOverview from "@/components/Account/AccountOverview.vue";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(Vuex);

describe("AccountOverview", () => {
  let wrapper;
  let getters;
  let store;

  beforeEach(() => {
    getters = {
      "auth/userEmail": () => "sandro@sandro.com"
    };

    store = new Vuex.Store({
      getters
    });

    wrapper = mount(AccountOverview, {
      store,
      localVue
    });
  });

  it("Renders user data correctly", () => {
    expect(wrapper.find("h4").text()).toBe(getters["auth/userEmail"]());
    expect(wrapper.find("img").attributes().src).toBe(
        "https://static.thenounproject.com/png/692778-200.png"
      );
  });
});
