<template>
	<!-- 签到 -->
	<div>
		<div class="position">
			<router-link to="/"><i class="el-icon-arrow-left"></i></router-link>
			</div>
		<div class="sing_div">
			<p style="color: #999;">你的可用积分</p>
			<p style="color: #b3a078; font-weight: 700;line-height: 100px;font-size: 0.35rem;">999</p>
		</div>
		<div class="sing_nav"></div>
		<div class="sing_qian">
			<input type="button" value="签到" />
			<ul>
				<li>
					<div class="sing_left"><img src="../../assets/wei1.png" alt="" /></div>
					<div class="sing_right">
						<p style="height: 30px;margin-top: 20px;">消费购物</p>
						<p>购物完成，确认收货后立返积分</p>
					</div>
					<div class="sing_sing"><router-link tag="button" to="/">去购物</router-link></div>
				</li>
				<li style="background: #ede6d6;">
					<div class="sing_left1"><img src="../../assets/wei2.png" alt="" /></div>
					<div class="sing_right1">
						<p style="height: 30px;margin-top: 20px;">积分兑换</p>
						<p>积分兑好礼，20积分即可兑换礼券</p>
					</div>
					<div class="sing_sing1"><button>去兑换</button></div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	
};
</script>

<style lang="scss">
.position {
	width: 0.7rem;
	height: 0.7rem;
	border-radius: 50%;
	border: 1px solid #fff;
	position: fixed;
	left: 20px;
	top: 20px;
	line-height: 0.1rem;
	text-align: center;
	i {
		height: 0.5rem;
		width: 0.5rem;
		border-radius: 50%;
		background: white;
		text-align: center;
		font-size: 0.3rem;
		line-height: 0.5rem;
	}
}
.sing_sing1 {
	button {
		margin-left: 46px;
		border: none;
		width: 1rem;
		height: 0.45rem;
		font-size: 0.2430555556rem;
		color: #fff;
		border-radius: 0.0694444444rem;
		background: #b3a078;
	}
}
.sing_right1 {
	font-size: 0.2rem;
	padding-left: 10px;
}
.sing_left1 {
	img {
		margin-top: 10px;
	}
}
.sing_sing {
	button {
		margin-left: 60px;
		border: none;
		width: 1rem;
		height: 0.45rem;
		font-size: 0.2430555556rem;
		color: #fff;
		border-radius: 0.0694444444rem;
		background: #e1b68c;
	}
}
.sing_left {
	img {
		margin-top: 10px;
	}
}
.sing_right {
	font-size: 0.2rem;
	padding-left: 10px;
}
.sing_qian {
	height: 8rem;
	background: white;
	input {
		margin-left: 113px;
		background: #b3a078;
		border: none;
		width: 3.1597222222rem;
		height: 0.6944444444rem;
		border-radius: 0.6944444444rem;
		font-size: 0.2916666667rem;
		color: #fff;
	}
	ul {
		margin-top: 30px;
		li {
			height: 1.5rem;
			width: 7rem;
			background: #f4ebe2;
			margin-left: 10px;
			border-radius: 5px;
			display: flex;
			color: #e1b68c;
			margin-top: 20px;
		}
	}
}
.sing_nav {
	height: 1.5rem;
	background: #e8e1cf;
}
.sing_div {
	height: 2.6rem;
	background: -webkit-gradient(linear,left top,right top,from(#f1ead8),to(#fefbf2));
	font-size: 0.3rem;
	text-align: center;
	padding-top: 60px;
}
</style>
