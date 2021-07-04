<template>
  <Layout>
    <BlogList></BlogList>
    <template #right>
      <BlogCategory></BlogCategory>
    </template>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout/Layout'
import BlogList from '@/views/Blog/components/BlogList'
import BlogCategory from '@/views/Blog/components/BlogCategory'
export default {
  name: 'Blog',
  components: { BlogCategory, BlogList, Layout },
  created () {
    // console.log(this.$route)
  }
}
</script>

<style scoped>

</style>
