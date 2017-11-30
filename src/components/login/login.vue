<template>
  <div id="app">
  	
    <div class="main">
    	
			<button id="btn">微信一键登录</button>
			<router-link to="/denglu"><button id="btn1">登录</button></router-link>
			
			<router-link to="/register"><button id="btn2">新用户</button></router-link>
			
		</div>

		
		
  </div>
</template>

<script>
export default {
	
	
	
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
 
}
</script>

<style scoped="scoped">
		.main{
			width: 100%;
			height: 100vh;
			background-image:url(../../assets/img/body.jpg);
			background-repeat: no-repeat;
			background-size:100% 100%;
			text-align: center;
		}
		

		
		#btn{
			position: fixed;
			bottom: 20%;
			left: 5%;
			width: 90%;
			height: 45px;
			background: #00a80c;
			border: 0;
			color: white;
			font-size: 19px;
			border-radius: 7px;
			
		}
		#btn1{
			position: fixed;
			bottom: 10%;
			left: 5%;
			width: 40%;
			height: 45px;
			border: 0;
			border-radius:7px;
			color: #ca3232;
			
		}
		#btn2{
			position: fixed;
			bottom: 10%;
			right: 5%;
			width: 40%;
			height: 45px;
			border: 0;
			border-radius:7px;
			color: white;
			border: 1px solid white;
			background:none ;
			
		}
		
</style>