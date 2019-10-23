<template>
	<div>
		<div class="column_header">
			<router-link to="/classification"><i class="el-icon-arrow-left"></i></router-link>
			<p>分类商品</p>
		</div>
		<div style="height: 50px;"></div>
		<div class="cation_action">
			<ul>
				<li v-for="item in cation">
					<div>
						<img :src="item.pic" alt="">
						
					</div>
					<div class="fied" style="height: 0.6rem;">
						<p  style="font-size: 0.24rem;width: 2.7rem;overflow: hidden;white-space:nowrap;text-overflow: ellipsis;">{{item.characteristic}}</p>
					</div>
					
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import Product from '../../services/home-service.js'
const _product =new Product()
export default {
	data() {
		return {
			cation: []
		};
	},
	created () {
	  let { id } = this.$route.query
	  _product.detail(id).then(res => {
	    console.log(res.data.data)
		this.cation=res.data.data
	  })
	}
};
</script>

<style lang="scss">
	.fied{
		width: 3rem;
		background: #f0edd4;
		color:#b69b72 ;
		position: absolute;
		left: 0px;
		bottom: 0px;
		line-height: 0.6rem;
	}
	.cation_action{
		ul{
			display: flex;
			justify-content: space-around;
			flex-wrap: wrap;
			background: white;
			li{
				width: 40%;
				height: 3rem;
				margin-top: 20px;
				position: relative;
				div{
					width: 3rem;
					height: 3rem;
					img{
						width: 100%;
						height: 100%;
					}
				}
				
			}
		}
	}
	.column_header {
		width: 7.5rem;
		height: 1rem;
		background: white;
		font-size: 0.34rem;
		display: flex;
		align-items: center;
		justify-content: space-around;
		position: fixed;
		left: 0px;
		top: 0px;
		z-index: 1000;
		p {
			width: 7rem;
			text-align: center;
		}
	}
	
</style>
