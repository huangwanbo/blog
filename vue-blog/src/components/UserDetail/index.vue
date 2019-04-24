<template>
	<div class="user-detail">
		<div class="ava">
		<img src="@/assets/logo.png">
		</div>
		<div class="identy">
			<p class="username">{{username}}</p>
			<p class="title">{{title}}</p>
		</div>
		<div class="last-article"></div>
		<div class="archive"></div>
	</div>
</template>
<script>
	
	export default {
		name: 'userdetail',
		data(){
			return{
				username:'黄万博',
				title:'本来无一物，何处惹尘埃。',
				imgsrc:'@/assets/logo.png'
			}
		}
	}
</script>
<style lang="scss" scoped>
@import "~@/assets/css/mixins";
.user-detail{
	width: 100%;
	@include flex-center($direction:column);
    background: #fff;
    margin:10px 0 10px 10px;
    padding-top: 10px;
	.ava{
		width: 200px;
		height: 200px;
		border-radius: 50%;
		overflow: hidden;
		img{
			max-width: 100%;
		}

	}


}

</style>