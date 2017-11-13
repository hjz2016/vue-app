<template>
  <div id="index">
    
    <!-- <myHeader type='detail'></myHeader> -->
    <!-- <myHeader type='search' keyword='我想和你唱'></myHeader>  -->
    <!-- <myHeader type='lishi'></myHeader>  -->
    <myNav :getNavData='getNavData' :beginReq='beginReq'></myNav>
    <mymain :detailData='detailData' :isloading='isloading'></mymain>
    
  </div>
</template>

<script>
import myheader from '../../components/header.vue'
import mynav from './children/nav.vue'
import mymain from './children/main.vue'



export default {
  name: 'index',
  data () {
    return {
      msg: '首页',
      detailData:null,
      isloading:null
    }
  },
  components:{
      myHeader:myheader,
      myNav:mynav,
      mymain
  },
  methods:{
      getNavData(data){
          this.detailData = data
     
      },
      beginReq(flag){
          this.isloading = flag
      }
  },
  mounted(){
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
   
</style>
