<template>
	<el-form :inline="true" :model="formInline">
		<el-form-item>
			<el-input v-model="search.user" placeholder="审批人" size="mini"></el-input>
		</el-form-item>
		<el-form-item>
			<el-select v-model="search.region" placeholder="活动区域" size="mini">
				<el-option label="上海" value="shanghai"></el-option>
				<el-option label="北京" value="beijing"></el-option>
			</el-select>
		</el-form-item>
		<el-form-item>
			<el-button type="primary" @click="onSubmit" size="mini">查询</el-button>
		</el-form-item>
	</el-form>
</template>
<style>

</style>
<script>
 export default {
    data() {
      return {
        search: {
          user: '',
          region: ''
        }
      }
    },
    methods: {
      onSubmit() {
      console.log(this);
       this.$store.commit('increment');
       this.$emit('search-source', this.search);
      }
    },
    created:function(){
    	this.$on('search-source',function(params){
			console.log( this.$store.state.count)
    	});
    }
  }
</script>
