<template>
	<!-- 人气推荐 -->
	<div class="popularity">
		<div class="footer_kan">
			<p>人气推荐</p>
			<i class="el-icon-right"></i>
		</div>
		<div class="div">
			<ul style="display: flex;flex-wrap: wrap;justify-content: space-around;">
				<li v-for="item in data.goodsMap" class="larity_li">
					<img :src="item.pic" alt="">
					<div>
						
						<h5 style="font-weight: 500;font-size: 0.24rem;width: 2rem;overflow: hidden;white-space:nowrap;text-overflow: ellipsis;">{{item.name}}</h5>
						<h6 style="font-weight: 500;font-size: 0.24rem;width: 3rem;overflow: hidden;white-space:nowrap;text-overflow: ellipsis;">{{item.characteristic}}</h6>
						<p >${{item.minPrice}}</p>
					</div>
					
					
				</li>
			</ul>
			
		</div>
	</div>
</template>

<script>
	import Product from '../../services/home-service.js'
	const _product=new Product()
	export default{
		data(){
			return{
				data:[]
			}
		},
		created(){
			_product.list3().then(res=>{
				this.data=res.data.data
			})
		}
	}
</script>

<style lang="scss">
	.larity_li{
		width: 40%;
		height: 5rem;
		position: relative;
		img{
			width: 	3rem;
			height: 4rem;
		}
		p{
			font-size: 0.3rem;
			color: #d00000;
			font-family: 700;
			height: 40px;
			padding-top: 20px;
		}
		div{
			font-size: 0.3rem;
			position: absolute;
			left: 0;
			bottom: 10px;
		}
	}
	.div{
		background: #FFFFFF;
		ul{
			height: 11rem;
			overflow: hidden;
		}
	}
</style>
