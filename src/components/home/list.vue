<template>
	<div></div>
</template>

<script>
import Product from '../../services/home-service.js';
const _product = new Product();
export default {
	data() {
		return {
			classification: [] //砍价
		};
	},
	created() {
		//砍价
		let id = this.$route.params.id;
		_product.list5(id).then(res => {
			this.classification = res.data.data;
			console.log(res.data);
		});
	}
};
</script>

<style></style>
