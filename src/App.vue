<template>
  <div class="app-container">
    <layout>
      <template #left>
        <div class="aside">
          <SiteAside></SiteAside>
        </div>
      </template>
      <template #default>
        <RouterView></RouterView>
      </template>
    </layout>
    <ToTop></ToTop>
  </div>
</template>

<script>
import Layout from '@/components/Layout/Layout'
import SiteAside from '@/components/SiteAside'
import ToTop from '@/components/ToTop'
export default {
  components: { ToTop, SiteAside, Layout }
}
</script>
<style scoped lang="less">
@import "~@/styles/mixin.less";
.app-container{
.self-fill(fixed);
}
.aside{
  width: 200px;
  height: 100%;
}

</style>
