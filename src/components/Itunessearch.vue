<template>
  <div class="search">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <div class="example" style="margin:auto;max-width:50%">
      <input type="text" placeholder="Search..." v-model="search_value" />
      <button type="submit" v-on:click="searchitems">
        <i class="fa fa-search"></i>
      </button>
    </div>
    <div class="box" v-if="notEmpty">
      <div class="card" v-for="item in searchlist" :key="item.album">
        <div class="imgBx">
          <img :src="item.image" alt="images" />
        </div>
        <div class="details">
          <h2>
            {{ item.album }}<br /><span>{{ item.artist }}</span
            ><span>{{ item.price }}</span>
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import $ from "jquery";
export default {
  name: "Itunes",
  data() {
    return {
      search_value: "",
      search: ""
    };
  },
  computed: {
    ...mapGetters(["getSearchItemsList"]),
    searchlist() {
      return this.getSearchItemsList;
    },
    notEmpty() {
      return this.searchlist.length > 0;
    }
  },
  methods: {
    ...mapActions(["addItem", "deleteItems"]),
    async searchitems() {
      if (this.inputIsNotEmpty()) {
        this.search_query =
          "https://itunes.apple.com/search?term=" +
          this.search_value +
          "&entity=album";
        this.deleteItems();
        // Create a jquery for the iTunesApi, get all info required and save them in state search_list
        var a;
        await $.getJSON(this.search_query, function(data) {
          a = data;
        });
        for (var i = 0; i < a.resultCount; i++) {
          this.addItem({
            image: a.results[i].artworkUrl100,
            album: a.results[i].collectionName,
            artist: a.results[i].artistName,
            price: a.results[i].collectionPrice
          });
        }
      }
    },
    inputIsNotEmpty() {
      return this.search_value != null && this.search_value != "";
    }
  }
};
</script>

<style src="@/assets/search.css" scoped></style>
