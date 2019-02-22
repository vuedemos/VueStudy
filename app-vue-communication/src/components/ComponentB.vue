<template>
    <div class="component-b">
        <h3>组件B （ComponentB）</h3>
        <p>组件B中的props: {{ age }}</p>
        <p>$attrs: {{ $attrs }}</p>

        <div>组件C（ComponentC）中能直接触发test的原因在于组件B（ComponentB）调用组件C时，使用v-on="$listeners" </div>
        <div>通过v-bind="$attrs" 组件C （ComponentC）可以直接获取到组件A（ComponentA）中传递下来的props (除了组件B中的props声明的)</div>

        <ComponentC v-bind="$attrs" v-on="$listeners" />
    </div>
</template>

<script>
import ComponentC from './ComponentC'

export default {
    name: 'ComponentB',
    props: {
        age: {
            type: Number,
            default: 30
        }
    },
    inheritAttrs: false,
    components: {
        ComponentC
    },
    mounted () {
        this.$emit('test1')
        console.log(this.$attrs, this.$$listeners)
    }
}
</script>

<style scoped>

</style>
