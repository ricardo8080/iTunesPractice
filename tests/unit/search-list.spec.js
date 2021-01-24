import { shallowMount, createLocalVue } from "@vue/test-utils";
import Itunes from "@/components/Itunessearch.vue";
import { assert, expect } from "chai";
import Vuex from "vuex";
import { mockStore } from "./mockStore";

describe("Search Steps to Show Items", () => {
  let localVue;
  let store;
  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuex);
    store = new Vuex.Store(mockStore);
  });
  it("The input field should be filled with the search_value before search", () => {
    const wrapper = shallowMount(Itunes, {
      store,
      localVue
    });
    wrapper.vm.$data.search_value = "jack+johnson";
    const isValid = wrapper.vm.inputIsNotEmpty();
    assert.isTrue(isValid);
  });
  it("state.search_list may contain something when getter is called", () => {
    const wrapper = shallowMount(Itunes, {
      store,
      localVue
    });
    const expectedLength = 6;
    const searchlist = wrapper.vm.searchlist;
    assert.equal(searchlist.length, expectedLength);
    //expect(searchlist.length).to.equal(expectedLength);
  });
  it("The previous search list must be eliminated before the new one", () => {
    const wrapper = shallowMount(Itunes, {
      store,
      localVue
    });
    const expectedBeforeLength = 6;
    const searchbeforelist = wrapper.vm.searchlist;
    expect(searchbeforelist.length).to.equal(expectedBeforeLength);
    wrapper.vm.deleteItems();
    const expectedAfterLength = 0;
    const searchafterlist = wrapper.vm.searchlist;
    expect(searchafterlist.length).to.equal(expectedAfterLength);
  });
  it("Check content of the create_Query method", () => {
    const wrapper = shallowMount(Itunes, {
      store,
      localVue
    });
    wrapper.vm.$data.search_value = "jack+johnson";
    const query = wrapper.vm.create_Query();
    expect(query).to.equal(
      "https://itunes.apple.com/search?term=jack+johnson&entity=album"
    );
  });
  it("Add an item after returning searchlist to empty state", () => {
    const wrapper = shallowMount(Itunes, {
      store,
      localVue
    });
    wrapper.vm.deleteItems();
    const resultList = wrapper.vm.$store.state.search_test;
    wrapper.vm.addItem({
      image: resultList.results[0].artworkUrl100,
      album: resultList.results[0].collectionName,
      artist: resultList.results[0].artistName,
      price: resultList.results[0].collectionPrice
    });
    const expectedSearchList = wrapper.vm.searchlist;
    expect(expectedSearchList.length).to.equal(1);
    expect(expectedSearchList[0].image).to.equal(
      "https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/be/38/d0/be38d058-31ed-c0ea-91e6-12052865fd20/source/100x100bb.jpg"
    );
    expect(expectedSearchList[0].album).to.equal(
      "Jack Johnson and Friends: Sing-A-Longs and Lullabies for the Film Curious George"
    );
    expect(expectedSearchList[0].artist).to.equal("Jack Johnson");
    expect(expectedSearchList[0].price).to.equal(9.99);
  });
  it("Check content in the search list resulting from a test result list", () => {
    const wrapper = shallowMount(Itunes, {
      store,
      localVue
    });
    wrapper.vm.deleteItems();
    const resultList = wrapper.vm.$store.state.search_test;
    wrapper.vm.fillSearchList(resultList);
    const expectedSearchList = wrapper.vm.searchlist;
    assert.equal(
      expectedSearchList[0].image,
      resultList.results[0].artworkUrl100
    );
    assert.equal(
      expectedSearchList[1].image,
      resultList.results[1].artworkUrl100
    );
    assert.equal(
      expectedSearchList[2].image,
      resultList.results[2].artworkUrl100
    );
  });
});