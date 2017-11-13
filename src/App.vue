<template>
  <div id="app">
  	<myHeader :type='type' keyword="我想和你唱"></myHeader>
  	<!-- <myHeader type='index' keyword="我想和你唱"></myHeader> -->
  	<!-- <myHeader type='detail'></myHeader> -->
    <!-- <myHeader type='search' keyword='我想和你唱'></myHeader>  -->
    <!-- <myHeader type='lishi'></myHeader>  -->
    <fixbtn v-if='fixbtnShow'></fixbtn>
    <!-- 离线观看 -->
    <transition enter-active-class='fast-ani fadeIn' leave-active-class='fast-ani fadeOut'>
      <app_download v-if='type=="detail"&&downloadShow'></app_download> 
    </transition>  
    <router-view/>
    <myFooter></myFooter>
  </div>
</template>

<script>
import myHeader from './components/header.vue';
import fixbtn from './components/fixbtn.vue';
import myFooter from './components/footer.vue';

import app_download from './pages/detail/children/app_download.vue';

export default {
  name: 'app',
  data(){
    return{
      fixbtnShow:false,
      downloadShow:true
    }
  },
  components:{
  	myHeader,
    fixbtn,
    app_download,
    myFooter
  },
  computed:{
    type(){
        return this.$route.name
    }
  },
  mounted(){
    var that = this;
      window.addEventListener('scroll',function(e){
          if($(this).scrollTop() > 100){
              that.fixbtnShow = true;

              if($(this).scrollTop() + $(this).height() == $(document).height()){
                  that.downloadShow = false;
              }else{
                that.downloadShow = true;
              }
          }else{
              that.fixbtnShow = false
          }

          
      })
  }
}
</script>

<style>
  .fast-ani{
        animation-duration:.5s;
    }
</style>
