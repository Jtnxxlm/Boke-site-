<template>
<div class="test-container">
  <SiteAside></SiteAside>
</div>
</template>

<script>
import SiteAside from './'
import '@/styles/global.less'
export default {
  components: {
    SiteAside
  }
}
</script>

<style scoped>
.test-container{
  width: 200px;
  height: 400px;
  margin: 0 auto;
  background-color: #202020;
}
</style>
