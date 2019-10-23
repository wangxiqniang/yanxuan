<template>
	<!-- 轮播 -->
	<div>
		<div>
			<div class="block" style="background: white;">
				 <el-carousel height="380px" >
					<el-carousel-item v-for="(item, index) in lunbo" :key="index"><img :src="item.picUrl" alt="" class="img" /></el-carousel-item>
				</el-carousel>
			</div>
		</div>
	</div>
</template>

<script>
import Product from '../../services/home-service.js'
const _product=new Product()
	export default{
		data(){
			return{
				lunbo:[]
			}
		},
		created(){
			_product.list().then(res=>{
				this.lunbo=res.data.data
			})
		}
	}
</script>

<style>
</style>
