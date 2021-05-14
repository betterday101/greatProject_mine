<!--
 * @Description: 
 * @Author: chenzel
 * @Date: 2021-05-13 20:20:31
 * @LastEditTime: 2021-05-14 14:59:00
 * @LastEditors: chenzel
-->
<template>
	<div>
		<el-form class="login-form" :rules="rules">
         <el-form-item label="用户名：" prop="mobile">
					    <span><i class="el-icon-mobile"></i></span>
             <el-input placeholder="用户名："></el-input>
				 </el-form-item>
				  <el-form-item label="密码：">
					  <span><i class="el-icon-lock"></i></span>
             <el-input placeholder="密码"></el-input>
				 </el-form-item>
				 <el-form-item label="验证码">
             <el-input placeholder="验证码"></el-input>
						 <img :src="captchaUrl" @click="updateCaptcha" alt="">
				 </el-form-item>
		</el-form>
	</div>
</template>
<script>
export default {
	  layout:'login',
		data(){
			return {
				rules:{},
				captchaUrl:'/api/captcha?_t='+new Date().getTime(),
			}
		},
		methods: {
			updateCaptcha(){
				this.captchaUrl='/api/captcha?_t='+new Date().getTime()
			}
		},
}
</script>
<style lang="stylus">
 .login-form
	 width 800px
	 margin 50px auto
</style>