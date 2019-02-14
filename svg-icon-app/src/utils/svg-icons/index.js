import Vue from 'vue'

import iconSpriteLoadComponent from '../../components/svgSprites/Icon.vue'

Vue.component('icon',iconSpriteLoadComponent)

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('../../assets/icons', false, /\.svg$/)

requireAll(req)