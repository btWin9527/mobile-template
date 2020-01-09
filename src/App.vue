<template>
  <div id="app">
    <router-view v-if="isRouterAlive"/>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isRouterAlive: true, //首页刷新
      }
    },
    provide() {
      return {
        reload: this.reload
      };
    },
    methods: {
      /**
       * @method reload   页面组件刷新
       * @description     使用时,inject: ["reload"],调用时this.reload()
       */
      reload() {
        this.isRouterAlive = false;
        this.$nextTick(() => this.isRouterAlive = true);
      },
    }
  }
</script>
