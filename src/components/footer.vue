<template>
  <div id="footer">
  	<div class="mg-footer-copyright"><span>Copyright © 2006-2017 mgtv.com All Rights Reserved</span> <span>互联网出版许可证：新出网证（湘）字08号</span></div> <div class="dialog-hy" style="display: none;"><div class="mask"></div> <div class="cet"><div class="btn"><a href="javascript:;">知道了</a></div></div></div>
  </div>
</template>

<script>

export default {
  name: 'footer',
  components:{
  	
  },
  computed:{
    
  },
  mounted(){
   
  }
}
</script>

<style lang='scss'>
  #footer{
    padding: 13px 0;
    background:#f5f5f5;

    .mg-footer-copyright{

        font-size: 12px;
        color: #bbb;
        text-align: center;
        height: .33rem;
        line-height: .165rem;

        span{
          display:block;
          font-size: 12px;
        }
    }
  }
</style>
