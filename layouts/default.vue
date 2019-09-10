<template>
  <div>
    <top-nav />
    <div class="w-full bg-transparent px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-12 bg-white xl:py-8 nav-offset-placeholder-container"
    >
      <div class="flex">
        <div class="v-offset-logo-placeholder" data-v-68cf3254=""><a href="/" data-v-68cf3254=""><img src="https://cashmacs.com/wp-content/uploads/2015/03/Cash-for-macs.png" width="150" data-v-68cf3254=""></a></div>
        <a href="/" class="sm:px-4 py-2 block bg-blue-600 text-white rounded-lg ml-4 nav-offset-placeholder hidden sm:flex" data-v-68cf3254="">
          Get Started
        </a>
      </div>
    </div>

    <nuxt />
    <nav-footer class="relative bg-white px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pt-12 pb-10 text-center sm:text-left" />
  </div>
</template>

<script>
  import topNav from '~/components/nav/top-nav.vue'
  import navFooter from '~/components/nav/nav-footer.vue'


  export default {
    components: {
      topNav, navFooter
    }
  }

</script>


<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

  .v-offset-logo-placeholder {
    color: transparent;
    background-color: transparent;
    border: 0;
  }
  .v-offset-logo-placeholder img {
    background: transparent;
  }
  .nav-offset-placeholder {
    color: transparent;
    background-color: transparent;
    border: 0;
  }

  .nav-offset-placeholder-container {
    @media screen and (max-width: 950px) {
      height: 209px;
    }
  }
</style>
