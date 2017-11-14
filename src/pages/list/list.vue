<template>
	<div id="list">
	  <div v-show='!beginReq' class="list-box">
	  	<swiper :options="swiperOption" ref="mySwiper">
	 	   <swiper-slide v-for='(n,i) in listData' :key='i' v-if='i<num'>
	 	   		<a href="/detail">
	 	   			<div class="pic">
	 	   				<img :src="n.data[0].img" alt="">
	 	   				<div class="time">{{n.data[0].rightBottomCorner}}</div>
	 	   			</div>
	 	   			<div class="til">
	 	   				<div class="title">{{n.data[0].title}}</div>
	 	   				<div class="play">
	 	   					<span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2tpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMTgwMTE3NDA3MjA2ODExODIyQUFFOTRCMkU2MjhBMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4MkI4RTJEMEFGOTgxMUU2ODVEOEU5NDg4REM5QzgyOCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4MkI4RTJDRkFGOTgxMUU2ODVEOEU5NDg4REM5QzgyOCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDphNTU5ZWUwMS04ZjJkLTRhYzUtODA1OC1mZmM4ZTAwZTRlM2MiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDE4MDExNzQwNzIwNjgxMTgyMkFBRTk0QjJFNjI4QTMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz61qvmIAAABR0lEQVR42mJkgILOzk4uIJUHxNFArA7ErAz4wW8gvgnES4F4Unl5+TeQICPUMCUgtQ1qEDkAZLAX0NB7jFCXnaPAMGRDjZig3qTUMAaoGXlM0DBDB5+A2B6IrYD4IAmGRrPgcN0hYHgcgrIdgMESCqS7gFiBkCuZcMTmX2QO0PDVQEoLiGuA+BseA1mZiPUL0NDvQNwKZKpBkwpWwERqyAMNfQrEMUCmJRCfodhAJINPQA29TRUDqeZlpKxqAaSOA7EqsjgLGQZJgygc6Zd4A4EGcQKpIiCuAmIuXOpYoKUGelpkRjOM2IT9mwWaqXXQJOyAhthBLWuHZkOiCggmHImUD5qHj5FgGAgsBRk4CepKBioUX5OYoCWtF4WGwgrYb+DA37Nnz3tXV9d5QOYXIJYAYkH0iMFRBVwH4n4gTgIa9gokCBBgALYzV/uSU9QrAAAAAElFTkSuQmCC" alt=""></span>
	 	   					<p>{{n.data[0].desc[0]}}</p>
	 	   				</div>
	 	   			</div>
	 	   		</a>
		 	   <div class="roller"></div>
	 	   		
	 	   </swiper-slide>

	    </swiper>
	  </div>
	  <div v-show='beginReq' class="main_loading">
	      <div class="spinner">
	        <div class="rect1"></div> 
	        <div class="rect2"></div> 
	        <div class="rect3"></div> 
	        <div class="rect4"></div> 
	        <div class="rect5"></div>
	      </div>
	    </div>
	  
	  <div :class='loading?"puller":"puller grey" '  ref='puller'><i v-if='loading' class="el-icon-loading"></i>{{txt}}</div>
	</div>
</template>

<script>

import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
  name: 'list',
  data () {
    return {
      msg: '列表页',
      num:10,
      loading:false,
      txt:'下拉加载',
      swiperOption:{
          direction:'vertical',
          notNextTick: true,
          slidesPerView:'auto'
      },
      listData:[],
      beginReq:true
    }
  },
  computed:{
  	swiper(){
  		return this.$refs.mySwiper.swiper
  	}
  },
  components:{swiper,  
            swiperSlide  },
  methods: {
	  getListData() {
	     var that = this;

	     // 开始请求
	     this.beginReq = true;

	      this.$http.jsonp('https://mobileso.bz.mgtv.com/msite/search/v1',{
	        params:{
	          _support:10000000000000000,
	          q:localStorage['keyword'],
	          pc:30,
			  pn:1,
			  sort:0,
			  ty:0,
			  du:0,
			  pt:0,
			  corr:1
	        },
	        jsonp:'callback',
	        jsonpCallback: "jsonp_usiu41biy4mlmnb"
	      }).then((res)=>{
	          console.log(res.data.data.contents)
	          res.data.data.contents.forEach((item)=>{
	          	if(item.type=='video'){
	          		that.listData.push(item)
	          	}
	          })
	          // 请求结束
		     that.beginReq = false;
	          console.log(that.listData)
	      })
	  }
  },
  mounted(){
  	var that = this;
  	// 上拉加载
  	this.swiper.on('touchEnd',function(e){
  		if(that.loading) return;

  		if(that.swiper.translate < 0) {
            that.txt = '加载中...'
            that.loading = true
            setTimeout(function(){
            	that.num += 10;

            	if(that.num >= that.listData.length){
            		that.txt = '没有更多了'
            		that.swiper.off('touchEnd')
            	}else{
            		that.txt = '下拉加载'
            	}
	            
	            that.loading = false;


            },2000)
        }

        
  	})

  	// 获取数据
  	this.getListData()

  	
  }

}
</script>

<style lang='scss' scoped>
	.main_loading{
            height:900px;

            @keyframes stretchdelay{
	            0%,40%,100%{
	                transform:scaleY(.4)
	            }

	            20%{
	                transform:scaleY(1)

	            }
	        }
            

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

	#list{
		background: #f5f5f5;
		.list-box{
			background: #fff;

			.swiper-slide{
				width: 100%;
			    height: .625rem;
			    background-color: #fff;
			    padding: .15rem 0;

			    a{
			    	display: block;
			    	height: .625rem;
				    position: relative;
			    }

			    .pic{
			    	position: absolute;
				    width: 1.11rem;
				    margin-left: .1rem;
			    }

			    .time{
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
				    top: .49rem;
				    font-family: Helvetica Neue,helvetica,arial,sans-serif;
			    }

			    img{
			    	width: 100%;
			    }

			    .til{
			    	position: absolute;
				    margin-left: 1.34rem;
				    height: .625rem;
				    padding-right: .15rem;
				    min-width: 2rem;

				    .title{
			    	    line-height: .17rem;
					    font-size: 12px;
					    color: #666;
					    height: .49rem;
				    }

				    .play{
				    	    position: relative;
						    color: #888;
						    margin-top: .025rem;
						    height: 20px;

						span{
							position: absolute;
						    height: .1rem;
						    width: .1rem;

						    img{
						    	position: absolute;
						    }
						}

						p{
							height: .1rem;
						    line-height: .1rem;
						    margin-left: .15rem;
						    font-size: .12rem;
						}
				    }
			    }
			}
		}

		.roller{
			height: 10px;
			background: #f5f5f5;

		    position: absolute;
		    bottom: -7px;
		    width: 100%;
		}
	}

	.puller{
		
		text-align: center;
	    color: #f06000;
	    font-size: 12px;
	    height:.5rem;
	    line-height: .5rem;
	    margin-top: 10px;
		border-bottom:1px solid #ccc;
		background: #fff;
	}

	.grey{
		color: #666;
	}
</style>