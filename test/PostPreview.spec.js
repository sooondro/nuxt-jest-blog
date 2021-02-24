import { createLocalVue, mount, RouterLinkStub } from "@vue/test-utils";
import BootstrapVue from "bootstrap-vue";
import PostPreview from "@/components/Posts/PostPreview.vue";
import DateFilter from "@/plugins/date-filter.js";

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(DateFilter);

const $router = {
  push: jest.fn()
};

describe("PostPreview", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(PostPreview, {
      localVue,
      propsData: {
        id: "-MTX9psXG9qjcMHZcVxE",
        author: "test2@test.com",
        imageURL:
          "https://www.chess.com/bundles/web/images/web/board-puzzles.600ddf36.png",
        description: "That's Life",
        date: "2021-02-14T20:11:27.812Z",
        userId: "9TeMPNUaYSZUATwVcuGpjh5OiJ92"
      },
      mocks: {
        $router
      },
      stubs: {
        NuxtLink: RouterLinkStub
      }
    });
  });

  it("Renders post content correctly", () => {
    expect(wrapper.find("img").attributes().src).toBe(
      wrapper.vm.$props.imageURL
    );
    expect(wrapper.find(".title").text()).toBe(wrapper.vm.$props.author);
    expect(wrapper.find("small").text()).toBe("14. February 2021");
    expect(wrapper.find("#description").text()).toBe(
      wrapper.vm.$props.description
    );
    expect(wrapper.find(".btn").text()).toBe("Open post");
  });

  it("Redirects to post page when post is clicked", async () => {
    await wrapper.find("img").trigger("click");
    expect($router.push).toHaveBeenCalled();
  });
});
