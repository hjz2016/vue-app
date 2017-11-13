<template>
	<div id="download">
		<a href="#">离线观看</a>
	</div>
</template>

<script>
	export default {
		name: 'download',
		data () {
		    return {
		      msg: '离线观看'
		    }
	    }
	}
</script>

<style lang='scss' scoped>
	#download{
		a{


		position: fixed;
	    top: auto;
	    bottom: 0;
	    left: 50%;
	    z-index: 120;
	    font-weight: 500;
	    text-align: center;
	    -webkit-transform: translate(-50%,200%);
	    transform: translate(-50%,200%);
	    box-shadow: 0 2px 5px rgba(0,0,0,.25);
	   
	    width: 1.03rem;
	    height: .375rem;
	    line-height: .375rem;
	    font-size: .14rem;
	    background: #ff5f00;
	    color: #fff;
	    border-radius: 16px;
	    transform: translate(-50%,-25px);
	    }
	}
</style>