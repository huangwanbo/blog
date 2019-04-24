<template>
	<div class="container">
		
		<div class="login">
			<div class="ava"></div>
			<div class="username">
				<img src="@/assets/images/wode.svg">
				<input type="text" name="username" placeholder="USERNAME" ref="username" v-model="username">
			</div>
			<div class="password">
				<img src="@/assets/images/mima.svg">
				<input type="password" name="password" placeholder="PASSWORD" ref="password" v-model='password'>
			</div>
			<div>
			<div class="btn-login"></div>
			<div class="btn-register"></div>
			</div>
		</div>
	</div>
</template>
<script>
export default{
	data(){
		return{
           username:'',
           password:''
		}
	},
	methods:{

	},
	watch:{
		username:(newvalue,oldvalue)=>{
			console.log(newvalue,oldvalue)
		}
	}
}
</script>
<style lang="scss" scoped>
@import '~@/assets/css/mixins';
@import '~@/assets/css/base';
.container{
	width: 1920px;
	height: 1080px;
	background: url('./bg.jpg') center;
	@include flex-center;

}
.login{
	width: 400px;
	height: 400px;
	background: rgba(0,0,0,.3);
	border-radius: 6px;
	transform: translateY(-100px);
	@include flex-center(column);
	color:#fff;
}
.ava{
	width: 100px;
	height: 100px;
	border-radius: 50%;
	margin-top: 10px;
	background: rgba(0,0,0,.7);
}
.username{
	position: relative;
	@include flex-center;
	img{
		position:absolute;
		left:16px;
		top:32px;
	}
}
.password{
	position: relative;
	@include flex-center;
	img{
		position:absolute;
		left:16px;
		top:32px;
	}
}
input{
	width: 250px;
	height: 50px;
	background:transparent;
	margin-top: 20px;
	text-align: center;
	color:$orang-red;
	font-size: 18px;
	border:1px solid $orang-red;
}
	
</style>