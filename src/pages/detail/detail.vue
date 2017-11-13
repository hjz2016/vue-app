<template>
  <div id="detail">
    <myVideo></myVideo>
    <myInfo></myInfo>  
    <mgUi></mgUi>
    
    <div id="ps8571r3b7e">
      <a href=""><img src="https://sf01.fastapi.net/upload/2017/10/e9ce32e00e592ec6a448c9b6d01bef3b.jpg" alt="">
        <div class="tag"><div>广告</div></div>
      </a>
    </div>
    <div class="cont_title" >
      <a href="/"><i class='l'></i>花絮片段<i class='r'></i></a>
    </div>
    <div class="swiper swiper2">
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide> 
              <ul>
                <li>
                  <a href="">
                    <div class="img"><img src="https://2img.hitv.com/preview/sp_images/2017/zongyi/317663/4111411/20170920174937039.jpg_222x126_h.webp" alt="">
                        <div class="time">2017-09-22</div>
                    </div>
                    <p>先导片：名侦探的品格</p>
                  </a>
                </li>
                <li>
                  <a href="">
                    <div class="img"><img src="https://2img.hitv.com/preview/sp_images/2017/zongyi/317663/4111411/20170920174937039.jpg_222x126_h.webp" alt="">
                        <div class="time">2017-09-22</div>
                    </div>
                    <p>先导片：名侦探的品格</p>
                  </a>
                </li>
                <li>
                  <a href="">
                    <div class="img"><img src="https://0img.hitv.com/preview/sp_images/2017/zongyi/317663/4167167/20171110131354052.jpg_222x126_h.webp" alt="">
                        <div class="time">2017-09-22</div>
                    </div>
                    <p>先导片：名侦探的品格</p>
                  </a>
                </li>
              </ul>
            </swiper-slide>
            <swiper-slide> 
              <ul>
                <li>
                  <a href="">
                    <div class="img"><img src="https://2img.hitv.com/preview/sp_images/2017/zongyi/317663/4111411/20170920174937039.jpg_222x126_h.webp" alt="">
                        <div class="time">2017-09-22</div>
                    </div>
                    <p>先导片：名侦探的品格</p>
                  </a>
                </li>
              
              </ul>
            </swiper-slide>
        </swiper>
    </div>
    <div class="cont_title" >
      <a href="/"><i class='l'></i>相关明星<i class='r'></i></a>
    </div>
    <div class="swiper" id="swiper3">
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide> 
              <ul>
                <li>
                  <a href="">
                    <div class="img">
                        <img src="https://userpic.api.max.mgtv.com/person59783d6765ab7.jpg" alt="">
                        
                    </div>
                    <p><span>王源</span><span>19.8万关注</span></p>
                  </a>
                </li>
                <li>
                  <a href="">
                    <div class="img">
                        <img src="https://userpic.api.max.mgtv.com/person59783d6765ab7.jpg" alt="">
                        
                    </div>
                    <p><span>王源</span><span>19.8万关注</span></p>
                  </a>
                </li>
                <li>
                  <a href="">
                    <div class="img">
                        <img src="https://userpic.api.max.mgtv.com/person59783d6765ab7.jpg" alt="">
                        
                    </div>
                    <p><span>王源</span><span>19.8万关注</span></p>
                  </a>
                </li>
                <li>
                  <a href="">
                    <div class="img">
                        <img src="https://userpic.api.max.mgtv.com/person59783d6765ab7.jpg" alt="">
                        
                    </div>
                    <p><span>王源</span><span>19.8万关注</span></p>
                  </a>
                </li>
              </ul>
            </swiper-slide>
            <swiper-slide> 
              <ul>
                <li>
                  <a href="">
                    <div class="img">
                        <img src="https://userpic.api.max.mgtv.com/person59783d6765ab7.jpg" alt="">
                        
                    </div>
                    <p><span>王源</span><span>19.8万关注</span></p>
                  </a>
                </li>
                
              </ul>
            </swiper-slide>
        </swiper>
    </div>

    <!-- 看了还会看 -->
    <loadMore></loadMore> 

     <!-- 评论 -->
    <comments></comments> 

  </div>
</template>

<script>

import myvideo from './children/video.vue';
import myInfo from './children/info.vue';
import mgUi from './children/mgui.vue';
import loadMore from './children/loadMore.vue';
import comments from './children/comments.vue';

import { swiper, swiperSlide } from 'vue-awesome-swiper';


