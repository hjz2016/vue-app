<template>
	<div id="comments">
	  <div class="c_body" style="background: #fff;
    padding-bottom: 10px;">
		<div class="cont_title" >
	      <a href="/"><i class='l'></i>评论<span>(123)</span><i class='r'></i></a>
	    </div>
	    <div class="c_box">
	    	<ul>
	    		<li v-for='(item,i) in commentList' :key='item.comment_id' v-if='i<=4'> 
	    			<div class="avatar">
	    				<a href="">
	    					<img :src="item.user.avatar_key" alt="">
	    				</a>
	    			</div>
	    			<div class="info">
	    				<h5 class="name">{{item.user.nickname}} <span>{{item.create_time}}</span></h5>
	    				<p class="cont">{{item.content}}</p>
	    			</div>
	    		</li>

	    	</ul>
	    </div>
	    <div class="ft">
	    	<a href="">
	    		进入APP查看更多评论
                <i class='iconfont icon-gengduo1'></i>
	    	</a>
	    </div>
	   </div>
	</div>
</template>

<script>
	export default {
	  name: 'comments',
	  data () {
	    return {
	      msg: '评论',
	      commentList:[]
	    }
	  },
	  methods:{
	  	sort(list){
	  		list.forEach((item)=>{
	  			item.create_time = parseInt(item.create_time)
	  		})
	  		list.sort(function(a,b){
	  			return a.create_time-b.create_time
	  		}).forEach((item)=>{
	  			item.create_time += '分钟前'
	  		})
	  		console.log(list)
	  		this.commentList = list
	  	}
	  },
	  mounted(){
	    var that = this;
	      // 请求数据
	      this.$http.jsonp('https://comment.mgtv.com/video_comment/list/',{
	        params:{
	          _support:10000000,
	          abroad:0,
	          subject_id:4168488,
	          type:"hunantv2014"
	        },
	        jsonpCallback: "jsonp_5f8tleg15syq1i7"
	      }).then((res)=>{
	          console.log(res.data.comments)
	          that.sort(res.data.comments)
	          
	      })
	  }
	}
</script>

<style lang='scss' scoped>
	#comments{
		.ft{
		    height: .44rem;
		    line-height: .44rem;
		    font-size: 14px;
		    text-align: center;
		    padding: 0 10px;

		    a{
		    	color: #fff;
			    display: block;
			    background-color: #ff5f00;
			    width: 100%;
			    margin: auto;
			    border-radius: 6px;
			    font-size: .14rem;
		    }
		}

		.cont_title{
			span{
				width: 70%;
			    overflow: hidden;
			    font-size: .12rem;
			    color: #888;
			    white-space: nowrap;
			    text-overflow: ellipsis;
			    -webkit-line-clamp: 1;
			    -webkit-box-orient: vertical;
			}
		}

		.c_box{
			background:#fff;
		}

		.c_box ul{

			margin: 0 10px;

			li{
				padding: 0 0 15px;
			    display:flex;
			    
			    top: 1px;
			}

			.avatar{
				width: .44rem;
			    height: .44rem;
			    border-radius: 18px;
			    background-size: 100%,100%;
			    margin-right: 3%;
			    float: left;

			    img{
			    	width:100%;
			    	height:100%;
			    }
			}

			.info{
			    padding-bottom: 5px;
			    float: right;
			    width: 85%;
			    border-bottom: 1px solid #eee;
			    box-sizing:border-box;

			    h5{
			    	font-size: .12rem;
				    color: #666;

				    span{
				    	margin-left: 15px;
					    font-size: 12px;
					    color: #888;
				    }
			    }

			    p{
			    	width: 98%;
				    font-size: .13rem;
				    color: #333;
				    line-height: .18rem;
				    padding: 10px 0;
			    }
			}
		}
	}
</style>