import Vue from 'vue'

Vue.filter('formatPrice', function (price: string) {
  return parseFloat(price).toFixed(2)
})