export default {
  name: 'detail',
  data () {
    return {
      msg: '详情',
      swiperOption:{
          
      }
    }
  },
  components:{
      myVideo:myvideo,
      myInfo:myInfo,
      mgUi,
      swiper,  
      swiperSlide,
      loadMore,
      comments
  },
  methods:{
      
  },
  mounted(){
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' >
    #detail{
      background:#f5f5f5;
        
        .cont_title{
            position: relative;
            padding: 15px 10px;
            height: .14rem;
            line-height: .14rem;
            font-size: .14rem;
            color: #333;
            background: #fff;
            margin-top: 10px;

            a{
                color: #333;
            }

            .subtt{

              width: 70%;
              overflow: hidden;
              font-size: .12rem;
              color: #888;
              white-space: nowrap;
              text-overflow: ellipsis;
              -webkit-line-clamp: 1;
              -webkit-box-orient: vertical;
            }

            .icon_a{
                position: absolute;
                display: block;
                right: 10px;
                top: .15rem;
                color: #ff5f00;
                font-size: .12rem;
                line-height: .12rem;
                padding-left: 16px;
            }

            .l{
                position:absolute;
                top:.16rem;
                left:0;
                background:#f06000;
                border-radius:0 3px 3px 0;
                height:.14rem;
                width:.03rem;
            }

            .r{
                color: #888;
                font-size: .12rem;
                line-height: .14rem;
                margin-left: 5px;

                
            }

            .icon_b i{
                    font-weight: 700;
                  font-size: 12px;
                  color: #ff5f00;
                }
        }
          #swiper3{
            .swiper-slide{
                padding:0;
            }

            ul{
                margin-left:0;
            }

            li{
                float: left;
                width: 25%;
                margin-bottom: 15px;
                text-align: center;
                margin-left:0;
            }

            .img{
                  position: relative;
                overflow: hidden;
                width: .6rem;
                height: .6rem;
                display: block;
                margin: 0 auto;
                border-radius: 30px;

                img{
                    border: none;
                    vertical-align: middle;
                    width: 100%;
                    height: auto;
                }

                
            }

            p{
                margin:0;
            }

            span{
                    width: 100%;
                    display: block;
                    line-height: .12rem;
                    margin: 8px 0 5px;
                    font-size: .12rem;
                    color: #666;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                    text-align:center;

                &:nth-child(2){
                        position: relative;
                    display: block;
                    margin: 0 auto;
                    color: #888;
                }
            }
        }

        #ps8571r3b7e{
            padding: 10px 10px 0px;
            position: relative;
            z-index: 0;
            width: 100%;
            height: .7rem;
            overflow: hidden;
            box-sizing:border-box;

            .tag{
                position: absolute;
                left: 0px;
                bottom: 0px;
                z-index: 9999;
                margin: 0px;
                padding: 0px;
                border: 0px none;
                overflow: hidden;
                pointer-events: none;

                &>div{
                  height: 16px;
                  margin: 0px;
                  padding: 0px 15px;
                  border: 0px none;
                  background: url(https://pic.fastapi.net/static/image/logo.png) 0px 30px no-repeat;
                  color: rgb(255, 255, 255);
                  line-height: 16px;
                  font-size: 12px;
                  font-family: "Microsoft YaHei", SimHei, SimSun;
                }
            }

            a{
              display:block;
            }

            img{
                width:100%;
                height:100%;
            }
        }

        .swiper,.swiper2{
            background:#fff;
            .swiper-slide{
                padding: 0 10px;
                box-sizing: border-box;
            }

            ul{
                float: left;
                margin-left: -2%;
                width: 100%;
                white-space: nowrap;
            }

            li{
                display: inline-block;
                margin-left: 2%;
                width: 32%;
                vertical-align: top;
                box-sizing: border-box;

                a{
                    display: inline-block;
                }

                .img{
                    
                    position: relative;
                    border-radius: 0;
                    background-size: 100% 100%;

                    width: 1.11rem;
                    height: .625rem;
                    background-color: #eee;

                    img{
                        width:100%;
                        height:100%;
                    }
                }

                p{
                  color: #666;
                  font-size: .12rem;
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                  text-overflow: ellipsis;
                  white-space: normal;
                  overflow: hidden;
                  margin: 8px 0 15px;
                  line-height: .17rem;
                }

                .time{
                    position: absolute;
                    right: 0;
                    z-index: 10;
                    color: #fff;
                    font-size: .12rem;
                    display: block;
                    bottom: 0;
                    height: .13rem;
                    line-height: .13rem;
                    padding: 0 5px;
                    border-radius: 0;
                    background: rgba(0,0,0,.8);
                }
            }
        }
    }
</style>
