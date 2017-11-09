<template>
  <div id="index">
    <myHeader type='index' keyword='我想和你唱'></myHeader> 
    <!-- <myHeader type='detail'></myHeader> -->
    <!-- <myHeader type='search' keyword='我想和你唱'></myHeader>  -->
    <!-- <myHeader type='lishi'></myHeader>  -->
  </div>
</template>

<script>
import index_header from '../../components/header.vue'

export default {
  name: 'index',
  data () {
    return {
      msg: '首页'
    }
  },
  components:{
      myHeader:index_header
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
   
</style>
