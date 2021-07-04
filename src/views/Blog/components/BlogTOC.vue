<template>
  <div class="Blog-toc-container">
    <h1>目录</h1>
    <RightList :list="tocWithSelect" @select="handleSelect"></RightList>
  </div>
</template>

<script>
import RightList from '@/views/Blog/components/RightList'
import { debounce } from '@/Utils'
export default {
  name: 'BlogTOC',
  components: { RightList },
  props: {
    toc: {
      type: Array
    }
  },
  data () {
    return {
      activeAnchor: ''
    }
  },
  computed: {
    tocWithSelect () {
      const getTOC = (toc = []) => {
        return toc.map((t) => ({
          ...t,
          isSelect: t.anchor === this.activeAnchor,
          children: getTOC(t.children)
        }))
      }
      return getTOC(this.toc)
    },
    doms () {
      const doms = []
      const addToDoms = (toc) => {
        return toc.map((t) => {
          doms.push(document.getElementById(t.anchor))
          if (t.children && t.children.length) return addToDoms(t.children)
        })
      }
      addToDoms(this.toc)
      return doms
    }
  },
  created () {
    this.setSelectDebounce = debounce(this.setSelect, 100)
    this.$bus.$on('mainScroll', this.setSelectDebounce)
  },
  destroyed () {
    this.$bus.$off('mainScroll', this.setSelectDebounce)
  },
  methods: {
    handleSelect (item) {
      location.hash = item.anchor
    },
    setSelect (scrollDom) {
      if (!scrollDom) { return }
      this.activeAnchor = ''
      const range = 200
      return this.doms.map((dom) => {
        const top = dom.getBoundingClientRect().top
        if (top >= 0 && top <= range) { this.activeAnchor = dom.id; return }
        if (top > range) { return }
        if (top < range) { this.activeAnchor = dom.id }
      })
    }
  }
}
</script>

<style scoped lang="less">
.blog-toc-container {

h2 {
  font-weight: bold;
  letter-spacing: 2px;
  font-size: 1em;
  margin: 0;
}

}
</style>
