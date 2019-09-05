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
      <div>
        <h2 class="text-3xl leading-tight font-bold">Contact Us</h2>

        <p class="text-2xl leading-tight mt-2" style="max-width: 900px; margin: 0 auto; margin-top: 1rem;">

        </p>
      </div>

      <div class="contact-form-box shadow">
        <div class="cashmac-quote-form mx-auto">
          <form class="w-full max-w-lg">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                  First Name
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane">
                <!--<p class="text-red-500 text-xs italic">Please fill out this field.</p>-->
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                  Last Name
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe">
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email">
                  Email
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-email" type="email" placeholder="name@address.com">
                <!--<p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>-->
              </div>
              <!--<div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                  Password
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************">
                <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
              </div>-->
            </div>
            <div class="flex flex-wrap -mx-3 mb-2">
              <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-phone">
                  Phone
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-phone" type="phone" placeholder="(333) 333-3333">
                <!--<p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>-->
              </div>
              <!--<div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                  City
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque">
              </div>
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                  State
                </label>
                <div class="relative">
                  <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                    <option>New Mexico</option>
                    <option>Missouri</option>
                    <option>Texas</option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                  Zip
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210">
              </div>-->
            </div>
          </form>
        </div>
      </div>



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
  export default {
    name: "contact"
  }
</script>

<style scoped>

  .frame-abc {
    height:100%;
    width: 100%;
  }

  .contact-form-box {
    max-width: 500px;
    margin: 0 auto;
    padding: 1.5rem;
    border-radius: 5px;
  }

  .contact-form-box label {
    text-align: left;
  }
</style>
