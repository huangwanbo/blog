<template>
	<div class="last-article">
		<div class="title"><img src="@/assets/images/minarticle.svg">&nbsp;&nbsp;最新文章</div>
		<div class="detaile">
			<ul>
				<li class="detaile-title" v-for='title in Titles'>{{title}}</li>
			</ul>
		</div>
	</div>
</template>
<script>
	
	export default {
		name: 'lastarticle',
		data(){
			return{
				Titles:['JavaScript深入之继承的多种方式和优缺点',
					'JavaScript深入之类数组对象与arguments',
					'JavaScript深入之call和apply的模拟实现',
					'JavaScript深入之参数按值传递']

				
			}
		}}
	
</script>
<style lang="scss" scoped>
@import "~@/assets/css/mixins";
.last-article{
	width: 100%;
	@include flex-center($direction:column);
    background: #fff;
    margin:10px 0 10px 10px;
    padding-top: 10px;
    .title{
    	@include flex-center();

    }
    .detaile{
        width: 100%;
        ul{
        	padding:10px;
        }
        &-title{
        	list-style: none;
        	text-align: left;
        	margin-bottom:10px;
        	color:#999;


        }
    }
	


}

</style>