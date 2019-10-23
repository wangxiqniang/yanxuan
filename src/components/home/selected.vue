<template>
	<!-- 精选专题 -->
	<div class="selected">
		<div class="footer_kan">
			<p>精选专题</p>
			<i class="el-icon-right"></i>
		</div>
		<div class="block" style="background: white; z-index: 100;height: 300px;">
			<el-carousel height="300px"  :autoplay="false">
				<el-carousel-item v-for="(item, index) in city" :key="index">
					<ul>
						<router-link :to="'/details/' + item.id" tag="div">
							<img :src="item.pic" alt="" style="width: 400px;height: 200px;" />
							<p style="font-size: 0.26rem;">{{ item.title }}</p>
							<p style="font-size: 0.2rem; width: 6rem;overflow: hidden;white-space:nowrap;text-overflow: ellipsis;margin-top: 10px;">{{ item.descript }}</p>
						</router-link>
					</ul>
				</el-carousel-item>
			</el-carousel>
		</div>
	</div>
</template>

<script>
	import Product from '../../services/home-service.js'
	const _product=new Product()
	export default{
		data(){
			return{
				city: [] //精选专题
			}
		},
		created(){
			//精选
			_product.list2().then(res=>{
				this.city=res.data.data
			})
		}
	}
</script>

<style>
</style>
