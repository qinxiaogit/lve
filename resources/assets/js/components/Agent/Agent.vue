  <template>
        <el-table
                :data="tableData"
                border
                height="350"
                style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
                type="selection"
                width="55">
        </el-table-column>
        <el-table-column
                inline-template
                sortable
                label="生日"
                width="120">
            <div>{{ row.date }}</div>
        </el-table-column>
        <el-table-column
                inline-template
                label="姓名"
                width="120">
			<el-popover trigger="hover" placement="top">
					<p>姓名: {{ row.name }}</p>
					<p>住址: {{ row.address }}</p>
					<div slot="reference" class="name-wrapper">
					  <el-tag>{{ row.name }}</el-tag>
					</div>
		    </el-popover>
        </el-table-column>
         <el-table-column
				prop="qq"
				label="QQ"
				width="120">
		</el-table-column>
         <el-table-column
				prop="mobile"
				label="手机"
				width="160">
		</el-table-column>
		<el-table-column
				prop="education"
				label="教育"
				width="160">
		</el-table-column>
		<el-table-column
				prop="college"
				label="毕业学校"
				width="160">
		</el-table-column>
        <el-table-column
                prop="address"
                label="地址"
                show-overflow-tooltip>
        </el-table-column>
        <el-table-column
              prop="education"
              label="分类"
              width="180"
              :filters="[{ text: '本科', value: '本科' }, { text: '专科', value: '专科' }]"
              :filter-method="filterEducation"
              inline-template>
              <el-tag :type="row.education === '本科' ||row.education == '专科' ? 'primary' : 'success'" close-transition>{{row.education}}</el-tag>
            </el-table-column>
        <el-table-column
              :context="_self"
              inline-template
              fixed="right"
              width="160"
              align="center"
              label="操作">
              <div>
                <el-button
                  size="small"
                  @click="handleEdit($index, row)">
                  编辑
                </el-button>
                <el-button
                  size="small"
                  type="danger"
                  @click="handleDelete($index, row)">
                  删除
                </el-button>
              </div>
		</el-table-column>
	</el-table>
</template>
<style>
  .el-table .info-row {
	background: #c9e5f5;
  }
  .el-table .positive-row {
	background: #e2f0e4;
  }
</style>
<script>

  export default {
    data() {
      return {
        tableData: [{
          date: '2016-12-24',
          name: '任我行',
          qq:'848335647',
          mobile: '18560079158',
          education:'本科',
		  college:'蓝翔技校',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
	      date: '2016-12-25',
          name: '赵四方',
          mobile: '18060079158',
          qq:'848335647',
          education:'专科',
		  college:'新东方',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-12-26',
          name: '南望天',
          mobile: '18550079158',
          qq:'848335647',
          education:'高中',
		  college:'北大青鸟',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-12-07',
          name: '北北头',
          mobile: '18540079158',
          qq:'848335647',
          education:'本科',
		  college:'剑桥大学',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-12-28',
          name: '齐布来',
          mobile: '18500079158',
          qq:'848335647',
	      education:'本科',
		  college:'哈弗大学',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-12-29',
          name: '郭布区',
	      mobile: '18510079158',
		  qq:'848335647',
	      education:'金球奖',
		  college:'奥斯卡',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
		  date: '2016-12-29',
		  name: '郭布区',
		  mobile: '18510079158',
		  qq:'848335647',
	      education:'诺贝尔文学奖',
		  college:'剑桥大学',
	      address: '上海市普陀区金沙江路 1518 弄'
		  }, {
		  date: '2016-12-29',
		  name: '郭布区',
		  mobile: '18510079158',
		  qq:'848335647',
	      education:'硕士',
		  college:'早稻田大学',
		  address: '上海市普陀区金沙江路 1518 弄'
		}, {
		  date: '2016-12-21',
		  name: '郭布区',
		  mobile: '18510079158',
		  qq:'848335647',
	      education:'育儿园',
		  college:'清华紫光',
		  address: '上海市普陀区金沙江路 1518 弄'
	     }, {
          date: '2016-12-18',
          name: '王小虎',
          qq:'848335647',
          mobile: '18520079158',
	      education:'本科',
		  college:'加里顿大学',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: []
      }
    },
    methods: {
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleClick(){

      },
      filterEducation(value, row) {
	    return row.education === value;
	  },
	  handleEdit(index,row){
		this.$notify.success({
			title: row.name,
			message: row.address,
			offset: 100
	  	});
	  },
	  handleDelete(index,row){
		this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
		  confirmButtonText: '确定',
		  cancelButtonText: '取消',
		  type: 'warning'
		}).then(() => {
		  this.$message({
			type: 'success',
			message: '删除成功!'
		  });
		}).catch(() => {
		  this.$message({
			type: 'info',
			message: '已取消删除'
		  });
		});
	  }
    }
  }
</script>