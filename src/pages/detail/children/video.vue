<template>
  <div id="video">
      <div class="video_wrapper">
          <div class="mg_video" >
            <video @click='checkType' ref='video' id="player" src="http://pcvideoyd.titan.mgtv.com/pb/2017/10/20/1156/335CCD894A0FBDC885E246E42C3EFB98_20171020_1_1_247.mp4?arange=0&pm=nLwO_2wzCVFDTRpvzD38sQ6Y1X3Q3M53Q~6ps_jfpkNVl~SZo~YwPzmSbhnBORrUGt8z4vS5TykSsHQQuwAspsLw_2G9OTqaqxYXZXz_Q0wjMgl_4mYtMXsPZf56Cn~6Nr75KBwuREixkREUkWCjy1FNe1nKVEI4QK02oQyozqPIpekbGeRLcaIlQNxEuD8Wb8cULFrRQ8q0W~COZF8k2W~2hGT1Cx2X0A88A01G3FlJi4agK7Bod7Z0bPdpBGWuh_TzqLi97a8aYV5aVmFPF8FJcnsCVAfhe5M8v4NuT9gPAqY8ARaCH6trRIyyMq2hmnlDmimd~kUfQu2AA6H5lsyfItg_4xplwh4eAP2DXJZFgQz8MgOCmCD5Cm9GvQ7aRm0XlF5Dba_T8vFhs9YZk6tlbrY-" poster="" preload="auto" width="100%" 
            playsinline="" x-webkit-airplay="deny" webkit-playsinline="" controls="controls" style="height: 210.938px;"></video>
          </div>
          <div class="cover_div" v-if='isShow' >
              <div class="cover_wrapper"></div>
              <div class="cover_ad">
                  <a href="#" class="delete iconfont icon-chuyidong" @click='startToPlay'></a>
                  <a href="#" class="img">
                    <img src="http://imgaliyun.res.mgtv.com/mediafiles/wiad_creative/1039/15103157020121.jpg" alt="">
                    <i></i>
                  </a>
              </div>
          </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'video',
  data () {
    return {
      msg: '视频区',
      isShow:false
    }
  },
  components:{
      
  },
  methods:{
      checkType(){
          const video = this.$refs.video

          if(video.paused){
              video.play()      
          }else{
              video.pause()
          } 
      },
      startToPlay(){
          const video = this.$refs.video;
          this.isShow = false;
          video.play()
      }
  },
  mounted(){
      var that = this;
      const video = this.$refs.video;

      video.onpause = function(){
          that.isShow = true; 
      }

      video.onplay = function(){
          this.isShow = false;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
   #video{
      margin-top:10px;
      .video_wrapper{
          width:100%;
          height: 210.938px;
          position: relative;
          background: #000;
          overflow: hidden;
          z-index: 6;
          margin: 0 auto;
      }

      .cover_div{
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0px;

          .cover_wrapper{
              background: rgba(0, 0, 0, 0.8);
              z-index: 1000;
              position: absolute;
              width: 100%;
              height: 100%;
          }
      }

      .cover_ad{
          position: absolute;
          border-radius: 4px;
          -webkit-transform: translate(-50%,-50%);
          transform: translate(-50%,-50%);
          left: 50%;
          top: 50%;
          z-index: 1025;

          .delete{
              background: #dddddd;
              border-radius: 10px;
              text-align: center;
              z-index: 1000;
              position: absolute;
              right: -10px;
              top: -10px;
              color: #212121;
              width: 21px;
              height: 21px;
              font-size: 8px;
              line-height: 21px;

              &:before{
                  font-size:15px;
              }
          }

          .img{
              display:block;
              img{
                  width: 1.87rem;
                height: 1.05rem;
                display:block;
              }

              i{
                  display: block;
                  width: 28px;
                  height: 16px;
                  position: absolute;
                  right: 2px;
                  bottom: 2px;
                  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAQCAYAAAAFzx/vAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAwOC8xMi8xNkoj3EgAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAAqUlEQVQ4jcVVMQ7DIAy0q0hdK3nI2F90M4/KQ/IoeA2DH5DpOlVCLSlWaOhtoDPnsw0wgDsRzTQGeSKiOYRwSyldz1RS1S3GSAzgwcxDHALIFw/RzFbP/h6vRNWhJ1BElhZPRJZyDSBPXrKHY2ZrK85V0l9i12EL3r6+Oz4s6Cl5DYcFidrDVUuqS3Dv0G/JfAyNZ9J60O3Qc2dL/OdpU9XtbLGXBo/+np4plVcsX1iH3QAAAABJRU5ErkJggg==) no-repeat 0 0;
              }
          }
      }
   }
</style>
