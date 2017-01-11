<template>
   <div>
       <Card></Card>
       <Step></Step>
       <Two></Two>
   </div>
</template>
<script>
import Card from './Card.vue';
import Step from './Step.vue';
import Two from './Two.vue'
export default {
    components:{
               Card,
               Step,
               Two
            }
}
</script>
