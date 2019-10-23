<template>
	<!-- 分类 -->
	<div class="footer_nuv">
		<ul>
			<li>
				<img src="../../assets/png1.png" alt="" />
				<router-link tag="p" to="/sgin">签到</router-link>
			</li>
			<li>
				<img src="../../assets/png2.png" alt="" />
				<p>礼券</p>
			</li>
			<li>
				<img src="../../assets/png3.png" alt="" />
				<router-link to="/bargain" tag="p">砍价</router-link>
			</li>
			<li>
				<img src="../../assets/png4.png" alt="" />
				<router-link tag="p" to="/column">专栏</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		}
	}
</script>

<style>
</style>
