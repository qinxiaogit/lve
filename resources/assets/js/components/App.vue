<template>
  <div id="app">
    <NavBar></NavBar>
 	<Agent></Agent>
 	<Page></Page>
  </div>
</template>
<script>
  import NavBar from './theme/NavBar.vue';
  import Agent from './Agent/Agent.vue';
  import Page from './Page/Page.vue';
  export default {
    name: 'App',
    components: {
      NavBar,
      Agent,
      Page
    }
  };
</script>