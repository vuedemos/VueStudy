<template>
    <div class="svg-icons">
        <icon icon-name="facebook"></icon>
        <icon icon-name="twitter"></icon>
        <icon icon-name="google"></icon>

        <h2>不同的大小和颜色的图标</h2>
        <icon icon-name="facebook"></icon>
        <icon icon-name="twitter" width="48" height="48"></icon>
        <icon icon-name="google" width="64" height="64" icon-color="green"></icon>
    </div>
</template>

<script>
    export default {
        name: 'SvgSpritesIcon'
    }
</script>

<style scoped>
    svg {
        margin-left: 5px;
        margin-right: 5px;
    }
</style>