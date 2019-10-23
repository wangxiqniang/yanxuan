<template>
	<div>
		<Planting></Planting>
		<Classification></Classification>
		<Nation></Nation>
		<Selected></Selected>
		<Popularity></Popularity>
		<Bottom></Bottom>
	</div>
</template>

<script>
import Planting from './home/planting';
import Classification from './home/classification';
import Nation from './home/nation';
import Selected from './home/selected';
import Popularity from './home/popularity'
import Bottom from './home/bottom'
export default {
	components: {
		Planting,
		Classification,
		Nation,
		Selected,
		Popularity,
		Bottom
	}
};
</script>

<style lang="scss">
.popularity {
	height: 3rem;
	margin-top: 150px;
}
.selected {
	font-size: 0.3rem;
	height: 4rem;
}
.footer_right {
	width: 5.4rem;
	font-size: 0.28rem;
	padding-left: 0.6rem;
}
.footer_left {
	width: 2rem;
	height: 2.5rem;
	img {
		width: 2.3rem;
		height: 2.3rem;
	}
}
.footer_kan1 {
	overflow: hidden;
	ul {
		height: 8.2rem;
		li {
			height: 2.5rem;
			background: white;
			display: flex;
			justify-content: space-around;
			border-top: 1px solid #f0f0f0;
			padding-top: 10px;
		}
	}
}
.footer_kan {
	height: 1rem;
	background: white;
	margin-top: 20px;
	font-size: 0.3rem;
	display: flex;
	align-items: center;
	p {
		margin-left: 3rem;
	}
	a {
		text-decoration: none;
		color: black;
	}
}
.footer_nuv {
	height: 1.8rem;
	background: white;
	font-size: 0.3rem;
	border-radius: 20px 20px 0 0;
	ul {
		display: flex;
		justify-content: space-around;
		align-items: center;
		text-align: center;
		li {
			height: 1rem;
			img {
				margin-top: 10px;
				width: 2em;
				height: 0.8rem;
			}
			p {
				font-size: 0.26rem;
				height: 0.6rem;
			}
		}
	}
}
.img {
	width: 100%;
	height: 350px;
}
.footer_list {
	width: 100%;
	height: 50px;
	position: fixed;
	z-index: 100;
	left: 0;
	bottom: 0px;
	font-size: 0.3rem;
	border-top: 1px solid #f0f0f0;
	padding-top: 10px;
	background: white;
	ul {
		display: flex;
		justify-content: space-around;
		align-items: center;
		li {
			width: 25%;
			height: 60px;
			text-align: center;
			p {
				font-size: 0.2rem;
			}
		}
	}
}
</style>
