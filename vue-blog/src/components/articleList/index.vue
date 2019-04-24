<template>
	<div class="articleList-main">
		<div class="articleList-main-header"><span class="title">{{data.title}}</span><span class="createTime">{{data.time}}</span></div>
		<div class="articleList-main-content">
			
			<p class="articleList-main-content-detail">
				{{data.content}}
			</p>
		</div>
		<div class="articleList-main-footer">
			<span><img src="@/assets/images/回答.svg">&nbsp;&nbsp;{{data.replay}}</span>
			<span><img src="@/assets/images/标签.svg">&nbsp;&nbsp;<a :class="tagClass[index]" v-for="(item,index) in data.tag" :key="index">{{item}}</a></span>
			<span><img src="@/assets/images/分类.svg">&nbsp;&nbsp;<a class="danred">{{data.cate}}</a></span>
		</div>
	</div>
</template>
<script>
	
	export default {
		name: 'articleList',
		props:{
			data:{
				type:[Array,Object]
			}
		},

		data(){
			return{
				tagClass:['danyellow','danred','danblue','danpurple','dangreen']
				
			}
		},
		created(){
			
		}
	 }
	
</script>
<style lang="scss" scoped>
@import "~@/assets/css/mixins";
@import "~@/assets/css/tag";
.articleList-main{
	    border: 1px solid #ebedf0;
	    padding:20px 10px;
	    margin-bottom: 20px;
	    transition: box-shaow .5s linear;
	    &-header{

	    	position: relative;
	    	text-align: left;
	    	border-bottom: 1px solid #ebedf0;
	    	/*span:nth-Child(1):before{
	    		content: ' ';
	    		display: inline-block;
	    		width: 15%;
	    		border-bottom: 1px solid #ebedf0;
	    		position: absolute;
	    		top: 10px;
	    		left: 20px;
	    	}
	    	span:nth-Child(2):before{
	    		content: ' ';
	    		display: inline-block;
	    		width: 55%;
	    		border-bottom: 1px solid #ebedf0;
	    		position: absolute;
	    		top: 10px;
	    		right: 20px;
	    	}*/
	    	.title{
	    		font-weight: bold;
	    		margin-left: 20%;
	    		font-size: 22px;

	    	}
	    	.createTime{
	    		font-size: 12px;
	    		margin-left: 20px;
	    	}
	    }
	    &-content{
	    	&-detail{
                 text-align: left;
                 margin-left: 50px;
                 color:#444;
	    	}
	    }
	    &-footer{
	    	text-align: left;
	    	margin-left: 30px;
	    	width: 100%;
	    	span{
	    		height: 26px;
	    		padding-right: 20px; 
	    		padding-left: 15px;   	
	    		display:inline-flex;
	    		align-items: center;
	    		a{
	    			margin-left: 5px;
	    		}
	    		
	    		    		
	    	}
	    	span:not(:last-child){
                 border-right: 1px solid #999;	
	    	}
	    	
	    }
}
.articleList-main:hover{
    box-shadow: 5px 5px 10px #ebedf0;
}

</style>