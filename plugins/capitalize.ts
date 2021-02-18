import Vue from 'vue'

Vue.filter('capitalize', function (value: string) {
  if (!value) return ''
  value = value.toString()
  return value
    .split(' ')
    .map((v) => v.charAt(0).toUpperCase() + v.slice(1))
    .join(' ')
})
