<template>
  <div id="index_nav">
      <div class="nav_wrapper">
          <ul>
            <li v-for='(item,i) in data'  ref='item' class=""><a @click.prevent='chgType' href="#"><span>{{item.title}}</span><i></i></a></li>
          </ul>
      </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'nav',
  data () {
    return {
      msg: 'nav',
      data: null
    }
  },
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
      this.$refs.item[0].className = 'current'
  },
  methods:{
      chgType(e){
          $(e.target).parents('li').addClass('current')
          .siblings('li').removeClass('current')
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
        background:#fff;

        .nav_wrapper{
            padding:0 10px;
            line-height:40px;
            white-space: nowrap;
            overflow:hidden;
            overflow-x:auto;

            li{
                display: inline-block;
                margin: 0 5px;

                &.current{
                    a{
                          color: #ff5f00;
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
