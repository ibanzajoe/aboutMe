<template>
  <div class="top-nav w-full bg-transparent fixed top-0 left-0 z-50">
    <top-tip-nav />
    <header
      id="navbar"
      class="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-6 bg-white xl:py-4 shadow-md"
    >
      <!--:class="{
      'w-full bg-transparent fixed top-0 left-0 z-50 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-6 bg-white xl:py-4 shadow-md': !navPositionToggle,
      'top-nav w-full bg-transparent fixed top-0 left-0 z-50 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-6 xl:py-8': !navPositionToggle
      }"-->
      <nav class="flex items-center justify-between">
        <div class>
          <a href="/" >
            <img src="https://cashmacs.com/wp-content/uploads/2015/03/Cash-for-macs.png" width="150" />
          </a>

          <!--<a href="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="188" height="39"><text transform="translate(87 29)" fill="#454f5b" font-size="24">
              <tspan x="0" y="0">FairRate</tspan>
            </text>
              <path d="M54 39H0L27 6l27 33zM23 22v11h8V22h-8z" fill="#4ad5f6"></path>
              <path d="M54 0L40 16h27L54 0" fill="#95cdb1"></path>
              <path d="M69 18L55 34h27L69 18" fill="#ffc48b"></path></svg>
          </a>-->
        </div>
        <div class="block sm:hidden">
          <button type="button" class="navbar-toggler">
         <span class="navbar-toggler-bar">

         </span>
            <span class="navbar-toggler-bar">

         </span>
            <span class="navbar-toggler-bar">

         </span>
          </button>
        </div>
        <div class="hidden sm:flex">
          <ul class="flex flex-col sm:flex-row">
            <li>
              <a href="/about" class="sm:px-4 py-2 block">About</a>
            </li>
            <li>
              <a href="/contact" class="sm:px-4 py-2 block">Tech Support</a>
            </li>
            <li>
              <a href="/" class="sm:px-4 py-2 block">Review</a>
            </li>
            <!--<li>
              <a href="/" class="sm:px-4 py-2 block text-blue-600 border border-grey-400 rounded-lg ml-4">
                Login
              </a>
            </li>-->
            <li>
              <a href="/" class="sm:px-4 py-2 block bg-blue-600 text-white rounded-lg ml-4">
                Get Started
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  </div>
</template>
<script>
  import topTipNav from '~/components/nav/top-tip-nav.vue'

  export default {
    name: "top-nav",
    components: {
      topTipNav
    },
    data () {
      return {
        navPositionToggle: false
      }
    },
    methods: {
      handleScroll () {
        console.log(window.scrollY)
        return window.scrollY > 25 ? this.navPositionToggle = true : this.navPositionToggle = false
      }
    },
    created () {
      if (process.browser) {
        window.addEventListener('scroll', this.handleScroll);
      }
    },
    destroyed () {
      if (process.browser) {
        window.removeEventListener('scroll', this.handleScroll);
      }
    }
  }
</script>

<style scoped>

</style>
