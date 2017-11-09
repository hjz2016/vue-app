<template>
  <div id="index_main">
      <banner v-if='detailData' :detailData='detailData' ></banner>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
  name: 'main',
  data () {
    return {
        msg: 'main'
    }
  },
  props:['detailData'],
  components:{
      banner:{
          template:`<div class="mybanner">
            <swiper :options="swiperOption" ref="mySwiper">
                <swiper-slide v-for='banner in detailData[0].moduleData'><a href="/">
                  <div class='div_img' :style="{backgroundImage:'url('+banner.phoneImgUrl+')'}"></div>
                  <div class='title'>
                    <p>{{banner.name}}</p>
                  </div>
                </a></swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
          </div>`,
          components: {  
            swiper,  
            swiperSlide  
          },  
          data(){
              return{
                  swiperOption:{
                      autoplayDisableOnInteraction : false,
                      pagination : '.swiper-pagination',
                      paginationClickable :true,
                      paginationType : 'bullets',
                      autoplay: 2000,
                      paginationElement : 'li',
                      loop:true
                  }
              }
          },
          props:['detailData']
      }
  },
  updated(){
      var arr = []

      // this.detailData.forEach((item)=>{
      //     if(arr.length == 0){
      //         arr.push({
      //             type:'banner',
      //             list:[item.moduleData]
      //         })
      //     }else{
      //         for(var i = 0 ; i < arr.length ; i++){
      //           if(item.moduleType == arr[i].type){
      //               arr[i].list.push(item.moduleData)
      //           }else{
      //               arr.push({
      //                   type:item.moduleType,
      //                   list:[item.moduleData]
      //               })
      //           }
      //       }
      //     }

          
      // })

      console.log(arr)
  }
  
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
    #index_main{
        width:auto;
        background:#f5f5f5;
        position: relative;
        margin-bottom: 0;


        .mybanner{
            overflow:hidden;
            
            .swiper-wrapper{

            }
            .div_img{
                background-image: url(https://2img.hitv.com/preview/cms_icon/2017/11/20171108203245542.jpg_750x350_h.webp);
                background-size: cover;
                width:3.75rem;
                height: 1.75rem;
                background-color: #eee;
            }

            .swiper-pagination-bullets{
                position: absolute;
                bottom: 50px;
                left: 0;
                width: 100%;
                text-align: center;
                li{
                    display: inline-block;
                    width: 10px;
                    height: 2px;
                    background: hsla(37,21%,88%,.6);
                    margin: 0 .02rem 0 0;
                    opacity:1;
                    border-radius:0;
                }

                .swiper-pagination-bullet-active{
                    background:#fff;
                }
            }

            .title{

                width: 100%;
                height: .4rem;
                line-height: .4rem;
                padding: 0 20px;
                color: #666;
                background: #fff;
                overflow: hidden;
                box-sizing: border-box;
                -webkit-box-sizing: border-box;
                text-align: center;

                p{
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                }
            }
        }
    }
</style>
