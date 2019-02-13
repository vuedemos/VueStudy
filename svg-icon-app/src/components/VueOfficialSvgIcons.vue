<template>
    <div class="icons">
        <h2>默认尺寸 32 x 32</h2>
        <IconBox icon-name="facebook"><Facebook /></IconBox>
        <IconBox icon-name="twitter"><Twitter /></IconBox>
        <IconBox icon-name="google plus"><GooglePlus /></IconBox>

        <hr />

        <h2>不同尺寸图标</h2>
        <IconBox 
            width="16"
            height="16"
            icon-name="facebook"><Facebook /></IconBox>
        <IconBox icon-name="twitter"><Twitter /></IconBox>
        <IconBox 
            width="48"
            height="48"
            icon-name="google plus"><GooglePlus /></IconBox>

        <hr />

        <h2>不同颜色</h2>
        <IconBox 
            icon-color="#f36"
            icon-name="facebook"><Facebook /></IconBox>
        <IconBox 
            icon-color="#f0987a"
            icon-name="twitter"><Twitter /></IconBox>

        <IconBox icon-name="google plus"><GooglePlus /></IconBox>


        <IconBox icon-name="arrow"><Arrow /></IconBox>
        <IconBox icon-name="calendar"><Calendar /></IconBox>
        
        <IconBox 
            width="35"
            height="36"
            icon-color="#f09"
            icon-name="search"><Search /></IconBox>
    </div>
</template>

<script>
    import IconBox from './icons/IconBox'
    import Facebook from './icons/Facebook'
    import Twitter from './icons/Twitter'
    import GooglePlus from './icons/GooglePlus'
    import Arrow from './icons/Arrow'
    import Calendar from './icons/Calendar'
    import Search from './icons/Search'
    
    export default {
        name: 'VueOfficialSvgIcons',
        components: {
            IconBox,
            Facebook,
            Twitter,
            GooglePlus,
            Arrow,
            Calendar,
            Search
        }
    }
</script>

<style scoped>
    svg {
        margin-left: 5px;
        margin-right: 5px;
    }
</style>

