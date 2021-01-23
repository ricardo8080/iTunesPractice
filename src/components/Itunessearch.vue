<template>
  <div class="search">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <div class="example" style="margin:auto;max-width:50%">
      <input type="text" placeholder="Search.." name="search2" />
      <button type="submit"><i class="fa fa-search"></i></button>
    </div>
    <div class="box">
      <div class="card">
        <div class="imgBx">
          <img
            src="https://images.unsplash.com/photo-1532123675048-773bd75df1b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="images"
          />
        </div>
        <div class="details">
          <h2>
            Insert Album Name<br /><span>Insert Artist Name</span
            ><span>Insert Price</span>
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Itunes"
};
</script>

<style src="@/assets/search.css" scoped></style>
