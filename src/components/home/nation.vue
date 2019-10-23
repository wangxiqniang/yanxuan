<template>
	<div>
		<!-- 全民砍价 -->
		<div class="footer_kan">
			<p>全民砍价</p>
			<router-link tag="a" to="/bargain">→</router-link>
		</div>
		<div class="footer_kan1">
			<ul>
				<router-link v-for="item in classification.goodsMap" tag="li" :to="'/list/'+item.id" >
					<div class="footer_left"><img :src="item.pic" alt="" /></div>
					<div class="footer_right">
						<p>{{ item.name }}</p>
						<p style="font-size: 0.2rem; color: gainsboro;margin-top: 10px; height: 1.2rem;height: 1rem;">{{ item.characteristic }}</p>
						<div style="display: flex;justify-content: space-between;align-items: center;color: #ccc;width: 4rem;">
							<div>
								<p style="color: red;">{{ item.minPrice }}</p>
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
				</router-link>
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

<style></style>
