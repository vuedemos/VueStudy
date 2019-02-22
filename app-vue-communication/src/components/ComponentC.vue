<template>
    <div class="component-c">
        <h3>组件C (ComponentC)</h3>
        <p>组件C中的props: {{ name }}</p>
        <p>$attrs: {{ $attrs }}</p>
    </div>
</template>

<script>
export default {
    name: 'ComponentC',
    props: {
        name: {
            type: String,
            default: '大漠'
        }
    },
    inheritAttrs: false,
    mounted () {
        this.$emit('test2')
        console.log(this.$attrs, this.$$listeners)
    }
}
</script>

<style scoped>

</style>
