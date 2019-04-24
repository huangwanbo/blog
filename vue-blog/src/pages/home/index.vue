<template>
	<div>
		<myheader></myheader>
		<div class="main-container">
			<div class="main-container-user">
				<userdatile></userdatile>
				<lastarticle></lastarticle>
			</div>
			<div class="main-container-article">
                 <articleList v-for="(item,index) in articleList" :data="item" :key='index'></articleList>
			</div>
		</div>
	</div>
</template>
<script>
	import MyHeader from './header';
	import UserDatile from '@/components/UserDetail'
	import LastArticle from '@/components/LastArticle'
	import ArticleList from '@/components/articleList'
	import {articleList} from './config'
	export default {
		name: 'login',
		components: {
			myheader:MyHeader,
			userdatile:UserDatile,
			lastarticle:LastArticle,
			articleList:ArticleList
		},
		data(){
			return{
               articleList:[]
			}
		},
		created(){
            this.articleList=articleList
			
		}

	}
</script>
<style lang="scss" scoped>
.main-container{
	width: 90%;
	height: auto;
	margin:10px auto;
	background: #e7e7e7;
	display: flex;
	flex-direction: row;
	&-user{
       flex: 0.25;
       margin-right:20px;
     
     
	}
	&-article{
       flex: 0.6;
       margin: 10px 20px;
       padding: 20px;
       background:#fff;
	}

}

</style>