<template>
  <div class="social-media">
    <div class="social-media-container">
      <div class="social-media-item">
        <img src="./images/facebook.svg" alt="fb" />
      </div>
      <div class="social-media-item">
        <img src="./images/google-plus.svg" alt="g+" />
      </div>
      <div class="social-media-item">
        <img src="./images/pinterest.svg" alt="pint" />
      </div>
      <div class="social-media-item">
        <img src="./images/twitter.svg" alt="twit" />
      </div>
      <div class="social-media-item">
        <img src="./images/yelp.svg" alt="yelp" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "social-media-index"
  }
</script>

<style scoped>

  .social-media {
    display: flex;
    align-items: center;


  }
  .social-media-container {
    display: flex;
    align-items: center;
  }
  .social-media-item + .social-media-item {
    margin-left: 1rem;
  }
  img {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
</style>