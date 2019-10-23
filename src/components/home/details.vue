<template>
	<!-- 专栏详情 -->
	<div>
		<div class="column_header">
			<router-link to="/column"><i class="el-icon-arrow-left"></i></router-link>
			<p>专栏详情</p>
		</div>
		<div style="height: 50px;"></div>
		<div class="details_div">
			<div>小四</div>
			<ul>
				<li >
					<p>{{list.title}}</p>
					<hr style="width: 2rem;height: 1px;margin-top: 20px;margin-left:140px;background: #bb9161;">
					<img :src="list.pic" alt="">
					<div v-html="list.content" style="margin: 0;padding: 0;" class="html"></div>
				</li>
			</ul>
			<div>
				5455
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
				list:[]
			}
		},
		created(){
			let id=this.$route.params.id
			
			_product.list4(id).then(res=>{
				console.log(res.data.data)
				this.list=res.data.data
			})
		}
	}
</script>

<style lang="scss">
	.html{
		p{
			img{
				width: 0.2rem;
				height: 0.2rem;
			}
		}
	}
	.details_div{
		font-size: 0.3rem;
		text-align: center;
		div{
			width: 100%;
			font-size: 0.3rem;
			line-height: 2rem;
			background: white;
		}
		ul{
			li{
				img{
					width: 7.5rem;
					height: 4rem;
					margin-top: 20px;
				}
				div{
					p{
						height: 1.6rem;
					}
				}
			}
		}
	}
	.column_header {
		width: 100%;
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
