<template>
	<me-navbar class="header">
      <div class="header-left" slot="left"><img src="@/assets/images/paper-plane.svg"><p>H的BLOG</p></div>

      <div class="header-center" slot="center">
      	<ul>
      		<li><img src="@/assets/images/shouye.svg">首页</li>
      		<li><img src="@/assets/images/bigarticle.svg">文章</li>
      		<li><img src="@/assets/images/guidang.svg">归档</li>
      	</ul>
      </div>

      <div class="header-right" slot='right'>
      	<div v-if="isAuth" class="header-right-false">
      		<div class="login btnbase">登陆</div>
      		<div class="register btnbase">注册</div>
      	</div>
      	<div v-else class="header-right-true">
      		<div class="ava"><img src="@/assets/images/wode.svg"></div></div>
      		
      	</div>

      </div>

		
	</me-navbar>
</template>
<script>
	import MeNavbar from '@/components/header'
	export default {
		name: 'Header',
		components: {
			menavbar:MeNavbar,
		},
		data(){
			return{
				isAuth:true,
			}
		}
	}
</script>
<style lang="scss" scoped>
 @import "~@/assets/css/mixins";
 @import "~@/assets/css/base";
 ul{
 	padding:0;
 	margin: 0;
 }
 li{
 	list-style: none;
 }
 .header{
 	width: 100%;
 	height: 60px;
      @include flex-between();
     /* border-bottom: 1px solid #444;*/
     box-shadow: 0 2px 8px  #f0f1f2;
 	&-left{
 		width: 150px;
 		@include flex-between();
 		margin-left: 50px;
 	}
 	&-center{ 
 		margin-left: 50px;
 		ul{
 		height: 100%;
 		font-size: 26px;
 		font-weight: bold;
 		@include flex-center();
 		li{
 			margin-left: 40px;
 			height: 100%;
 			display: flex;
 			align-items: center;
 			cursor: pointer;
 		}
 	}
 }
    &-right{
    	margin-right: 100px;
    	&-false{
    		@include flex-center();
    	}
    	&-true{
           flex: right;
           margin-right: 0px;
           .ava{
           	width: 50px;
           	height: 50px;
           	border-radius: 50%;
           	border: 1px solid #eee;
           	overflow: hidden;
           	@include flex-center();
           	cursor: pointer;

           }
    	}
    	
    }

 }
 .btnbase{
      width: 100px;
      height: 30px;
      border-radius: $borderadiu;
      border: 1px solid #444;
      margin: 0 10px;
      	cursor: pointer;
 }
 .login{
 	border: 1px solid $l-blue;
 	color:$l-blue;
 }
 .register{
 
 	border: 1px solid $g-yellow;
 	color:$g-yellow;

 }

</style>