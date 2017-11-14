<template>
  <div style="display: block;
    position: relative;
    height: 44px;
    z-index: 20;">
    <!-- 主页头部 -->
    <div v-if='type=="index"' id="myheader">
      <logo></logo>
      <iconList></iconList>  
      <search :keyword='keyword'></search>
    </div>
    <!-- 详情头部 -->
    <div v-else-if='type=="detail"' id="myheader">
      <logo></logo>
      <iconList :type='type'></iconList>  
    </div>
    <!-- 搜索头部 -->
    <div v-else-if='type=="search"||"list"' id="myheader">
      <longSearch :keyword='keyword' :chgType='chgType'></longSearch>
      <searchBtn :isCancel='isCancel'></searchBtn>
    </div>
    <!-- 历史头部 -->
    <div v-else-if='type=="lishi"' id="myheader">
      <Back></Back>
      <myTitle></myTitle>
    </div>
  </div>
  
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  name: 'index',
  data () {
    return {
      msg: '首页',
      isCancel:false
    }
  },
  props:['type','keyword'],
  methods:{
      chgType(e){
          // console.log(e.target)
          this.isCancel = !this.isCancel
          if(this.isCancel){
            $(e.target).trigger('focus')
          }else{
            $(e.target).trigger('blur')
          }
      }
  },
  components:{
      'logo':{
          template:`<div class="logo">
                      <a href="/">
                        <img src="https://img.mgtv.com/imgotv-mobile-zh_cn/static/images/logo-header.5983c87.png" alt="">
                      </a>
                    </div>`
      },
      'search':{
          template:`<div class='search'>
              <input type="text" :value='keyword' @click='$router.push("/search")'/>
              <span><i class='iconfont icon-sousuo'></i></span>
          </div>`,
          props:['keyword']
      },
      'iconList':{
          template:`<ul class='icon_list'>
              <li v-if='typeIs'><router-link to="/search" ><i class='iconfont icon-sousuo'></i></router-link></li>
              <li><a href="/lishi"><i class='iconfont icon-history-copy'></i></a></li>
              <li><a href="/wode"><i class='iconfont icon-wode1-copy'></i></a></li>
          </ul>`,
          props:['type'],
          computed:{
              typeIs(){
                  return this.type=='detail'
              }
          }
      },
      'longSearch':{
          template:`<div class="longSearch">
            <div class="searchicon"></div>
            <form action="javascript:;" @click='chgType' @keyup.enter='beforeGoList()'><input ref='ipt' @blur='chgType'  type="text" :placeholder='key?key:keyword'/></form>
          </div>`,
          props:['keyword','chgType'],
          data(){
            return {
              key:localStorage["keyword"]
            }
          },
          methods:{
              beforeGoList(){
                var that = this;
                var obj = {$router:that.$router,$route:that.$route,keyword:that.$refs.ipt.value}
                that.goList(obj)
              },
              ...mapMutations(['goList'])
          }
      },
      'searchBtn':{
          template:'<div class="searchBtn">{{isCancel?"取消":"搜全网"}}</div>',
          props:['isCancel']
      },
      'Back':{
          template:`<div class="backBtn"><a href="#"><i class='iconfont icon-gengduoxinxi'></i></a></div>`
      },
      'myTitle':{
          template:`<p class='myTitle'>播放记录</p>`
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
    #myheader{
      position: fixed;
      left: 0;
      top: 0;
      z-index: 999;
      width: 100%;
      height: 44px;
      padding: 0 10px;
      line-height: 1;
      color: #fff;
      background: #222;
      box-sizing: border-box;
      -webkit-box-sizing: border-box;

      .logo{
          position: absolute;
          left: 10px;
          height: 34px;
          padding-top: 10px;

          a{
              display:block;
          }

          img{
                width: 87px;
              height: 22px;
          }
      }

      .icon_list{
          float:right;
          li{
              float: left;

              a{
                  width: .43rem;
                  height: 44px;
                  line-height: 44px;
                  text-align: center;
                  display: block;
              }

              i{
                  font-size: 22px;
                  color: #bbb;
              }
          }
      }

      .search{
          position: relative;
          float: right;
          margin-top: 8px;
          width: 1.5rem;
          height: 28px;
          line-height: 28px;
          margin-right: .09rem;

          input{
              border: 0 none;
              width: 100%;
              height: 100%;
              border-radius: 4px;
              background: #5a5b5c;
              color: #bbb;
              padding: 0 10px 0 30px;
              box-sizing: border-box;
              -webkit-box-sizing: border-box;
          }

          span{
              position: absolute;
              top: -1px;
              left: 10px;

              i{
                  font-size: 10px;
                  color: #bbb;
              }
          }
        }

        .longSearch{
            position: absolute;
            height: .28rem;
            width: 80%;
            border-radius: 5px;
            margin: .07rem 0 .07rem 0;
            background-color: #fff;
            color: #333;

            .searchicon{
                height: .27rem;
                width: .27rem;
                position: absolute;
                background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2dpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMTgwMTE3NDA3MjA2ODExODIyQUFFOTRCMkU2MjhBMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQzM4NkZDN0MwMjIxMUU2QkYyNkQ3MEIwRjMzQjZEMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQzM4NkZDNkMwMjIxMUU2QkYyNkQ3MEIwRjMzQjZEMSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4MURDQ0Q4M0FGOTgxMUU2ODVEOEU5NDg4REM5QzgyOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4MURDQ0Q4NEFGOTgxMUU2ODVEOEU5NDg4REM5QzgyOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pqs7OW0AAAKuSURBVHjarNZbiIxhHMfxd3kN2rVqHWOHrKzDyumC1UQU9oZSCoVNai+sw51NiSsXU3LhUu2FHIqQGhe4QM6JtclG6xBiW6e1DLvLrp3x/ddvp2en17Qz46lPTTPvO//n+b//5/+8BdFo1AsYwzEbSxBBBcbBx0+8wQPcwD18wh/vH8MP+G4SNqAKUxHGYOf3IozHdCzFQ5zDVfQMJMh8bMdajEGnZvsSXzRbC1KKeZgrMzAZp/E9UxC7qQ4b0Y3buIJreIpvum4QpqASK7FcKZ2IApxAR1AQS9EOBfil5R9BA5JpE0vglcRQjVrMwh49n4tu6mxWhdiM9ejFeRxUrpNe5vEDx3AYL1CG3Soazw1SoWUXq1LshmZv4KNDK6/XpCJS6AaxMp2GNlxGo5f9iOMS7qoSIyqEVBD7YjSaVEm5jnd6FlZdi1Rx/dI1FM/xLI8gVn2P0KXqK3WDjNXnz0pZPuO9U1XFbpC+0evlP5JpRZX6EHfaRSjPICOdFvTbDdKqz2HJdfjqdSE9l69ukMfqrFYAC/MIYk1zGUbgCV67Qaw3vUU5ViltuYw5WINhuKl+lwpyRz3KcrkCW3J4NtZct2k1rQrywQ3SohbdqNrehU1ZrGiB+lWVNmK9Jp5wH1ZSB4616n2Yib0YpVRabtvT/tg27wRduxXrNOF2deHOoFZv58dZDFG7tl52SL0opnS2aC+V6Hd7yKu1meM60ErU9m1TX9Cx0e/QsqUe10x26k8qdU50aScndU9I6bR3gY84qpOzVqvbr+tO2j1+QNuOKUXWOBer2ZUFdN0GHQ23cF+ztkAHnJRbMZ0JepHoUaOzrnxdpR1W/XtaVZveWJqdzezpwPMVoO+kLPIzVE23AjVlUcp2zymtoE6Banzv/4+EtoStvMY6818BBgCLb6iggKvmiAAAAABJRU5ErkJggg==) no-repeat 50%;
                background-size: .12rem .12rem;
            }

            form{
                display: block;
                height: .28rem;
                line-height: .28rem;
                width: 90%;
                margin-left: .275rem;
                font-size: .14rem;
                border: 0;
                color: #333;

                input{
                    border: 0 none;
                    height: 100%;
                    width: 100%;
                }
            }
        }

        .searchBtn{
            float: right;
            margin-top: .07rem;
            margin-right:.025rem;
            height: .28rem;
            line-height: .28rem;
            font-size: .15rem;
            color: #fff;
            text-align:center;
            width:.45rem;
        }

        .backBtn{
            line-height: 44px;
            height: 44px;
            text-align: center;
            position: absolute;
            left: 0;
            top: 0;
            width: 44px;

            a{
                position: relative;
                display: block;
                width: 44px;
                height: 44px;
            }

            i{
                display: inline-block;
                
                font-size: .18rem;
                color: #fff;
                position: relative;
            }
        }

        .myTitle{
            width: 75%;
            height: 44px;
            line-height: 44px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            margin: auto;
            text-align: center;
            font-size:.16rem;
        }
    }

    
</style>
