<template>
	<div class="hello">
		<Footer></Footer>
	</div>
</template>

<script>
import Footer from './footer.vue';
export default {
	name: 'HelloWorld',
	data() {
		return {
			msg: 'Welcome to Your Vue.js App'
		};
	},
	components: {
		Footer
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
