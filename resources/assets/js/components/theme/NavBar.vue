<template>
	<el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
	  <el-menu-item index="1">Logo</el-menu-item>
	  <el-submenu index="2">
		<template slot="title">Source</template>
		<el-menu-item index="2-1">Source</el-menu-item>
		<el-menu-item index="2-2">Trace</el-menu-item>
		<el-menu-item index="2-3">Community</el-menu-item>
	  </el-submenu>
	  <el-menu-item index="3">Schedule</el-menu-item>
	</el-menu>
</template>
<script>
  export default {
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>