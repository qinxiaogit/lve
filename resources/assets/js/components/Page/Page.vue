<template>
	<el-pagination
	  @size-change="handleSizeChange"
	  @current-change="handleCurrentChange"
	  :current-page="currentPage"
	  :page-sizes="[5, 10, 15, 20]"
	  :page-size="7"
	  align='right'
	  layout="total, sizes, prev, pager, next, jumper"
	  :total="10">
	</el-pagination>
</template>
<script>
  export default {
      methods: {
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
          this.currentPage = val;
          console.log(`当前页: ${val}`);
        }
      },
      data() {
        return {
          currentPage: 1
        };
      }
    }
</script>