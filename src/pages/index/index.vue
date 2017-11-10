<template>
  <div id="index">
    <myHeader type='index' keyword='我想和你唱'></myHeader> 
    <!-- <myHeader type='detail'></myHeader> -->
    <!-- <myHeader type='search' keyword='我想和你唱'></myHeader>  -->
    <!-- <myHeader type='lishi'></myHeader>  -->
    <myNav :getNavData='getNavData' :beginReq='beginReq'></myNav>
    <mymain :detailData='detailData' :isloading='isloading'></mymain>
    <fixbtn v-if='fixbtnShow'></fixbtn>
  </div>
</template>

<script>
import myheader from '../../components/header.vue'
import mynav from './children/nav.vue'
import mymain from './children/main.vue'
import fixbtn from '../../components/fixbtn.vue'


export default {
  name: 'index',
  data () {
    return {
      msg: '首页',
      fixbtnShow:false,
      detailData:null,
      isloading:null
    }
  },
  components:{
      myHeader:myheader,
      myNav:mynav,
      mymain,
      fixbtn:fixbtn
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
      var that = this;
      window.addEventListener('scroll',function(e){
          if($(this).scrollTop() > 100){
              that.fixbtnShow = true
          }else{
              that.fixbtnShow = false
          }
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
   
</style>
