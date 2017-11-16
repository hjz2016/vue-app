<template>
  <div id="search">
    <div class="search_history" v-if='history.length!=0'>
      <div class="til">
        搜索历史
        <i class="el-icon-delete" v-delete:click='del'></i>
      </div>
      <div class="list">
        <ul>
          <li v-for='n in history'><a @click='beforeGoList(n)'>{{n}}</a></li>
        </ul>
      </div>
    </div>
    <div class="tt">
      热门推荐
    </div>   
    <div class="filter">
      <span v-for='(item,i) in listdata' @click='chgTabs' :class='i==0?"current":""' :data-value='item.value'>{{item.label}}</span>
    </div> 
    <div class="piclist">
      <a href="/detail" v-for='(item,i) in curIndex.listWithPic' v-if='i<3'>
        <div class="duration" :style="'background:'+item.leftTopCorner.color">{{item.index}}</div>
        <div class="icon-info">{{item.updateDesc}}</div>
        <img :src="item.image">
        <p>{{item.clipName}}</p>
      </a>
    </div>
    <div class="list-text">
      <a href="/detail" v-for='(item,i) in curIndex.listOnlyText' :key='item.clipId'>
        <em>{{item.index}}</em>
        <span>{{item.clipName}}</span>
        <i src="https://m.mgtv.com/top-more.png"></i>
      </a>
    </div>
    <div class="hot">
      <div class="til">全网热门搜索</div>
      <div class="list" v-demo:click.abc='chgTabs'>
        <ul>
          <li v-for='(item,i) in recommendlist'>
            <span :style="'background:'+colors[i]">{{i+1}}</span>
            <a href="/detail">{{item}}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
const IScroll = require("../../../static/iscroll-probe") ;
// console.log(IScroll)
import {mapState,mapMutations} from 'vuex'

