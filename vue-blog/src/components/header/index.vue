<template>
	<div class="mine-navbar">
		<div class="mine-navbar-left" v-if="$slots.left">
			<slot name="left"></slot>
		</div>
		<div class="mine-navbar-center" v-if="$slots.center">
			<slot name="center"></slot>
		</div>
		<div class="mine-navbar-right" v-if="$slots.right">
			<slot name="right"></slot>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'MeNavbar',
		data(){
			return{}
		}
	};
</script>
<style lang="scss" scoped>
  @import "~@/assets/css/mixins";

  .mine-navbar {
  	position: relative;
  	@include flex-between();
  	width: 100%;
  	height: 100px;
  	background-color: #fff;
  	border-bottom: 1px solid #444;

  	&-left {
  		margin-left: 50px;

  	}

  	&-center {
  		flex:1;
  		margin:0 30px;
  	}

  	&-right {
  		position: absolute;
  		right: 0;
  		@include flex-center();
  		height: 100%;
  		margin-right: 50px;
  	}
  }

</style>