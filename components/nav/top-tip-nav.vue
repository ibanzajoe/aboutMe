<template>
  <div class="top-tip-nav px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64">
    <div class="tip-container">
      <div class="social-media-flex-box">
        <social-media />
      </div>

    </div>
    <div class="tip-container">
      <div class="email-container">
        <div class="email-icon">
          <img src="./images/envelope.svg" alt="email" />
        </div>
        <div class="email-label">
          quote@cashmacs.com
        </div>
      </div>
    </div>

    <div class="tip-container">
      <div class="email-container">
        <div class="email-icon">
          <img src="./images/paper-plane.svg" alt="email" />
        </div>
        <div class="email-label">
          2600 W. Olive Ave, Burbank, CA 91505
        </div>
      </div>
    </div>

    <div class="tip-container">
      <div class="email-container">
        <div class="email-icon">
          <img src="./images/phone-call.svg" alt="email" />
        </div>
        <div class="email-label">
          (323) 270 8582
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import socialMedia from '../socialMedia'

  export default {
    name: "top-tip-nav",
    components: {
      socialMedia
    }
  }
</script>
<style scoped>

  .top-tip-nav {
    min-height: 40px;
    background-color: #0e0e0e;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .tip-container {
    padding: 0.2rem 0;
  }
  .social-media-flex-box {
    display: flex;
    justify-content: start;
  }
  .email-container {
    display: flex;
    align-items: center;
  }

  .email-icon img {
    width: 18px;
    height: 18px;
  }

  .email-label {
    color: #9f9e9e;
    margin-left: 1rem;
  }

  @media screen and (max-width: 950px) {
    .top-tip-nav {
      flex-wrap: wrap;

    }

    .tip-container {
      flex: 1 1 100%;
    }

    .social-media-flex-box {
      justify-content: center;
    }

    .email-container {
      justify-content: center;
    }
  }


</style>