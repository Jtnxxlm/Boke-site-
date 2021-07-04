<template>
  <div class="message-area-container">
    <DataForm v-on="$listeners"></DataForm>
    <h3>
      {{ title }}
      <span>{{ subTitle }}</span>
    </h3>
    <DataList :list="list"></DataList>
    <div class="loading" v-loading="isListLoading"></div>
  </div>
</template>

<script>
import DataForm from '@/components/MessageArea/DataForm'
import DataList from '@/components/MessageArea/DataList'
export default {
  name: 'MessageArea',
  props: {
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: () => []
    },
    isListLoading: {
      type: Boolean,
      default: false
    }
  },
  components: { DataList, DataForm }
}
</script>

<style scoped lang="less">
.loading {
  position: relative;
  height: 100px;
}
</style>
