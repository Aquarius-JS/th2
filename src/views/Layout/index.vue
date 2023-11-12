<script setup>
	import { ref, onMounted } from "vue";
	import { useRouter, useRoute } from "vue-router";
	const router = useRouter();
	const route = useRoute();
	onMounted(() => {
		console.log(route.path, 11);
	});
</script>

<template>
	<div class="layout">
		<div class="header">
			<div class="left">经典软件体系结构教学软件</div>
			<div class="right">
				<el-menu
					:default-active="route.path"
					router
					class="el-menu-demo"
					mode="horizontal"
					@select="handleSelect"
				>
					<el-menu-item index="/">文件操作</el-menu-item>
					<el-menu-item index="/dataflow"> 数据流风格 </el-menu-item>
					<el-menu-item index="/call"> 调用/返回风格 </el-menu-item>
					<el-menu-item index="/oop"> 面向对象风格 </el-menu-item>
					<el-menu-item index="/component"> 独立部件风格 </el-menu-item>
					<el-menu-item index="/vm"> 虚拟机风格 </el-menu-item>
					<el-menu-item index="/datashare"> 数据共享风格 </el-menu-item>
				</el-menu>
			</div>
		</div>
		<div class="body">
			<router-view></router-view>
		</div>
		<div class="fool"></div>
	</div>
</template>

<style scoped lang="scss">
	.layout {
		.header {
			width: 100vw;
			height: 70px;
			padding: 0 100px;
			box-shadow: 0 0 10px gray;
			position: sticky;
			z-index: 999;
			top: 0;
			display: flex;
			align-items: center;
			background-color: rgba(255, 255, 255, 0.1);
			backdrop-filter: blur(10px);
			.left {
				width: 300px;
				color: gray;
				font-size: 20px;
				font-weight: 600;
			}
			.right {
				width: 900px;
			}
		}
		.body {
			height: 1000px;
			padding: 30px 100px;
		}
	}
</style>
