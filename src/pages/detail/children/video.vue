<template>
  <div id="video">
      <div class="video_wrapper">
          <div class="mg_video" >
            <video @click='checkType' ref='video' id="player" src="http://pcvideoyd.titan.mgtv.com/pb/2017/10/27/1293/9C06F5111D1E713D75202104FEA490A5_20171027_1_1_241.mp4?arange=0&pm=GzKKc02Ox59qiYCUhalRLzPDreKes_CSLDsP~bpxAu6VL7Vo7Vnd7V0w24BnmkPR4Gsw4sG~C1MhPZnuiGgGgkqhq6iX7SMGNSTiTJKj6PqA3wVmooA_TMXtwv0UxuF55ukoAUJoJs41Adw6wh9mrlhq2FVLU8Gf4f4jEsHKNnEOXs8gaQgS3aR2At2LmrYdzxoAcA0OPVCV85fJNk9wEWg2xgZcwpPh~iL~FWRGLTtNQNzkLhthtPNqg9A6860~IqH1D9FOu1v95Vlm9wOwHTyfGxJz1fLObyg7JbxOwJ78TgIdhh0n8g78Ky67CXRxuFOptKCftC4VR3PmyvZanzKmifqtBtjvoacnTFYwmBJcAS5LOmY3SzXMZaM2sXigUBwfam_yeq_9WRNqWaxUBvAblJA-" poster="" preload="auto" width="100%" 
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
