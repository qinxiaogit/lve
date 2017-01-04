<template>
    <div style="margin-top:20px; margin-left:20px;">
        <el-steps :space="100" :active="active" finish-status="success">
            <el-step title="鼠"></el-step>
            <el-step title="牛"></el-step>
            <el-step title="虎"></el-step>
            <el-step title="兔"></el-step>
            <el-step title="龙"></el-step>
            <el-step title="蛇"></el-step>
            <el-step title="马"></el-step>
            <el-step title="羊"></el-step>
            <el-step title="猴"></el-step>
            <el-step title="鸡"></el-step>
            <el-step title="狗"></el-step>
            <el-step title="猪"></el-step>
        </el-steps>
        <el-button style="margin-top: 20px;" @click="next" size="small">变</el-button>
    </div>
</template>
<script>
    export default{
        data() {
              return {
                active: 0
              };
            },
            methods: {
              next() {
                if (this.active++ > 11) this.active = 0;
              }
            }
    }
</script>
