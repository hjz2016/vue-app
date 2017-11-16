<template>
	<div id="wode">
		<div class="top">
			<div class="avatar"><img :src="hasLogin.imgsrc" alt=""></div>
			<p>{{hasLogin.nickname}}</p>
		</div>
	</div>
</template>

<script>
import {mapGetters} from 'vuex'

	export default {
		name:'wode',
		computed:{
			...mapGetters(['hasLogin'])
		}
	}
</script>

<style lang='scss' scoped>
	.top{
		padding: 17.5px 0;
		background: #fff;
		.avatar{
			width: .65rem;
			height: .65rem;
			margin: 0 auto;
			img{
				width: 100%;
				border-radius: 50%;
			}
		}

		p{
			margin-top: .1rem;
			text-align: center;
		}
	}
</style>