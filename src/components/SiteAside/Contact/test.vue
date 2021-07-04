<template>
  <div class="test-container">
    <Contact />
  </div>
</template>

<script>
import Contact from './'
import '@/styles/global.less'
export default {
  components: {
    Contact
  }
}
</script>

<style scoped>
.test-container{
  width: 400px;
  height: 400px;
  background-color: #000;
  margin: 0 auto;
  padding-top: 200px;
}
</style>
