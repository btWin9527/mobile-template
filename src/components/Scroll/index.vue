<template>
  <div ref="scroll" class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';

export default {
  props: {
    direction: { // 滚动方向
      type: String,
      default: "vertical",
      validator: function (value) {
        return ['vertical', 'horizental'].includes(value);
      }
    },
    refresh: { // 是否刷新
      type: Boolean,
      default: true
    },
    onScroll: { // 滑动触发回调函数
      type: Function,
    },
    pullUp: { // 上拉加载触发的回调函数
      type: Function
    },
    pullDown: { // 下拉加载触发回调
      type: Function
    },
    pullUpLoading: { // 是否显示上拉loading 动画
      type: Boolean,
      default: false
    },
    pullDownLoading: { // 是否显示下拉loading 动画
      type: Boolean,
      default: false
    },
    bounceTop: { // 是否支持向上吸顶
      type: Boolean,
      default: true
    },
    bounceBottom: { // 是否支持向下吸底
      type: Boolean,
      default: true
    },
    click: { // 是否开启浏览器原生点击事件
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      bScroll: null, // scroll实例

    }
  },
  methods: {
    /* 初始化scroll组件 */
    initScroll() {
      const scrollRef = this.$refs.scroll;
      /*
      * better-scroll配置项
      * scrollX  是否开启横向滚动
      * scrollY  是否开启纵向滚动
      * probeType  0 不派发scroll事件, 1 会非实时（屏幕滑动超过一定时间后）派发scroll 事件, 2 会在屏幕滑动的过程中实时的派发 scroll 事件 3 不仅在屏幕滑动的过程中，而且在 momentum 滚动动画运行过程中实时派发 scroll 事件
      * bounce  当滚动超过边缘的时候会有一小段回弹动画 {top: ture,bottom:true,left:true,right:true}
      * */
      this.bScroll = new BScroll(scrollRef, {
        scrollX: this.direction === 'horizental',
        scrollY: this.direction === 'vertical',
        probeType: 3,
        click: this.click,
        bounce: {
          top: this.bounceTop,
          bottom: this.bounceBottom
        }
      });
      this.watchScrollEvent();
      this.watchPullDownEvent();
      this.watchPullUpEvent();
      console.log('初始化完成')
    },
    /* 监听scroll事件 */
    watchScrollEvent() {
      if (!this.bScroll || !this.onScroll) return;
      // 监听滚动位置
      this.bScroll.on('scroll', (position) => {
        this.onScroll(position);
      });
    },
    /* 监听pullDown事件 */
    watchPullDownEvent() {
      if (!this.bScroll || !this.pullDown) return;
      // 监听touchEnd事件
      this.bScroll.on('touchEnd', (position) => {
        if (position.y > 50) {
          this.pullDown();
        }
      })
    },
    /* 监听pullUp事件 */
    watchPullUpEvent() {
      if (!this.bScroll || !this.pullUp) return;
      this.bScroll.on('scrollEnd', () => {
        // 判断是否滑到底部
        // y bs纵向坐标    maxScrollY  bs 最大纵向滚动位置
        if (this.bScroll.y <= this.bScroll.maxScrollY + 100) {
          this.pullUp();
        }
      })
    },
    /* 移除bScroll相关自定义事件 */
    removeScrollEvent() {
      this.bScroll.off('scroll');
      this.bScroll.off('scrollEnd');
      this.bScroll.off('touchEnd');
    },
    /* 外部抛出refresh事件 */
    scrollRefresh() {
      if (this.bScroll) {
        console.log('刷新scroll')
        this.bScroll.refresh();
        this.bScroll.scrollTo(0, 0);
      }
    },
    // 给外界暴露 getBScroll 方法，提供 bs 实例
    getBScroll() {
      if (this.bScroll) {
        return this.bScroll;
      }
    }
  },
  mounted() {
    // this.initScroll();
  },
  beforeDestroy() { // 页面关闭事件销毁
    this.removeScrollEvent();
  },
}
</script>

<style scoped lang="scss">
.wrapper {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>
