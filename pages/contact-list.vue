<template>
  <div class="contact-list">
    <h3 class="contact-list-heading">
      Contact Listing
    </h3>

    <div class="contact-listing px-3">
      <div class="contact-list-item"
           v-for="(dat, index) in data"
           :key="index"
      >
        <div class="contact-name">
          {{dat.fields.Name}}
        </div>
        <div class="contact-email">
          {{dat.fields.Email}}
        </div>
        <div class="contact-phone">
          {{dat.fields.Phone}}
        </div>
        <div class="contact-message">
          {{dat.fields.Message}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "contactList.vue",

    async asyncData ({app: {$airtable}, route}) {
      const table = $airtable('contactList')
      const records = await table.select({
        view: 'Grid view'
      }).firstPage()
      return {
        data: records
      }
    },

  }
</script>

<style scoped>
  .contact-list-heading {
    font-size: 36px;
  }
  .contact-list {
    padding: 1rem;
  }

  .contact-list-item {
    display: flex;
    align-items: center;
  }
</style>