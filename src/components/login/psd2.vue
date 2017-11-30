<template>
  <div id="app">
  		<div class="header">
				<span id="span" ><router-link to="/psd1">＜返回</router-link></span>
				<p>找回密码</p>
			</div>
			<div class="main">
				<p style="font-size: 20px;">短信验证码已经发送，请输入验证码</p>
				<input type="phone" placeholder="验证码" />
				<router-link to="/psd3"><button id="btn">下一步</button></router-link>
				<p style="color:  #ca3232; font-size: 15px;margin-top: 20px;">28’后重新发送</p>
			</div>
  </div>
</template>

<script>




export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
//    show:true
    }
  }
 

}
</script>

<style scoped="scoped">
		.header{
			width:100%;
			height:40px;
			background: #ca3232;
			text-align: center;
			position: relative;
		}
		.header p{
			color: white;
			line-height: 40px;
			font-size: 20px;
		}
		#span{
			position: absolute;
			top: 10px;
			left: 3%;
			
		}
		#span a{
			color: white;
		}
		.main{
			width:100%;
			text-align: center;
		/*	height:50px;*/
		}
		.main p{
		
			font-size: 22px;
			margin-top: 80px;
		}
		.main input{
			width:85%;
			height: 40px;
			outline: none;
			border: none;
			border-bottom: 1px solid #dddddd;
			text-align: center;
			margin-top: 25px;
		}
		.main #btn{
			width:80%;
			height:45px;
			background: #ca3232;
			border: none;
			outline: none;
			border-radius: 7px;
			margin-top: 60px;
			color: white;
			font-size: 18px;
			font-weight: 100;
		}
		.main {
			
		}
		
</style>
