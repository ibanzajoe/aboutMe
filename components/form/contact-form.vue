<template>
  <div class="contact-form-box shadow">
    <!--<div class="mb-5">
      <h2 class="text-3xl leading-tight font-bold">Contact Us</h2>

      <p class="text-2xl leading-tight mt-2" style="max-width: 900px; margin: 0 auto; margin-top: 1rem;">

      </p>
    </div>-->
    <div class="cashmac-quote-form mx-auto">
      <form class="w-full max-w-lg">
        <div class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
              First Name
            </label>
            <input v-model="first_name" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane">
            <!--<p class="text-red-500 text-xs italic">Please fill out this field.</p>-->
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
              Last Name
            </label>
            <input v-model="last_name" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe">
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email">
              Email
            </label>
            <input v-model="email" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-email" type="email" placeholder="name@address.com">
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
            <input v-model="phone" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-phone" type="phone" placeholder="(333) 333-3333">
            <!--<p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>-->
          </div>

          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-message">
              Message
            </label>
            <textarea v-model="message" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-message" type="textarea" placeholder="Message" style="min-height: 150px; max-height: 250px;" />
          </div>

          <div class="w-full px-3">
            <div @click="createContact" class="w-full block sm:inline-block sm:px-6 py-4 bg-blue-600 text-white rounded-lg">Submit</div>
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
</template>

<script>
  export default {
    name: "contact-form",
    async asyncData ({app: {$airtable}, route}) {
      const table = $airtable('contactList')
      const records = await table.select({
        view: 'Grid view'
      }).firstPage()
      return {
        data: records,
        first_name: null,
        last_name: null,
        email: null,
        phone: null,
        message: null
      }
    },
    computed: {
      fullName() {
        return this.first_name + ' ' + this.last_name
      }
    },
    methods: {
      createContact (contact) {
        let _this = this
        this.$airtable('contactList').create({
          "Name": this.fullName,
          "Email": this.email,
          "Phone": this.phone,
          "Message": this.message
        }, function(err, item) {
          if (err) {
            console.log('error error error')
          }
          _this.first_name = null
          _this.last_name = null
          _this.email = null
          _this.phone = null
          _this.message = null
        })
      }
    }
  }
</script>

<style scoped>

  .contact-form-box {
    max-width: 500px;
    margin: 0 auto;
    padding: 1.5rem;
    border-radius: 5px;
    background-color: #fff;
  }

  .contact-form-box label {
    text-align: left;
  }
</style>