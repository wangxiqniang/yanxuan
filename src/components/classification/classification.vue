<template>
	<!-- 分类 -->
	<div>
		<div style="background: white;">
			<div class="city_header"><input type="text" placeholder="搜索商品" /></div>
			<div class="city_nav">
				<div class="city_left">
					<ul>
						<li @click="whole">全部商品</li>
						<li v-for="item in foote" v-show="item.level == 1" @click="dis(item)">{{ item.name }}</li>
					</ul>
				</div>
				<div class="city_right">
					<div class="block">
						<el-carousel height="150px" style="border-radius: 10px;margin-left: 20px;">
							<el-carousel-item v-for="item in 2">
								<img src="../../assets/img1.jpg" alt="" style="width: 100%;height: 100%;" />
								<img src="../../assets/img2.png" alt="" style="width: 100%;height: 100%;" />
							</el-carousel-item>
						</el-carousel>
					</div>
					<div>
						<ul class="ation_ul">
							<router-link v-for="item in foote" v-show="!seen" tag="li" :to="{ path: '/cation', query: { id: item.id } }">
								<img :src="item.icon" alt="" />
								<p style="font-size:0.24rem;">{{ item.name }}</p>
							</router-link>
							<router-link v-for="item in shpp" v-show="seen"  tag="li" :to="{ path: '/cation', query: { id: item.id } }">
								<img :src="item.icon" alt="" />
								<p style="font-size:0.24rem;">{{ item.name }}</p>
							</router-link>
						</ul>
					</div>
				</div>
			</div>
			<Bottom></Bottom>
		</div>
	</div>
</template>

<script>
import Bottom from '../home/bottom';
export default {
	components: {
		Bottom
	},
	data() {
		return {
			foote: [],
			seen: false,
			shpp: []
		};
	},
	created() {
		this.axios.get('https://api.it120.cc/small4/shop/goods/category/all').then(res => {
			this.foote = res.data.data;
		});
	},
	methods: {
		dis(v) {
			this.shpp = this.foote.filter(function(item, i) {
				return item.pid == v.id;
			});
			this.seen = true;
		},
		whole() {
			this.seen = false;
		}
	}
};
</script>

<style lang="scss">
.city_left > ul > li:hover {
	color: red;
	border-left: 2px solid red;
}
.ation_ul {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	margin-top: 20px;
	li {
		width: 33%;
		height: 2rem;
		text-align: center;
		img {
			width: 1.2rem;
			height: 1.2rem;
			margin: 0 auto;
		}
	}
}
.city_left {
	width: 2rem;
	height: 100%;
	text-align: center;
	ul {
		li {
			height: 0.9rem;
			line-height: 0.9rem;
		}
	}
}
.city_right {
	width: 5.2rem;
	border-left: 1px solid;
}
.city_nav {
	display: flex;
	font-size: 0.3rem;
}
.city_header {
	height: 0.9rem;
	width: 100%;
	background: white;
	display: flex;
	align-items: center;

	input {
		width: 5rem;
		height: 0.5rem;
		border-radius: 10px;
		border: 1px solid #ccc;
		margin-left: 20px;
	}
}
</style>
