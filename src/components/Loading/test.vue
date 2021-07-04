<template>
  <div>
    <loading v-if="isLoading"></loading>
  </div>
</template>

<script>
import Loading from '@/components/Loading/index'
export default {
  name: 'test',
  components: { Loading },
  data () {
    return {
      isLoading: true
    }
  }
}
</script>

<style scoped>

</style>
