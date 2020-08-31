<template>
  <!-- 测试scroll组件 -->
  <div>
    <Scroll ref="scrollContent">
      <div class="home">
        <!-- 测试移动端适配情况 -->
        <div>
          <h4>移动端适配测试</h4>
          <img alt="Vue logo" src="../assets/logo.png" class="test-img">
          <p class="test-word">测试文本</p>
        </div>

        <!-- 测试Icon的使用 -->
        <div>
          <h4> Icon测试:</h4>
          <Icon name="icon-icon-test" class="test-icon"/>
        </div>

        <!-- 测试vuex -->
        <h4> vuex测试:</h4>
        <button class="test-btn" @click="changeState">修改状态</button>
        <p> vuex中的test状态：{{ testState }}</p>

        <!-- 测试scroll -->

        <div
          class="scrollList"
          v-for="(item,index) in scrollArr" :key="index"
        >
          {{ item }}
        </div>

      </div>
    </Scroll>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import {Scroll} from "@/components/components";

export default {
  name: 'home',
  data() {
    return {
      scrollArr: []
    }
  },
  components: {
    Scroll
  },
  mounted() {
    this.getData();
  },
  computed: {
    // 解构vuex中getters的数据,通过this.testState直接调用
    ...mapGetters('test', ['testState']),
  },
  methods: {
    // 解构vuex中getters的数据,通过this.testState直接调用
    ...mapActions('test', ['setTestState']),
    changeState() {
      this.setTestState(!this.testState);
    },
    async getData() {
      this.scrollArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      await this.$refs.scrollContent.initScroll();
      let bscroll = this.$refs.scrollContent.getBScroll();
      bscroll.refresh();
      setTimeout(() => {
        this.$refs.scrollContent.scrollRefresh();
      }, 1000)
    }
  },
}
</script>
<style lang="scss" scoped>
.test-img {
  width: rem(100);
}

.test-word {
  font-size: rem(22);
  color: $color-red;
}

.test-icon {
  font-size: rem(32);
}

.test-btn {
  border: 2px solid deepskyblue;
  border-radius: 2px;
  background: #3377ff;
  color: #fff;
  font-size: rem(22);
}

.scrollList {
  width: 100px;
  height: 100px;
  background-color: rosybrown;
  margin-bottom: 20px;
  font-size: 80px;
  color: #fff;
  font-weight: bold;
  text-align: center;
}
</style>
