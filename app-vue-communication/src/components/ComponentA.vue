<template>
    <div class="component-a">
        <ComponentB :age="age" :name="name" v-on:test1="onTest1" v-on:test2="onTest2" />
    </div>
</template>

<script>
import ComponentB from './ComponentB'

export default {
    name: 'ComponentA',
    components: {
        ComponentB
    },
    methods: {
        onTest1() {
            console.log('test1 running...')
        },
        onTest2() {
            console.log('test2 running...')
        }
    },
    data () {
        return {
            age: 23,
            name: 'w3cplus'
        }
    }
}
</script>

<style scoped>

</style>
