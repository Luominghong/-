import animateText from './animateText'
import cpsOne from './cpsOne'
const components = [
    animateText,
    cpsOne
]

const install = function (Vue) {
    if(install.installed) return
    components.map(component => Vue.component(component.name,component))
}

if (typeof window !== 'undefined' && window.Vue){
    install(window.Vue)
}

export default {
    install,
    animateText,
    cpsOne
}