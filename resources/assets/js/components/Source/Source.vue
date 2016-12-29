<template>
	<div>
		<Search></Search>
		<SourceGrid></SourceGrid>
		<Page></Page>
	</div>
</template>
<style>

</style>
<script>
    import Search from './Search.vue'
    import SourceGrid from './Source-Grid.vue'
    import Page from './Page.vue'
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
           Search,
           SourceGrid,
           Page
        },
        methods:{
        	
        },
        created: function () {
			this.$on('search', function (params) {
				console.log(params)
			})
    	}
    }
</script>
