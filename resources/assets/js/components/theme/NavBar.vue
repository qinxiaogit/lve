<template>
	<el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
		<el-menu-item index="/">
			首页
		</el-menu-item>
		<el-submenu index="2">
			<template slot="title">组件</template>
			<el-menu-item index="source">
				列表
			</el-menu-item>
			<el-menu-item index="trace">
				Trace
			</el-menu-item>
			<el-menu-item index="community">
				Community
			</el-menu-item>
		</el-submenu>
		<el-menu-item index="client">
			表单
		</el-menu-item>
	</el-menu>
</template>
<script>
import VueRouter from 'vue-router';
const router = new VueRouter();
  export default {
    methods: {
      handleSelect(key, keyPath) {
      	router.push(key);
      }
    }
  }
</script>