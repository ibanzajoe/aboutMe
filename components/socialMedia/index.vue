<template>
  <div class="social-media">
    <div class="social-media-container">
      <a href="https://www.facebook.com/cashmacsLA" class="social-media-item">
        <img src="./images/facebook.svg" alt="fb" />
      </a>
      <div class="social-media-item">
        <img src="./images/pinterest.svg" alt="pint" />
      </div>
      <div class="social-media-item">
        <img src="./images/twitter.svg" alt="twit" />
      </div>
      <a href="https://www.yelp.com/biz/cashmacs-burbank" class="social-media-item">
        <img src="./images/yelp.svg" alt="yelp" />
      </a>
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