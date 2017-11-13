<template>
  <div id="search">
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
  </div>
</template>

<script>

export default {
  name: 'search',
  data () {
    return {
      msg: '搜索页',
      listdata:[],
      curType:1
    }
  },
  computed:{
    curIndex(){
      return this.listdata[this.curType - 1]
    }
  },
  components:{
      
  },
  methods:{
      chgTabs(e){
          $(e.target).addClass('current')
          .siblings('span').removeClass('current')

          this.curType = $(e.target).data('value')
         
      }
  },
  mounted(){
    var that = this;
      this.$http.jsonp('https://mobileso.bz.mgtv.com/msite/entrance/v1',{
        params:{
          _support:10000000000000000
        },
        jsonp:'callback',
        jsonpCallback: "jsonp_18gi54jawp9yhf6"
      }).then((res)=>{
          console.log(res.data.data.toplist.list)
          that.listdata = res.data.data.toplist.list
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
   #search{
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
