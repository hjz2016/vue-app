<template>
  <div style="position: relative;
    width: 100%;
    height: 40px;
    line-height: 40px;">
    <div id="index_nav">
      
        <swiper :options="swiperOption" ref="mySwiper" class="nav_wrapper">
            <!-- <ul  > -->
              <swiper-slide v-for='(item,i) in data' :key='i'  ref='item' class="">
                <a @click.prevent='chgType' href="#">
                  <span>{{item.title}}</span>
                  <i></i>
                </a>
              </swiper-slide>
              
            <!-- </ul> -->
        
        </swiper>
      
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { swiper, swiperSlide } from 'vue-awesome-swiper';


export default {
  name: 'nav',
  data () {
    return {
      msg: 'nav',
      data: null,
      curvclassId:143,
      detailData:null,
      swiperOption:{
          slidesPerView:'auto',
          slideToClickedSlide:true
      }
    }
  },
  components:{swiper,  
            swiperSlide  },

  props:['getNavData','beginReq'],
  created(){
      var that = this;
      // 请求nav数据
      this.$http.jsonp('https://m.bz.mgtv.com/odin/c1/channel/list',{
        params:{
          version:5.0,
          type:7
        },
        jsonp:'callback',
        jsonpCallback: "mgtvcallback_cl"
      }).then((res)=>{
          this.data = res.body.data
      })
  },
  updated(){
      var that = this;
      console.log(this.$refs.item[0].$el)
      this.$refs.item[0].$el.className += ' current';
      this.$refs.item.forEach((item,i)=>{
          $(item.$el).data('vclassId',that.data[i].vclassId)
      })

      

  },
  mounted(){
      this.getDetail()
  },
  methods:{
      chgType(e){
          var that = this;
          console.log($(e.target).parents('.swiper-slide'))
          $(e.target).parents('.swiper-slide').addClass('current')
          .siblings('div').removeClass('current')

          this.curvclassId = $(e.target).parents('.swiper-slide').data('vclassId')

          this.getDetail()

          // this.$refs.item.forEach((item)=>{
          //   if(item.className=='current'){
          //     // console.log($(item).offset().left)

          //     $('.nav_wrapper').scrollLeft($(item).offset().left - $('.nav_wrapper').offset().left+$('.nav_wrapper').scrollLeft()
          //     )
          //   }
          // })
      },
      getDetail(){
          var that = this;
          // 开始
          this.beginReq(true)

          // 请求详细数据
          this.$http.jsonp('https://st.bz.mgtv.com/odin/c1/channel/index',{
            params:{
              _support:10000000,
              version:5.0,
              vclassId:that.curvclassId,
              type:7
            },
            jsonp:'callback',
            jsonpCallback: "mgtvcallback_ci"
          }).then((res)=>{
              that.detailData = res.body.data
              that.getNavData(that.detailData)
              this.beginReq(false)

              console.log(that.detailData)
          })
      }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
    #index_nav{
        height:40px;
        width:100%;
        position:fixed;
        top:44px;
        background: hsla(0,0%,100%,.9);
        z-index:22;


        .nav_wrapper{
            padding:0 10px;
            line-height:40px;
            white-space: nowrap;
            overflow:hidden;
            overflow-x:auto;
            transition: all .5s;
            

            .swiper-wrapper{
                /*display: table;*/
            }

            @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (orientation : portrait) {
                li a{
                    font-size:.14rem
                }
            }

            @media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (orientation : portrait) {
                li a{
                    font-size:.15rem
                }
            }

            .swiper-slide{
                /*display: inline-block;*/
                margin: 0 3px;
                text-align: center;
                width: auto;

                &.current{
                    a{
                          color: #ff5f00;
                          text-align: center;
                    }

                    i{
                        background: #ff5f00;
                    }
                }
            }

            a{
                position: relative;
                display: block;
                font-size: .14rem;
                color: #666;
                padding: 0 10px;
            }

            i{
                position: absolute;
                bottom: 5px;
                left: 50%;
                margin-left: -2px;
                width: 4px;
                height: 4px;
                display: block;
                
                display: none;
                border-radius: 2px;
                display:block;
            }
        }
    }
</style>
