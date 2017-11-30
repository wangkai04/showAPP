<template>
	<div id="app">
		<div class="header">
			<router-link to="/login"><p style="position:fixed; font-size: 18px;margin-left: 0.266666rem;margin-top: 20px;color: white;">＜返回</p></router-link>
			<img src="../../assets/img/header2.jpg" alt="" />
		</div>
		<div class="main">
			<ul>
				<li>
					<router-link to="/denglu">登录</router-link>
				</li>
				<li id="li">
					<div id="s"></div>
					<router-link to="/register">注册</router-link>
				</li>
			</ul>
		</div>
		<div class="footer">
			<p><input type="text" id="iphone" placeholder="请输入您的手机号" v-model="phone"/></p>
			<p><input type="text" id="yzm" placeholder="请输入验证码" /></p>
			<p><input type="password" id="psd" placeholder="请输入密码" v-model="password"/></p>
			<p><input type="password" id="yqm" placeholder="确认密码" /></p>
			<button @click="register">注    册</button>
			
		</div>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
//				phone:"phone"
//				psaaword:"password"
			}
		},
		methods:{
			register(){
				var url = "http://114.55.249.153:8028/login/register"
				this.$http.post(url).then((res)=>{
				console.log(this.res)
				})
			}
		}
			
		

	}
</script>

<style scoped="scoped">
			li{
				list-style: none;
			}
			.header{
				width: 100%;
			}
			.header img{
				width: 100%;
			}
			.main{
				margin-top: -7px;
				width: 100%;
				height:50px;
				background: #f3f3f3;
				
			}
			li{
				float: left;
				width: 50%;
				line-height: 50px;
				text-align: center;
				color: #777777;
			}
			li:link:active{
				color: #777777;
				
			}
			#s{
				width: 0px;
				height: 0px;
				border-left:6px solid transparent;
				border-right:6px solid transparent;
				border-bottom: 11px solid white;
				position: absolute;
				left: 47%;
				bottom: 0%;
			}
			#li{
				position: relative;
			}
			
			
			
			
			
			
			
			.main a{
				color: #777777;
			}
			.footer{
				width: 100%;
				text-align: center;
			}
			#iphone{
				width: 82%;
				height: 65px;
				outline: none;
				border: none;
				border-bottom: 1px solid #dddddd;
				text-align: center;
				color: #bababa;
				background-image: url(../../assets/img/phone.jpg);
				background-repeat: no-repeat;
				background-size: 38px;
				/*font-size: 22px;*/
				margin-top: 20px;
			}
			#yzm{
				width: 82%;
				height: 65px;
				outline: none;
				border: none;
				border-bottom: 1px solid #dddddd;
				text-align: center;
				color: #bababa;
				background-image:url(../../assets/img/yzm.jpg);
				background-repeat: no-repeat;
				background-size: 38px;
			}
			#psd{
				width: 82%;
				height: 65px;
				outline: none;
				border: none;
				border-bottom: 1px solid #dddddd;
				text-align: center;
				color: #bababa;
				background-image:url(../../assets/img/psd2.jpg);
				background-repeat: no-repeat;
				background-size: 38px;
			}
			#yqm{
				width: 82%;
				height: 65px;
				outline: none;
				border: none;
				border-bottom: 1px solid #dddddd;
				text-align: center;
				color: #bababa;
				background-image:url(../../assets/img/yqm.jpg);
				background-repeat: no-repeat;
				background-size: 38px;
			}
			
			
			button{
				width: 80%;
				height: 50px;
				background: #cb3332;
				border: 0;
				border-radius: 5px;
				color: white;
				font-size: 20px;
				margin-top: 25px;
				}
</style>