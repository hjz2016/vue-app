<template>
	<div id="login">
		<div class="l_tabs">
			<span @click='chgTabs' class="active">账号登录</span>
			<span @click='chgTabs'>手机短信登录</span>
		</div>
		<div class="pic">
		  <span>
		  	<img src="https://img.mgtv.com/imgotv-mobile-gray/static/images/login.47f0464.png" alt="">
		  </span>
		</div>
		<div class="mainbox">
			<ul v-if='type'>
				<li class="needsclick">
					<div><i class="el-icon-edit-outline"></i></div>
					<div><input type="text" ref='ipt' placeholder="请输入账号"></div>
				</li>
				<li class="needsclick">
					<div><i class="el-icon-goods"></i></div>
					<div><input type="text" ref='ipt2' placeholder="密码  6-16位字母、数字或者符号"></div>
				</li>
			</ul>
			<ul v-else>
				<li>
					<div><i class="el-icon-phone"></i></div>
					<div><input type="text" ref='ipt' placeholder="请输入手机号"></div>
				</li>
				<li>
					<div><i class="el-icon-circle-check-outline
"></i></div>
					<div><input type="text" ref='ipt2' placeholder="请输入校验码"></div>
					<div class="code"><a href="#">获取校验码</a></div>
				</li>
			</ul>

			<a @click.prevent='login' href="#" class="loginbtn">登录</a>

			<div class="nav">
				<div class="link"><router-link to="/regi">注册账号</router-link>|</div>
				<div class="link"><router-link to="/">返回首页</router-link></div>
			</div>
		</div>

		<div class="login_link">
			<h2>第三方登录</h2>
			<ul>
				<li><a href="#"><i class="iconfont icon-weibo"></i></a></li>
				<li><a href="#"><i class="iconfont icon-qq"></i></a></li>
			</ul>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
	export default {
		name:'login',
		data(){
			return{
				type:true
			}
		},
		methods:{
			chgTabs(e){
				$(e.target).addClass('active')
				.siblings('span').removeClass('active')

				this.type = !this.type
			},
			login(){
				var that = this;
				axios.get('/lo/login',{
					params:{
						usn:this.$refs.ipt.value,
						pwd:this.$refs.ipt2.value
					}
				})
				.then((res)=>{
					switch(res.data){
						case 'failed':
							alert('登陆失败')
							break;
						default:
							alert('登录成功')
							localStorage['userInfo'] = JSON.stringify(res.data)
							that.$router.push('/wode')
					}
				}).catch((err)=>{
					console.log(err)
				})
			}
		},
		mounted(){
			
		}
	}
</script>

<style lang='scss' scoped>
	#login{
		background: #f5f5f5;
		height: 100%;
	}

	.login_link{
	    margin-top: .5rem;
	    text-align: center;
	    color: #333;

	    h2{

    font-size: 100%;
    font-weight: 400;
	    }

	    ul{
	    	margin-top: 20px;

	    	li{
				
			    width: .45rem;
			    height: .45rem;
			    line-height: .45rem;
			    display: inline-block;
			    margin: 0 .15rem;
			    border-radius: 50%;

			    &:first-child{
				    background: #e04e69;
			    }

			    &:last-child{
				    background: #4cafea;
			    }
	    	}

	    	i{
	    		font-size: .25rem;
	    		color: #fff;
	    	}
	    }
	}

	.mainbox{
		padding: 0 10px;

		.nav{
			margin-top: 20px;
			text-align: center;
		    color: #bbb;

		    .link{
		    	display: inline-block;

		    	a{
		    		    color: #ff5f00;
		    		    font-size: 13px;
		    		    padding-right: 5px;
		    	}
		    }
		}
		
		.loginbtn{
			background: #ff5f00;
		    margin-top: .15rem;
		    display: block;
		    margin-left: auto;
		    margin-right: auto;
		    height: .43rem;
		    line-height: .43rem;
		    border-radius: 6px;
		    color: #fff;
		    font-size: .16rem;
		    text-align: center;
		}

		li{
			background: #fff;
			display: flex;
			height: .45rem;
			line-height: .45rem;
			margin-bottom: 1px;

			&:first-child{
				border-radius:5px 5px 0 0 ;
			}

			&:last-child{
				border-radius: 0 0 5px 5px;
			}

			&>div:first-child{
				width:44px;
				text-align: center;
			}

			&>div:nth-child(2){
				flex: 1.5;

				input{
					display: block;
					height: 100%;
					width: 100%;
					color: #666;
				}
			}

			.code{

			    width: 25%;
			    height: 100%;
			    background: #ddd;
			    color: #888;
			    text-align: center;

			    a{
			    	color: #999;
			    }
			}
		}
	}

	.pic{
		padding: 35px 0;
		span{
			width: 135px;
			margin: 0 auto;
			display: block;
		}

		img{
			width: 100%;
			display: block;
		}
	}

	.l_tabs{
		display: flex;
		span{
			display: inline-block;
			box-sizing:border-box;
			width: 50%;
			height: 53px;
			text-align: center;
			line-height: 53px;
			color: #666;
			font-size: .13rem;
			border-bottom: 1px solid #ddd;

			&.active{
				color: #ff5f00;
			    border-bottom: 2px solid #ff5f00;
			}
		}
	}
</style>