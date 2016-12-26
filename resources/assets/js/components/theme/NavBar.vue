<template>
	<el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
		<el-menu-item index="/">
			Home
		</el-menu-item>
		<el-submenu index="2">
			<template slot="title">Source</template>
			<el-menu-item index="2-1">
				Source
			</el-menu-item>
			<el-menu-item index="2-2">
				Trace
			</el-menu-item>
			<el-menu-item index="2-3">
				Community
			</el-menu-item>
		</el-submenu>
		<el-menu-item index="3">
			Client
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
        console.log(key, keyPath);
      }
    }
  }
</script>