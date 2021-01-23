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
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import $ from "jquery";
export default {
  name: "Itunes",
  data() {
    return {
      search_value: "",
      search: "",
      example: {
        image: "",
        album: "",
        artist: "",
        price: null
      },
      data: []
    };
  },
  computed: {
    ...mapGetters(["getSearchItemsList"]),
    searchlist() {
      return this.getSearchItemsList;
    }
  },
  methods: {
    searchitems() {
      this.search =
        "https://itunes.apple.com/search?term=" +
        this.search_value +
        "&entity=album";
      try {
        if (this.search_value != "" && this.search_value != null) {
          $.getJSON(this.search, function(data) {
            this.data = data;
            this.example.push = {
              image: data.results[0].artworkUrl100,
              album: data.results[0].collectionName,
              artist: data.results[0].artistName,
              price: data.results[0].collectionPrice
            };
            //this.putDataToAlbumInfoList(data);
          });
        }
      } catch (error) {
        console.log("Wrong or unnaceptable data to Search");
      }
    },
    putDataToAlbumInfoList(data) {
      for (var i = 0; i < data.resultCount; i++) {
        this.albuminfo.push({
          image: data.results[i].artworkUrl100,
          album: data.results[i].collectionName,
          artist: data.results[i].artistName,
          price: data.results[i].collectionPrice
        });
      }
      console.log(this.albuminfo);
    }
  }
};
</script>

<style src="@/assets/search.css" scoped></style>
