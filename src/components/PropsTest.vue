<script>
export default {
    props:{
        msg:{
            type:String,
            default:'預設值'
        }
    },
    setup(props){
        console.log('test',props)
        return {
            props
        }
    }
}
</script>

<template>
  <h1>{{props.msg}}</h1>
</template>

<style lang="scss" scoped>
h1{
    color: red;
}
</style>