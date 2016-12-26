<template>
	<div id="app">
		<NavBar></NavBar>
		<router-view></router-view>
	</div>
</template>

<script>
import NavBar from './theme/NavBar.vue';
export default {
		name: 'App',
		components: {
			NavBar
		}
};
</script>

