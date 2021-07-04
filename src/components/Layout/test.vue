<template>
<div class="test-container">
  <layout>
    <template #left>
      <div class="left">
        左边栏区域，宽度适应内容，溢出隐藏
      </div>
    </template>
    <div class="main">
      主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏

    </div>
    <template #right>
      <div class="right">
        右边栏区域，宽度适应内容，溢出隐藏
      </div>
    </template>
  </layout>
</div>
</template>

<script>
import Layout from '@/components/Layout/Layout'
export default {
  name: 'test',
  components: { Layout }
}
</script>

<style scoped>
.test-container{
  width: 60%;
  height: 100%;
  border: 2px solid;
  margin: 0 auto;
  white-space: nowrap;
}
.left {
  width: 200px;
  height: 100%;
  background: lightcoral;
}
.main {
  width: 100%;
  height: 100%;
  background: lightseagreen;
}
.right {
  width: 150px;
  height: 100%;
  background: lightblue;
}
</style>
