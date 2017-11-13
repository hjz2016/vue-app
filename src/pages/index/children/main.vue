<template>
  <div id="index_main">
    <div v-if='!isloading'>
      <banner v-if='detailData' :detailData='detailData' ></banner>
      <contModule v-if='datalist'  v-for='(item,i) in datalist["title"]' :key='i' :allCont='datalist'>{{item[0].name}}</contModule>
    </div>
    <div v-else class="main_loading">
      <div class="spinner">
        <div class="rect1"></div> 
        <div class="rect2"></div> 
        <div class="rect3"></div> 
        <div class="rect4"></div> 
        <div class="rect5"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { swiper, swiperSlide } from 'vue-awesome-swiper';

var event_bus = new Vue({})

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
  updated(){
      
  },
  props:['detailData','isloading'],
  components:{
      banner:{
          template:`<div class="mybanner">
            
            <swiper :options="swiperOption" ref="mySwiper">
                <swiper-slide :key='j+"banner"' v-for='(banner,j) in detailData[0].moduleData'><a href="/" >
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
                      autoplay:2000,
                      loop:true,
                      paginationElement : 'li'
                  }
              }
          },
          props:['detailData']
      },
      contModule:{
          template:`
          <div class='item_module'>
              <div class="cont_title" >
                <a href="/"><i class='l'></i><slot></slot><i class='r'></i></a>
                <a href="/" class='icon_a'><i class='iconfont icon-gengxin'></i>换一换</a>
              </div>
              <div class="cont_body">
                  <ul>
                      <contItem :key='i' v-for='(item,i) in allCont["scrossm"]' v-if='i>=0&&i<2'></contItem>
                  </ul>
              </div>
          </div>`,
          props:['allCont'],
          components:{
            'contItem':{
                data(){
                    return {
                        allCont:null,
                        imgsrc:"https://0img.hitv.com/preview/cms_icon/2017/11/20171109203642308.jpg_346x194_h.webp"
                    }
                },
                template:`<li>
                            
                              <router-link to='/detail'>
                                <div class='b_top'>
                                  <img v-lazy='imgsrc' alt="" />
                                  <span class='green'>特辑</span>
                                </div>
                                <span class='b_title'>习近平同特朗普举行会谈</span>
                                <span class='b_sub'>举行欢迎仪式 共同会见记者</span>
                              </router-link>
                            </li>`
                ,
                created(){
                    event_bus.$on('receiveData',function(data){
                          this.allCont = data;
                          // console.log(this.allCont)
                    })
                }
            }
          },
          mounted(){
              event_bus.$emit('receiveData',this.allCont)
          }
      }
      
  },
  watch:{
      "detailData":{
          handler(val,oldval){
            console.log(this.isloading)
              var arr = [];
              var that = this;
              
              for(var i = 0 ; i < that.detailData.length ; i++){
                  var flag = false;
                  if(arr.length == 0){
                      var type = that.detailData[i].moduleType;
                      var data = that.detailData[i].moduleData
                      var obj = {
                          type:type,
                          'list':[data]
                      }

                      arr.push(obj)

                      continue;
                  }else{
                      for(var j = 0 ; j < arr.length ; j++){
                        
                        if(that.detailData[i].moduleType == arr[j].type){
                            
                            arr[j].list.push(that.detailData[i].moduleData)
                            flag = true;
                           
                        }
                      }

                      if(!flag){
                          var type = that.detailData[i].moduleType;
                          
                          var obj3 = {
                              type:type,
                              'list':[that.detailData[i].moduleData]
                          }
                          arr.push(obj3)
                      }
                  }
              }
      
              arr.forEach((item,i)=>{
                  that.$set(that.datalist,item.type,item.list)
              })

              console.log(arr)
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

        @keyframes stretchdelay{
            0%,40%,100%{
                transform:scaleY(.4)
            }

            20%{
                transform:scaleY(1)

            }
        }

        .main_loading{
            height:900px;
            

            .spinner{
                margin: 0 auto;
                width: 35px;
                height: 50px;
                text-align: center;
                font-size: 10px;
                padding-top:100px;

                &>div{
                    background-color: #f56c10;
                    height: 100%;
                    width: 4px;
                    margin-right: 3px;
                    display: inline-block;
                    float: left;
                    -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
                    animation: stretchdelay 1.2s infinite ease-in-out;
                }

                .rect2{
                    animation-delay: -1.1s;
                    
                }

                .rect3{
                    animation-delay: -1s;
                }

                .rect4{
                    animation-delay: -.9s;
                }

                .rect5{
                    animation-delay: -.8s;
                }
            }            
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
        }

        .cont_body{
            padding: 0 10px;
            background: #fff;

            ul:after{
                content: "";
                display: block;
                height: 0;
                clear: both;
                visibility: hidden;
            }

            li{
                float: left;
                width: 50%;
                margin-bottom: 15px;
                box-sizing: border-box;
                padding-right:5px;

                a{
                    display:block;

                    &>span{
                        width: 100%;
                        display: block;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        height: .125rem;
                        line-height: .135rem;
                        font-size: .12rem;
                        color: #666;
                       
                    }
                }

                .b_top{
                    width: 1.725rem;
                    height: .97rem;
                    background-color: #eee;
                    position:relative;

                    img{
                        width:100%;
                        height:100%;
                    }

                    span.green{
                        background: rgb(7, 184, 90);
                    }

                    span{
                        position: absolute;
                        top: 0;
                        right: 0;
                        z-index: 10;
                        line-height: .15rem;
                        text-align: center;
                        color: #fff;
                        font-size: .12rem;
                        padding: 1px 3px;
                        border-radius: 0 0 0 4px;
                    }
                }

                .b_title{
                    margin-top:8px;
                    
                }

                .b_sub{
                    margin-top:5px;
                    font-size:12px;
                    color: #888;
                }
            }
        }
    }
</style>
