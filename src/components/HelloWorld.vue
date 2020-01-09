<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
<!--    <i class="iconfont icon-icon-test"></i>-->
    <Icon name="icon-icon-test" class="icontest" @clickIcon="clickThis"/>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods:{
    clickThis(){
      console.log('this')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .icontest {
    font-size: 32px;
    color: red;
  }
  h3 {
    margin: 40px 0 0;

  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