export default {
  name: 'search',
  data () {
    return {
      msg: '搜索页',
      listdata:[],
      recommendlist:[],
      curType:1,
      colors:['rgb(255, 95, 0)','rgb(67, 159, 253)','rgb(47, 205, 118)']
    }
  },
  computed:{
    curIndex(){
      return this.listdata.length!=0?this.listdata[this.curType - 1]:0
    }
    ,
    ...mapState(['history'])
  },
  components:{
      
  },
  directives:{
    'demo':{
        bind(el,binding,vnode){
          console.log(el,binding,vnode)
        }
    },
    'delete':{
        bind(el,binding){
          el['on'+binding.arg] = ()=>{
              binding.value()
          }
        }
    }
  },
  methods:{
      chgTabs(e){
          $(e.target).addClass('current')
          .siblings('span').removeClass('current')

          this.curType = $(e.target).data('value')
          // this.$store.commit('addNum',2)
      },
      beforeGoList(val){
        var that = this;
        
        var obj = {$router:that.$router,$route:that.$route,keyword:val}
        that.goList(obj)
      },
      ...mapMutations(['goList','del'])
  },
  mounted(){
    // console.log(this.curIndex)
    var that = this;
      this.$http.jsonp('https://mobileso.bz.mgtv.com/msite/entrance/v1',{
        params:{
          _support:10000000000000000
        },
        jsonp:'callback',
        jsonpCallback: "jsonp_18gi54jawp9yhf6"
      }).then((res)=>{
          console.log(res.data.data.recommend.list[0].items)
          that.listdata = res.data.data.toplist.list
          that.recommendlist = res.data.data.recommend.list[0].items
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
   #search{
    background: #fff;
      .search_history{

        i{
          float:right;
          margin-top: .15rem;
          margin-right: .1rem;
        }

        .list{
          /*padding: 0 0 0 .1rem;*/
          overflow: hidden;

          li{
            display: block;
            float: left;
            width: 50%;
          }

          a{
            height: .4rem;
            border-radius: .03rem;
            line-height: .4rem;
            font-size: .14rem;
            text-align: center;
            display: block;
            margin:.1rem;
            background-color: #eff1f3;
            color: #666;
            overflow: hidden;
          }
        }
      }

      .til{
                position: relative;
              padding: .05rem 0 .05rem .1rem;
              height: .25rem;
              line-height: .4rem;
              font-size: .14rem;
              color: #999;
          }

      .hot{
          clear: both;
          min-height: 3.13rem;
          width: 100%;
          background-color: #fff;

          

          .list{
            padding-left: .1rem;

            li{
              display: block;
              float: left;
              width: 47%;
              border-bottom: .01rem solid #f4f5f9;
              margin-right: .1rem;
            }

            span{

              position: absolute;
              margin-top: .2rem;
              width: .16rem;
              height: .16rem;
              background: #9fa8b1;
              font-size: .12rem;
              line-height: .16rem;
              border-radius: .015rem;
              color: #fff;
              text-align: center;
              font-family: helvetica;
              z-index: 1;
            }

            a{

              height: .3rem;
              line-height: .14rem;
              font-size: .14rem;
              margin-top: .21rem;
              padding-left: .23rem;
              display: block;
              color: #666;
            }
          }
      }
      
      .list-text{
        padding: 0 .1rem;

        a{
          display: block;
          height: .5rem;
          line-height: .5rem;
          font-size: .14rem;
          color: #333;
          border-top: 1px solid #f4f5f9;
        }

        em{
            line-height: .5rem;
            font-size: .13rem;
            color: #999;
            margin-right: .1rem;
            font-weight: 700;
        }

        i{
          display: inline-block;
          top: .1rem;
          width: .2rem;
          height: .09rem;
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAASCAYAAABit09LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozMzU5MjYxOS1hZDc0LTQ2ZjAtODRiNi0xY2Q3MDAyZmU5ZmQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjY4MDREOTM2RThDMTFFN0I3MzhCMzhDREEyRjExMkIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjY4MDREOTI2RThDMTFFN0I3MzhCMzhDREEyRjExMkIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzRhOTg3MmItNGFhNS00NzNmLWJjZTMtZWQ5OTliNGFjMTQ0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjMzNTkyNjE5LWFkNzQtNDZmMC04NGI2LTFjZDcwMDJmZTlmZCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvyOYuQAAADzSURBVHjafNLNSgJRHIbxSSevQUT8hELoHgQ10EW0UHDhRXgzbmbZQhfiPSQiESiGEFK4y0TMD4ogtz0HXmGQOf7hBwPzzJnhzLnwPK/lOM4N6lg7lgkhhzweET0XmpVe9EAfMVu4RQkTXGvleFBoZo8ixrjSyomg0My3Vn5GVnEyKDTzgzKekFacDgr98RApxZmQZTd+UcFA39q1hWYO+ND1n2uJwnhAAzs0XUvU1o/Y4BbT0/ASHdTwpb19NTf8YURRVYejgNnxpuuLurjHStGb/1Wuoh7usNTr3k8/3IQtRZ9aaW47PQuMdCbntk39F2AAKHcy/uDMS0QAAAAASUVORK5CYII=) no-repeat 50%;
          background-size: .05rem .09rem;
          
        }
      }

      .tt{
          position: relative;
          padding: 5px 0 5px .1rem;
          height: .2rem;
          line-height: .44rem;
          font-size: .14rem;
          color: #999;
      }

      .filter{
        line-height: 55px;
        padding-left: 10px;

        span{
          padding: 2px 12px;
          margin-right: 25px;

          &.current{

              background-color: #ff5f00;
              border-radius: .2rem;
              color: #fff;
          }
        }
      }

      .piclist{
        padding-left: .1rem;
        height: 2.1rem;

          a{
            display: block;
            position: relative;
            margin-right: .1rem;
            width: 1.11rem;
            float: left;
          }

          img{
            width:100%;
            display: block;
          }

          .duration{
            position: absolute;
            left: 0;
            top: 0;
            height: .25rem;
            width: .25rem;
            background-color: rgb(255, 95, 0);
            text-align: center;
            line-height: .25rem;
            color: #fff;
          }

          .icon-info{

            position: absolute;
            height: .13rem;
            padding: 0 .02rem;
            line-height: .13rem;
            color: #eee;
            font-size: .12rem;
            text-align: center;
            background-color: #000;
            opacity: .8;
            right: 0;
            top:1.43rem;
          }

          p{
              font-size: .14rem;
              line-height: .17rem;
              color: #666;
              /*max-height: .30rem;*/
              white-space: normal;
              overflow: hidden;
              text-overflow: ellipsis;
              margin-top: .075rem;
              margin-bottom: .1rem;
          }
      }
   }
</style>
