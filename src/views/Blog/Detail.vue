<template>
  <Layout>
    <div class="main-container" v-loading="isLoading" ref="mainContainer">
      <BlogDetail v-bind="data" v-if="data"></BlogDetail>
      <BlogComment v-if="!isLoading"></BlogComment>
    </div>
    <template #right>
      <div class="right-container" v-loading="isLoading">
        <BlogTOC v-bind="data" v-if="data"></BlogTOC>
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout/Layout'
import { getBlog } from '@/api/blog'
import BlogDetail from '@/views/Blog/components/BlogDetail'
import BlogTOC from '@/views/Blog/components/BlogTOC'
import fetchData from '@/mixins/fetchData'
import '@/styles/markdown.css'
import BlogComment from '@/views/Blog/components/BlogComment'
import mainScroll from '@/mixins/mainScroll'
import { titleController } from '@/Utils'
export default {
  name: 'Detail',
  mixins: [fetchData(null), mainScroll('mainContainer')],
  components: { BlogComment, BlogTOC, BlogDetail, Layout },
  methods: {
    async fetchData () {
      const resp = await getBlog(this.$route.params.id)
      titleController.setRouteTitle(resp.title)
      return resp
    }
  },
  updated () {
    const hash = location.hash
    location.hash = ''
    setTimeout(() => {
      location.hash = hash
    }, 50)
  }
}
</script>

<style scoped lang="less">
.main-container{
  overflow-y: scroll;
  height: 100%;
  width: 100%;
  padding: 20px;
  position: relative;
  box-sizing: border-box;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
.right-container{
  width: 300px;
  height: 100%;
  overflow-y:scroll;
  box-sizing: border-box;
  position: relative;
  padding: 20px;
}
</style>
