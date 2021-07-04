<template>
  <div class="to-top-container" @click="handleClick" v-show="show">
    Top
  </div>
</template>

<script>
export default {
  name: 'ToTop',
  data () {
    return {
      show: false
    }
  },
  created () {
    this.$bus.$on('mainScroll', this.handleScroll)
  },
  destroyed () {
    this.$bus.$off('mainScroll', this.handleScroll)
  },
  methods: {
    handleScroll (dom) {
      if (!dom) { this.show = false; return }
      this.show = dom.scrollTop >= 500
    },
    handleClick () {
      this.$bus.$emit('setMainScroll', 0)
    }
  }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.to-top-container{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: @primary;
  position: fixed;
  z-index: 99;
  right: 50px;
  bottom: 50px;
  line-height: 50px;
  text-align: center;
  color: #fff;
  cursor: pointer;
}
</style>
