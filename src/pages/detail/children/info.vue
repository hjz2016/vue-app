<template>
  <div id="info">
     <div class="ht">
        <span>打开芒果视频APP,提升3倍流畅度</span>
     </div>
     <div class="hd">
       <a href="#" class="more " @click.prevent='showMore'><i class="iconfont icon-gengduoxinxi"></i></a>
       <span>明星大侦探 第三季<i></i></span>
     </div>
     
     <transition enter-active-class='fast-ani fadeIn' leave-active-class='fast-ani fadeOut'>
        <div v-show='!showDetails' class="bd" :key='1'>
         <span class="playnum"><i class="iconfont icon-play"></i>3.8亿次播放</span>
         <div class="list">
           <ul>
             <li><a class="icon_a" href=""><i class="iconfont icon-iconjiudianzhuanqu37"></i></a></li>
             <li><a class="icon_a" href=""><i class="iconfont icon-zan"></i></a><i>2千</i></li>
             <li><a class="icon_a" href=""><i class="iconfont icon-xiazai"></i></a></li>
           </ul>
         </div>
       </div>
    </transition>
    <transition enter-active-class='fast-ani fadeIn' leave-active-class='fast-ani fadeOut'>
        <div v-show='showDetails' class="details" :key='2'>
            <div class="d_times">3.8亿次播放</div>
            <div class="d_desc">
             <p><span>类型：</span><i>真人秀 / 芒果出品</i></p>
             <p><span>地区：</span><i>内地</i></p>
             <p><span>电视台：</span><i>芒果TV</i></p>
             <p><span>播出时间：</span><i>周五12:00会员抢先看，周日12:00免费看</i></p>
             <p><span>嘉宾：</span><i>何炅 / 撒贝宁 / 白敬亭 / 吴映洁 / 张若昀 / 吴磊</i></p>
             <p>简介：《明星大侦探第三季》全新回归！全明星大咖阵容，完美复刻经典致敬情怀，全新舞美升级体验，开启全民侦探新风暴！每周五12:00会员抢先看，周日12:00免费看。</i></p>
            </div>
            <div class="d_type">
               <div class="name">明星大侦探</div>
               <div class="num">40.6万关注</div>
               <div class="pic"><img src="https://userpic.api.max.mgtv.com/person586cbba798010.jpg" width="100%" height="100%"></div>
               <a href=""><i class="iconfont icon-gengduo" ></i>下载APP关注</a>
            </div>
        </div>
     </transition> 
     
  </div>
</template>

<script>

