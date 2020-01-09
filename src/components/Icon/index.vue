<template>
  <i class="iconfont" :class="name" @click="clickIcon"></i>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    clickIcon() {
      this.$emit('clickIcon')
    }
  }
}
</script>

<style scoped>

</style>
