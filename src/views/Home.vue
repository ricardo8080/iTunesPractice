<template>
  <div class="home">
    <h1>
      <img alt="Logo" src="../assets/logo.png" width="5%" height="5%" />
      iTunes Search
    </h1>
    <Itunes />
  </div>
</template>

<script>
// @ is an alias to /src
import Itunes from "@/components/Itunessearch.vue";

export default {
  name: "Home",
  components: {
    Itunes
  }
};
</script>

<style scoped>
.home {
  display: inline-block;
  vertical-align: middle;
  font-size: 150%;
}
</style>
