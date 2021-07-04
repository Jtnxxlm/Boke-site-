<template>
<div class="site-aside-container">
  <template v-if="data">
    <Avatar :url='data.avatar' :size="120"></Avatar>
    <h1 class="title">{{ data.siteTitle }}</h1>
  </template>

  <Menu >
    <slot></slot>
  </Menu>
  <contact v-if="data">
    <slot></slot>
  </contact>
  <p class="footer" v-if="data">
    {{ data.icp }}
  </p>
</div>
</template>

<script>

import Avatar from '@/components/Avatar'
import Contact from '@/components/SiteAside/Contact'
import Menu from '@/components/SiteAside/Menu'
import { mapState } from 'vuex'
export default {
  name: 'SiteAside',
  components: { Menu, Contact, Avatar },
  computed: mapState('setting', ['data'])
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.site-aside-container{
  width: 100%;
  height: 100%;
  background-color: @dark;
  padding: 20px 0;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
}
.avatar-img{
  margin: 0 auto;
}
.footer {
  text-align: center;
  font-size: 12px;
}
.title {
  font-size: 1.2em;
  color: #fff;
  text-align: center;
}
</style>
