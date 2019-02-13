<template>
    <svg :width="width" :height="height" :style="{color: iconColor}">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="iconId"></use>
    </svg>
</template>

<script>
    export default {
        name: 'Icon',
        props: {
            iconName: {
                type: String,
                default: 'box'
            },
            width: {
                type: [Number, String],
                default: 32
            },
            height: {
                type: [Number, String],
                default: 32
            },
            iconColor: {
                type: String,
                default: 'currentColor'
            }
        },
        computed: {
            iconId() {
                return `#icon-${this.iconName}`
            }
        }
    }
</script>