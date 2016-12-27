<template>
	<el-dialog title="404" v-model="dialogVisible" size="tiny">
		<span>厉害了我的哥，都玩出了404了</span>
		<span slot="footer" class="dialog-footer">
			<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  		</span>
	</el-dialog>
</template>
<script>
  export default {
	data() {
		  return {
			dialogVisible: true
		  };
		}
  }
</script>
