<template>
  <div class="manifest">
    <h1>这是主页面</h1>
    <router-view></router-view>
  </div>
</template>
<script>
// import '../css/detail.less'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      name: '天才'
    }
  }
}
</script>
