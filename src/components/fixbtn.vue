<template>
  <div id="fixbtn" @click='goToTop'>
      <i class="iconfont icon-gengduoxinxi"></i>
  </div>
</template>

<script>
export default {
  name: 'fixbtn',
  data () {
    return {
      msg: 'fixbtn'
    }
  },
  methods:{
      goToTop(){
          document.documentElement.scrollTop = 0
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
   #fixbtn{
      position: fixed;
      z-index: 99;
      bottom: 10px;
      right: 10px;
      width: 40px;
      height: 40px;
      background: rgba(0,0,0,.35);
      color: #fff;
      border-radius: 4px;
      text-align: center;
      line-height: 40px;
      transform:rotate(90deg);

      i{
          font-size: 24px;
          position: relative;
          line-height:40px;
      }
   }
</style>
