<template>
  <div id="mgui">
    <div class="cont_title" >
      <a href="/"><i class='l'></i>正片<i class='r'></i></a>
      <a href="/" class="subtt">更新至2017-11-10期</a>
      <a href="/" class='icon_a'>查看全部<a class="icon_b"><i class='iconfont icon-gengduo1'></i></a></a>
    </div>
    <div class="tabs">
      <ul>
        <li class="focus" @click.stop.prevent='chgTabs'><a href="#">第三季</a></li>
        <li><a href="#" @click.stop.prevent='chgTabs'>第二季</a></li>
        <li><a href="#" @click.stop.prevent='chgTabs'>第一季</a></li>
      </ul>
    </div>
    <div class="swiper">
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
                    <div class="img"><img src="https://2img.hitv.com/preview/sp_images/2017/zongyi/317663/4111411/20170920174937039.jpg_222x126_h.webp" alt="">
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
                    <div class="img">
                        <img src="https://2img.hitv.com/preview/sp_images/2017/zongyi/317663/4111411/20170920174937039.jpg_222x126_h.webp" alt="">
                        <div class="time">2017-09-22</div>
                    </div>
                    <p>先导片：名侦探的品格</p>
                  </a>
                </li>
              
              </ul>
            </swiper-slide>
        </swiper>
    </div>
    
    
  </div>
</template>

<script>



export default {
  name: 'mgui',
  data () {
    return {
      msg: '正片',
      swiperOption:{
          
      }
    }
  },
  components:{
     
  },
  methods:{
     chgTabs(e){
        $(e.target).parent().addClass('focus')
        .siblings('li').removeClass('focus')
     } 
  },
  mounted(){
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' >
    #mgui{
        background: #fff;
        
        

        .tabs{

            position: relative;
            overflow: hidden;
            font-size: .13rem;
            margin: 0 5px 15px;
            box-sizing: border-box;

            li{
                display: inline-block;
                width: 20%;
                padding: 0 5px;
                box-sizing: border-box;

                a{
                        width: 100%;
                    height: .18rem;
                    line-height: .18rem;
                    display: block;
                    color: #666;
                    border-bottom: 2px solid #fff;
                    text-align: center;
                }

                &.focus{
                    a{
                        color: #ff5f00;
                        border-bottom: 2px solid #ff5f00;
                    }
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
    }
</style>
