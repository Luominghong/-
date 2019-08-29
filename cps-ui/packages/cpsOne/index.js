import cpsOne from './src/cpsOne.vue'

cpsOne.install = function (Vue) {
    Vue.component(cpsOne.name,cpsOne)
}

export default cpsOne