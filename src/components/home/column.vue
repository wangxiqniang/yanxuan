<template>
	<!--严选专栏 -->
	<div>
		<div class="column_header">
			<router-link to="/"><i class="el-icon-arrow-left"></i></router-link>
			<p>严选专栏</p>
		</div>
		<div style="height: 50px;"></div>
		<div v-for="item in city" class="column_action">
			<router-link :to="'/details/' + item.id" tag="div">
				<div><img :src="item.pic" alt="" /></div>
				<div class="find">
					<p style="overflow: hidden;overflow: hidden;white-space:nowrap;text-overflow: ellipsis;width: 4rem;margin-top: 20px;margin-left: 90px;">{{ item.title }}</p>
					<p style="overflow: hidden;overflow: hidden;white-space:nowrap;text-overflow: ellipsis;width: 5rem;margin-top: 20px;margin-left: 70px;">{{ item.descript }}</p>
					<router-link tag="button" to="/details">查看详情</router-link>
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
import Product from '../../services/home-service.js';
const _product = new Product();
export default {
	data() {
		return {
			city: [] //精选专题
		};
	},
	created() {
		//精选
		_product.list2().then(res => {
			this.city = res.data.data;
		});
	}
};
</script>

<style lang="scss">
.find {
	text-align: center;
	font-size: 0.29rem;
	color: white;
	margin-top: -160px;
	height: 2.8rem;
	button {
		width: 1.5555555556rem;
		height: 0.5277777778rem;
		line-height: 0.5277777778rem;
		border: 1px solid #fff;
		color: white;
		background: black;
		border-radius: 0.5277777778rem;
		font-size: 0.2291666667rem;
		opacity: 0.5;
		margin-top: 20px;
	}
}
.column_action {
	div {
		img {
			width: 7.5rem;
			height: 4rem;
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
