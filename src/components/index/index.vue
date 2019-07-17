<template>
  <div>
    菜单子页面
    <p>加油{{name}}</p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      name: 'tianyuexian'
    }
  },
  created: function () {
    this.getUser()
  },
  methods: {
    getUser () {
      console.log(this.$axios)
      this.$axios.get('/tian/getUsername').then((res) => {
        console.log(res)
      })
    }
  }
}
</script>
