<template>
  <div>
    <h1>{{ title }}</h1>
    <div class="aside">
      <span>日期:{{ formatDate(createDate)}}</span>
      <span>浏览:{{scanNumber}}</span>
      <a href="#data-from-container">评论：{{commentNumber}}</a>
      <RouterLink :to=" { name:'CategoryBlog',params:{ categoryId:category.id}}">分类：{{category.name}}</RouterLink>
    </div>
    <div v-html="htmlContent" class="markdown-body"></div>
  </div>
</template>

<script>
import { formatDate } from '@/Utils'
import 'highlight.js/styles/github.css'
import '@/styles/markdown.css'
export default {
  name: 'BlogDetail',
  props: {
    title: {
      type: String
    },
    createDate: {
      type: String
    },
    scanNumber: {
      type: Number
    },
    commentNumber: {
      type: Number
    },
    category: {
      type: Object
    },
    htmlContent: {
      type: String
    }
  },
  methods: {
    formatDate
  }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.aside {
  font-size: 15px;
  color: @gray;
span,
a {
  margin-right: 15px;
}
}
.markdown-body {
  margin: 2em 0;
}
</style>
