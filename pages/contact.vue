<template>
  <div class="contact">
    <section class="relative px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pt-32 pb-48 sm:pb-64 md:pt-40 md:pb-48 lg:pt-40 xl:pb-64 2xl:pt-56 2xl:pb-96 text-center sm:text-left">
      <div>
        <!--<div class="relative w-full sm:w-2/3 lg:w-1/2 z-10 hero-text-box">
          <h1 class="text-3xl lg:text-4xl xl:text-5xl leading-tight font-bold">Instant Cash for Your Used Apple Products!</h1>
          <p class="text-base leading-snug text-gray-700 mt-4">Sign up to get a free quote!</p>
          <a href="#" class="w-full block sm:inline-block sm:w-auto px-6 py-4 bg-blue-600 text-white rounded-lg mt-8">Get Paid!</a>
        </div>-->

        <div class="w-full h-full absolute bottom-0 right-0">
          <iframe src="https://maps.google.it/maps?q=2600 W, Olive Ave. Burbank, CA 91505&amp;output=embed" class="frame-abc"></iframe>
        </div>
      </div>
    </section>


    <section class="relative bg-gray-100 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-20 text-center">
      <contact-form />



      <!--<div class="flex flex-col md:flex-row items-start justify-between mt-12">
        <div class="w-full bg-white shadow-lg rounded-lg px-4 py-6 lg:p-8 md:mx-2 lg:mx-4">
          <img src="home/icon-home-1.svg" alt="" class="mx-auto h-32">
          <div style="min-height: 108px">
            <h4 class="text-xl font-bold leading-tight mt-8">Selling or Buying?</h4>
            <p class="text-gray-700 mt-2">Tell me where, we'll come check out the Mac!</p>
          </div>
        </div>

        <div class="w-full bg-white shadow-lg rounded-lg px-4 py-6 lg:p-8 md:mx-2 lg:mx-4 mt-4 md:mt-0">
          <img src="home/icon-home-2.svg" alt="" class="mx-auto h-32">
          <div style="min-height: 108px">
            <h4 class="text-xl font-bold leading-tight mt-8">Variables</h4>
            <p class="text-gray-700 mt-2">Tell us the various conditions about the Mac you are selling.</p>
          </div>
        </div>

        <div class="w-full bg-white shadow-lg rounded-lg px-4 py-6 lg:p-8 md:mx-2 lg:mx-4 mt-4 md:mt-0">
          <img src="home/icon-home-3.svg" alt="" class="mx-auto h-32">
          <div style="min-height: 108px">
            <h4 class="text-xl font-bold leading-tight mt-8">Assessment</h4>
            <p class="text-gray-700 mt-2">Our Representative will assess the product in person and give a quote.</p>
          </div>
        </div>
      </div>-->

      <div class="mt-12 md:mt-20 w-full md:max-w-3xl mx-auto">
        <p class="text-xl">“Cashmac is a no hassle way to get rid of my old mac products after upgrading.  Instant cash in hand on the day of appointment.  Impressive service!”</p>
        <p class="text-xl font-bold text-blue-600 mt-4">Jackie Koche</p>
        <p class="text-sm uppercase tracking-wider text-gray-700">Writer for Happy Day LA</p>
      </div>
    </section>
  </div>
</template>

<script>
  import contactForm from '~/components/form/contact-form.vue'

  export default {
    name: "contact",
    components: { contactForm }

  }
</script>

<style scoped>

  .frame-abc {
    height:100%;
    width: 100%;
  }
</style>
