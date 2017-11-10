<template>
  <div id="index_main">
    <div v-if='!isloading'>
      <banner v-if='detailData' :detailData='detailData' ></banner>
      <conttitle v-if='datalist'  v-for='(item,i) in datalist["title"]' key='{i}'>{{item[0].name}}</conttitle>
    </div>
    <div v-else class="main_loading">
      <img src="" alt="">
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
  name: 'main',
  data () {
    return {
        msg: 'main',
        datalist:[],
        flag:false,
        isShow:false
    }
  },
  props:['detailData','isloading'],
  components:{
      banner:{
          template:`<div class="mybanner">
            <swiper :options="swiperOption" ref="mySwiper">
                <swiper-slide v-for='(banner,j) in detailData[0].moduleData'><a href="/" key='{j}'>
                  <div class='div_img'><img :src='banner.phoneImgUrl?banner.phoneImgUrl:"https://2img.hitv.com/preview/cms_icon/2017/11/20171108203245542.jpg_750x350_h.webp"' alt="" /></div>
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
      },
      conttitle:{
          template:`<div><div class="cont_title" >
              <a href="/"><i class='l'></i><slot></slot><i class='r'></i></a>
          </div></div>`
      }
  },
  watch:{
      "detailData":{
          handler(val,oldval){

              var arr = [];
              var flag = false;
              var that = this;
              console.log(2)
              if(val != oldval){
                  // that.isShow = true
              }


              for(var i = 0 ; i < that.detailData.length ; i++){
                  if(arr.length == 0){
                      arr.push({
                          type:'banner',
                          list:[that.detailData[i].moduleData]
                      })
                      continue;
                  }else{
                      for(var j = 0 ; j < arr.length ; j++){
                        if(that.detailData[i].moduleType == arr[j].type){
                            arr[j].list.push(that.detailData[i].moduleData)
                            flag = true;
                            break;
                        }
                      }

                      if(!flag){
                          arr.push({
                              type:that.detailData[i].moduleType,
                              list:[that.detailData[i].moduleData]
                          })
                      }

                      
                  }
              }
      
              arr.forEach((item,i)=>{
                  that.$set(that.datalist,item.type,item.list)
              })
              
        }
      }
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

        .main_loading{
          height:900px;
          background:#ccc;
        }


        .mybanner{
            overflow:hidden;
            
            .swiper-wrapper{

            }
            .div_img{
                

                img{
                  
                  background-size: cover;
                  width:3.75rem;
                  height: 1.75rem;
                  background-color: #eee;
                }
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
        }
    }
</style>
