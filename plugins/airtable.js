const Airtable = require('airtable')

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: 'keygywKI13K7glfsp'
})

export const base = new Airtable.base('appydqXag52Lhf8xm')

export default function (ctx, inject) {
  inject('airtable', base)
}