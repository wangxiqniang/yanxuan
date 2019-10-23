<template>
	<!-- 砍价 -->
	<div>
		<div class="bargain_div">
			<router-link to="/"><i class="el-icon-arrow-left"></i></router-link>
			<p >全民砍价</p>
		</div>
		<div class="bargain_nav">
			<ul>
				<li v-for="(item ,index) in classification.goodsMap" :key="index">
					<div class="bargain_left">
						<img :src="item.pic" alt="">
					</div>
					<div class="bargain_right">
						<p style="margin-top: 20px;">{{item.name}}</p>
						<p style="font-size: 0.2rem; color: gainsboro;margin-top: 20px;">{{item.characteristic}}</p>
						<div style="display: flex;justify-content: space-around;align-items: center;color: #ccc;margin-top: 20px;">
							<div>
								<p style="color: red;">{{ item.minPrice }}.00</p>
								<p>低价</p>
							</div>
							<div>
								<p>{{ item.originalPrice }}</p>
								<p>原价</p>
							</div>
							<div>
								<p>{{ item.stores }}</p>
								<p>限量</p>
							</div>
						</div>
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
				classification: []       //砍价
			}
		},
		created(){
			//砍价
			_product.list1().then(res=>{
				this.classification = res.data.data;
			})
		}
	}
</script>

<style lang="scss">
	.bargain_right{
		width: 4.5rem;
		font-size: 0.26rem;
	}
	.bargain_left{
		width: 2.5rem;
		background: #F0F0F0;
		height: 2.5rem;
		border-radius: 10px;
		overflow: hidden;
		
		img{
			width: 100%;
			height: 100%;
		}
	}
	.bargain_nav{
		ul {
			
			li {
				height: 3rem;
				background: white;
				display: flex;
				justify-content: space-around;
				border-top: 1px solid #f0f0f0;
				padding-top: 10px;
			}
		}
	}
	.bargain_div{
		width: 100%;
		height: 0.9rem;
		font-size: 0.5rem;
		display: flex;
		align-items: center; 	
		justify-content: space-around;
		background: white;
		p{
			width: 7rem;
			text-align: center;
			font-size: 0.3rem;
		}
	}
</style>