export default {
  name: 'video',
  data () {
    return {
      msg: '视频信息',
      showDetails:false
    }
  },
  components:{
      
  },
  methods:{
      showMore(e){
          this.showDetails = !this.showDetails;
          
          if($(e.target).parents('.more').hasClass('active')){
              $(e.target).parents('.more').removeClass('active')
          }else{
              $(e.target).parents('.more').addClass('active')
          }
          
      }
  },
  mounted(){
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
    

    .fade-enter-active, .fade-leave-active{
        transition: all 0.5s ease     
    }
    .fade-enter, .fade-leave-active{
        opacity: 0 ;
    }
    .fade-enter-active, .fade-leave{
        opacity:1;
    }

   #info{
      background:#fff;

      .ht{
          padding-top: 1px;

          span{
              margin-top: 10px;
              margin-left: 10px;
              margin-right: 10px;
              font-size: .16rem;
              background: #ff5f00;
             
              display: block;
              
              height: .48rem;
              line-height: .48rem;
              border-radius: 6px;
              color: #fff;
              font-size: 16px;
              text-align: center;
          }
      }

      .hd{
          position: relative;
          overflow: hidden;
          height: .4rem;
          padding: .08rem .42rem 0 .10rem;
          box-sizing: border-box;
          background: #fff;

          .more{
              position: absolute;
              top: .08rem;
              right: .1rem;
              width: .32rem;
              height: .32rem;
              line-height: .32rem;
              text-align: center;
              color: #666;
              transform:rotate(-90deg);

              &.active{
                  color: #ff5f00;
                  transform:rotate(-270deg);
              }
          }

          span{
              display: inline-block;
              overflow: hidden;
              position: relative;
              width: 300px;
              height: 32px;
              font-size: .16rem;
              line-height: 32px;
              white-space: nowrap;
              text-overflow: ellipsis;

              i{
                  width: 27px;
                  height: 14px;
                  background-position: -30px 0;
                  display: inline-block;
                  margin: 0 0 0 5px;
                  background: url(https://img.mgtv.com/imgotv-mobile-default/static/images/video-icon.feeb111.png) no-repeat;
                  background-size: 98px 14px;
                  vertical-align: middle;
              }
          }
      }

      .bd{
        position: relative;
        height: .6rem;
        line-height: .55rem;
        padding: 0 .1rem;
        box-sizing: border-box;
        background: #fff;
          .playnum{
            float: left;
            font-size: .12rem;
            color: #888;
            line-height: .5rem;
              i{
                  height: .2rem;
                  line-height:.2rem;
                  color: #666;
                  font-size: .19rem;
                  margin-right: 5px;
                  vertical-align: middle;
              }
          }

          .list{
              display: inline-block;
              right: .1rem;
              float: right;
              height: .6rem;
              box-sizing: border-box;
              -webkit-box-sizing: border-box;

              li{
                  position: relative;
                  float: left;
                  margin-left: .2rem;
                  width: .4rem;
                  height: .6rem;
                  display: inline-block;
                  vertical-align: middle;

                  &>i{
                      position: absolute;
                      left: .3rem;
                      top: .15rem;
                      font-size: .12rem;
                      color: #888;
                      background: #eee;
                      padding: .02rem;
                      height: .12rem;
                      line-height: .12rem;
                      border-radius: .05rem;
                      white-space: nowrap;
                  }
              }

              .icon_a{
                  width: .4rem;
                  height: .6rem;
                  display: block;
                  font-size: .2rem;
                  color: #666;
                  line-height: .57rem;
                  text-align: center;
                  
                  

                  i{
                      font-size: .19rem;
                  }
              }
          }
      }

      .details{
          background: #fff;
          padding: 0 10px;

          .d_times{
              margin-top: 5px;
              font-size: .12rem;
              color: #888;
              padding: 0;
          }

          .d_desc{
              font-size: .12rem;
              color: #888;
              line-height: .17rem;
              margin-top: 10px;
              padding: 8px 0 10px;
              border-top: 1px solid #eee;

              p{
                  overflow: hidden;
                  margin-bottom: 2px;

              }

              span{
                  font-size: .12rem;
              }

              i{
                  color: #666;
                  font-size: .12rem;
              }
          }

          .d_type{

              position: relative;
              height: 40px;
              padding: 10px 0 10px .45rem;
              border-top: 1px solid #eee;

              .name{
                  color: #333;
                  font-size: .14rem;
                  padding: 4px 0 7px;
              }

              .num{
                  color: #888;
                  font-size: .12rem;
              }

              .pic{

                  overflow: hidden;
                  position: absolute;
                  top: 10px;
                  left: 0;
                  width: .4rem;
                  height: .4rem;
                  display: block;
                  border-radius: 20px;
              }

              &>a{
                      position: absolute;
                    top: 15px;
                    right: 0;
                    width: auto;
                    height: .27rem;
                    padding-right: 10px;
                    line-height: .27rem;
                    font-size: .12rem;
                    display: block;
                    border-radius: 20px;
                    background: #ff5f00;
                    color: #fff;

                    i{
                            float: left;
                      margin: 0 1px 0 10px;
                      width: 14px;
                      height: 14px;
                      font-size: .12rem;
                    }
              }
          }
      }
   }
</style>
