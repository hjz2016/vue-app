<template>
  <div id="loadMore">
    <div class="cont_title" >
      <a href="/"><i class='l'></i>看了还会看<i class='r'></i></a>
    </div>
    <div class="l_body">
        <item :moreList='moreList' :page='page'></item>
    </div>
    <div class="load">
      <a href="#" @click.prevent='renderMore'>{{txt}}<i v-if='!onBottom' class='iconfont icon-gengduo1'></i></a>
    </div>
  </div>
</template>

<script>



export default {
  name: 'loadMore',
  data () {
    return {
      msg: '看了还会看',
      moreList:[],
      shouldLoadMore:false,
      page:{
        gt:0,
        lt:3
      },
      onBottom:false,
      txt:'点击展开更多'
    }
  },
  components:{
     item:{
        template:`<ul><li v-for='(item,i) in moreList' :key='item.clipId' v-if="i>=page.gt&&i<=page.lt">
          <a href="#">
            <div class="pic"><img :src="item.image" :title="item.title" alt=""><div class="time">{{item.desc}}</div></div>
            <div class="txt">
              <h5>{{item.name}}</h5>
              <p>{{item.info}}</p>
            </div>
          </a>
        </li></ul>`,
        props:['moreList','page']
     }
  },
  methods:{
     renderMore(e){
        this.page.lt += 6;
        if(this.page.lt > this.moreList.length){
            this.txt = '已经到底了哦~'
            $(e.target).addClass('more')
            this.onBottom = true;
        }
     }
  },
  mounted(){
    var that = this;
      // 请求数据
      this.$http.jsonp('https://rc.mgtv.com/msite/like',{
        params:{
          _support:10000000,
          abroad:0,
          guid:928423149232852992,
          vid:4168487,
          cookie:'70321248-b366-43b8-b38d-5960c8a79f10',
          c:1
        },
        jsonpCallback: "jsonp_w7hhfdgle40qoss"
      }).then((res)=>{
          console.log(res.data.data)
          that.moreList = res.data.data
      })
  }
}
</script>

<style lang='scss' >
    
    #loadMore{
        margin-top: 10px;
        background: #fff;

        .load{
          border-top: 1px solid #eee;
          text-align: center;
          background: #fff;
          font-size: .13rem;
          i{  transform: rotate(90deg);
                  font-weight: 700;
                font-size: 12px;
                color: #ff5f00;
          }
          a{
            width: 100%;
            height: 50px;
            line-height: 50px;
            display:flex;
            justify-content:center;
            color: #ff5f00;

            &.more{
                color: #888;
            }
          }

          
        }

        .l_body{
            padding:0 .1rem;
        }

        li{
          margin-bottom:10px;
        }

        a{
            display:flex;

        }

        .pic{
            width: 1.11rem;
            height: .625rem;
            background-color: #eee;
            position:relative;
            margin-right: .085rem;

            img{
              width:100%;
              height:100%;
            }

            .time{
                display: block;
                bottom: 0;
                height: .13rem;
                line-height: .13rem;
                padding: 0 5px;
                border-radius: 0;
                background: rgba(0,0,0,.8);
                position: absolute;
                right: 0;
                z-index: 10;
                color: #fff;
                font-size: .12rem;
            }
        }

        .txt{
            
            h5{
              font-weight:normal;
            font-size: .12rem!important;
            line-height: .17rem;
            color: #666;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            }

            p{
                position: relative;
                height: 18px;
                line-height: 18px;
                font-size: 9px;
                color: #888;
            }
        }
    }
      
</style>